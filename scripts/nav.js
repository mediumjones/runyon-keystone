/* ================================================================
   Side navigation — injected on every screen page.
   Single source of truth for the TOC structure.
   ================================================================ */

(function () {
  const NAV = [
    {
      title: 'Identity Monitoring',
      num: '01',
      groups: [
        {
          label: 'Empty states',
          open: true,
          items: [
            { file: 's1.html', title: 'Monitoring Landing' },
            { file: 's1ra.html', title: 'Security Snapshot' },
            { file: 's1ra-family.html', title: 'Family Tab', pill: 'family' },
          ]
        },
        {
          label: 'Populated',
          open: true,
          items: [
            { file: 's1b.html', title: 'Monitoring Landing' },
            { file: 's8.html', title: 'Financial Accounts' },
            { file: 's1rb.html', title: 'Security Snapshot' },
            { file: 's1rb-family.html', title: 'Family Tab', pill: 'family' },
            { file: 's1rb-teresa.html', title: 'Teresa', pill: 'family' },
          ]
        },
        {
          label: 'Details',
          open: false,
          items: [
            { file: 's2.html', title: 'Personal Collection' },
            { file: 's3.html', title: 'Add Item Sheet' },
            { file: 's4.html', title: 'Select Item Type' },
            { file: 's5.html', title: 'Add Item Details' },
          ]
        }
      ]
    },
    {
      title: 'Activity and Alerts',
      num: '02',
      topItems: [
        { file: 's6.html', title: 'Activity Landing' },
      ],
      groups: [
        {
          label: 'Manual response',
          open: true,
          items: [
            { file: 's7.html', title: 'Dark Web Alert \u00b7 In-app' },
            { file: 's7-email.html', title: 'Dark Web Alert \u00b7 Email' },
            { file: 's7-lock.html', title: 'Dark Web Alert \u00b7 Lock' },
          ]
        },
        {
          label: 'Auto-resolved',
          open: true,
          items: [
            { file: 's7b.html', title: 'Dark Web Alert \u00b7 In-app' },
            { file: 's7b-email.html', title: 'Dark Web Alert \u00b7 Email' },
            { file: 's7b-lock.html', title: 'Dark Web Alert \u00b7 Lock' },
          ]
        }
      ]
    },
    {
      title: 'Virtual Cards',
      num: '03',
      topItems: [
        { file: 's9-concept.html', title: 'Concept Explainer' },
        { file: 's1-desktop.html', title: 'Browser Extension' },
      ],
      groups: [
        {
          label: 'Merchant-locked card',
          open: true,
          items: [
            { file: 's10-prompt.html', title: 'Checkout Prompt' },
            { file: 's11-confirm.html', title: 'Post-Purchase Confirmation' },
          ]
        }
      ]
    }
  ];

  const currentFile = location.pathname.split('/').pop();

  function buildItems(items) {
    return items.map(item => {
      const active = item.file === currentFile;
      const pill = item.pill ? `<span class="sn-pill">${item.pill}</span>` : '';
      return `<a class="sn-item${active ? ' is-active' : ''}" href="${item.file}">${item.title}${pill}</a>`;
    }).join('');
  }

  function buildGroup(group) {
    const count = group.items.length;
    if (!group.label) {
      return `<div class="sn-group-items">${buildItems(group.items)}</div>`;
    }
    const hasActive = group.items.some(i => i.file === currentFile);
    const isOpen = group.open || hasActive;
    return `
      <details class="sn-group"${isOpen ? ' open' : ''}>
        <summary>${group.label}<span class="sn-count">${count}</span></summary>
        ${buildItems(group.items)}
      </details>
    `;
  }

  function buildSection(section) {
    const topItems = section.topItems ? buildItems(section.topItems) : '';
    const groups = section.groups.map(buildGroup).join('');
    return `
      <div class="sn-section">
        <div class="sn-heading">
          <span class="sn-num">${section.num}</span>
          ${section.title}
        </div>
        ${topItems}
        ${groups}
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('nav');
    nav.id = 'side-nav';
    nav.className = 'sn';
    nav.innerHTML = `
      <div class="sn-body" id="sn-body">
        <a class="sn-home" href="../index.html">
          <span class="material-symbols-outlined">arrow_back</span>
          All concepts
        </a>
        <div class="sn-sections">
          ${NAV.map(buildSection).join('')}
        </div>
      </div>
    `;
    document.body.prepend(nav);

    // Replace the viewer-bar__back link with a menu toggle button
    const backLink = document.querySelector('.viewer-bar__back');
    if (backLink) {
      const menuBtn = document.createElement('button');
      menuBtn.className = 'viewer-bar__menu';
      menuBtn.type = 'button';
      menuBtn.setAttribute('aria-label', 'Toggle navigation');
      menuBtn.innerHTML = '<span class="material-symbols-outlined" id="sn-toggle-icon">menu</span>';
      backLink.replaceWith(menuBtn);
    }

    // Collapse/expand
    const toggle = document.querySelector('.viewer-bar__menu');
    const icon = document.getElementById('sn-toggle-icon');
    const KEY = 'ks-nav';
    const collapsed = localStorage.getItem(KEY) === '0';

    if (collapsed) {
      nav.classList.add('is-collapsed');
      icon.textContent = 'menu';
    } else {
      icon.textContent = 'close';
    }

    if (toggle) {
      toggle.addEventListener('click', () => {
        const willCollapse = !nav.classList.contains('is-collapsed');
        nav.classList.toggle('is-collapsed');
        icon.textContent = willCollapse ? 'menu' : 'close';
        localStorage.setItem(KEY, willCollapse ? '0' : '1');
      });
    }

    // Scroll active item into view
    const active = nav.querySelector('.sn-item.is-active');
    if (active) {
      active.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  });
})();

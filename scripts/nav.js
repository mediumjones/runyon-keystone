/* ================================================================
   Side navigation — injected on every screen page.
   Single source of truth for the TOC structure.
   ================================================================ */

(function () {
  const NAV = [
    {
      title: 'Identity Monitoring',
      num: '01',
      topItems: [
        { file: 'home-new-user.html',  title: 'Home', pill: 'new user' },
        { file: 'home.html', title: 'Home' },
        { file: 'financial-accounts.html',  title: 'Financial Accounts' },
      ],
      groups: []
    },
    {
      title: 'Security Snapshot',
      num: '02',
      topItems: [
        { file: 'solo-new-user.html',              title: 'Solo',       pill: 'new user' },
        { file: 'solo.html',              title: 'Solo' },
        { file: 'family-new-user.html',       title: 'Family',     pill: 'new user' },
        { file: 'family.html',       title: 'Family' },
        { file: 'mom-in-law.html',       title: 'Mom-in-law' },
        { file: 'kid-email.html', title: 'Kid',        pill: 'email' },
      ],
      groups: []
    },
    {
      title: 'Activity and Alerts',
      num: '03',
      topItems: [
        { file: 'activity-feed.html', title: 'Activity Feed' },
      ],
      groups: [
        {
          label: 'Dark Web Alert',
          open: true,
          items: [
            { file: 'ssn-alert-auto-in-app.html',        title: 'SSN Alert Manual',      pills: ['in app']     },
            { file: 'ssn-alert-auto-email.html',  title: 'SSN Alert Manual',      pills: ['email']      },
            { file: 'ssn-alert-auto-lockscreen.html',   title: 'SSN Alert Manual',      pills: ['lockscreen'] },
            { file: 'ssn-alert-manual-in-app.html',       title: 'SSN Alert Auto',  pills: ['in app']     },
            { file: 'ssn-alert-manual-email.html', title: 'SSN Alert Auto',  pills: ['email']      },
            { file: 'ssn-alert-manual-lockscreen.html',  title: 'SSN Alert Auto',  pills: ['lockscreen'] },
          ]
        },
        {
          label: 'Financial Alert',
          open: true,
          items: [
            { file: 'financial-alert-1-of-4.html',    title: 'Financial Alert \u00b7 1 of 4', pill: 'email' },
            { file: 'financial-alert-2-of-4.html',   title: 'Financial Alert \u00b7 2 of 4' },
            { file: 'financial-alert-3-of-4.html',   title: 'Financial Alert \u00b7 3 of 4' },
            { file: 'financial-alert-4-of-4.html', title: 'Financial Alert \u00b7 4 of 4' },
          ]
        }
      ]
    },
    {
      title: 'Masked Identity',
      num: '04',
      topItems: [
        { file: 'masked-identity-home.html', title: 'Masked Identity Home' },
      ],
      groups: [
        {
          label: 'Virtual Card',
          open: true,
          items: [
            { file: 'payment-dropdown.html',  title: 'Payment Dropdown' },
            { file: 'extension-popover.html',  title: 'Extension Popover' },
            { file: 'card-populated.html', title: 'Card Populated' },
          ]
        }
      ]
    }
  ];

  const currentFile = location.pathname.split('/').pop();

  function buildItems(items) {
    return items.map(item => {
      const active = item.file === currentFile;
      // Accepts item.pill (string) or item.pills (string[]).
      const pillList = item.pills || (item.pill ? [item.pill] : []);
      const pills = pillList.map(p => {
        // Slug any whitespace in the variant class so CSS targeting works.
        const variant = p.toLowerCase().replace(/\s+/g, '-');
        return `<span class="sn-pill sn-pill--${variant}">${p}</span>`;
      }).join('');
      return `<a class="sn-item${active ? ' is-active' : ''}" href="${item.file}">${item.title}${pills}</a>`;
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

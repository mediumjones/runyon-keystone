(function () {
  // Download PNG button — uses html2canvas to capture screen content
  document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      var targetId = btn.dataset.copyTarget;
      var el = document.getElementById(targetId);
      if (!el) return;

      btn.disabled = true;

      try {
        var canvas = await html2canvas(el, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
          logging: false
        });

        var blob = await new Promise(function (resolve) {
          canvas.toBlob(resolve, 'image/png');
        });

        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = (document.title.split('—')[0] || 'screen').trim() + '.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('PNG downloaded');
      } catch (err) {
        console.error('Download failed:', err);
        showToast('Download failed');
      } finally {
        btn.disabled = false;
      }
    });
  });

  function showToast(message) {
    var toast = document.querySelector('.viewer-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'viewer-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('is-visible');
    // Force reflow for re-trigger
    void toast.offsetWidth;
    toast.classList.add('is-visible');
    clearTimeout(toast._tid);
    toast._tid = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 2400);
  }
})();

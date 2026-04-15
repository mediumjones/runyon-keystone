/* ================================================================
   Simple password gate for prototype sharing.
   Not cryptographically secure — just keeps casual visitors out.

   To change the password, update the PW constant below.
   ================================================================ */

// Password: "keystone3a" — change this to whatever you want
const PW = 'keystone3a';

(function () {
  if (sessionStorage.getItem('ks-auth') === '1') return;

  // Hide page content immediately
  document.documentElement.style.visibility = 'hidden';

  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.visibility = '';

    const overlay = document.createElement('div');
    overlay.id = 'gate';
    overlay.innerHTML = `
      <div style="
        position:fixed;inset:0;z-index:99999;
        display:flex;align-items:center;justify-content:center;
        background:#f7f5f0;
        font-family:-apple-system,'SF Pro Text',system-ui,sans-serif;
      ">
        <form id="gate-form" style="
          text-align:center;
          background:#fff;
          padding:48px 40px;
          border-radius:16px;
          box-shadow:0 1px 3px rgba(0,0,0,0.04),0 4px 16px rgba(0,0,0,0.03);
          border:1px solid rgba(0,0,0,0.06);
          max-width:320px;
          width:100%;
        ">
          <div style="font-size:28px;font-weight:700;margin-bottom:6px;font-family:'Kalam',cursive;">Keystone</div>
          <div style="font-size:13px;color:#a1a4b1;margin-bottom:32px;">Enter password to view prototypes</div>
          <input id="gate-pw" type="password" placeholder="Password" autocomplete="off" style="
            display:block;width:100%;padding:12px 16px;
            font-size:14px;font-family:inherit;
            border:1px solid #e7e7e7;border-radius:8px;
            outline:none;box-sizing:border-box;
            margin-bottom:16px;
          " />
          <button type="submit" style="
            display:block;width:100%;padding:12px;
            background:#111;color:#fff;border:none;border-radius:80px;
            font:600 14px/1 -apple-system,'SF Pro Text',system-ui,sans-serif;
            cursor:pointer;
          ">Continue</button>
          <div id="gate-err" style="color:#c33;font-size:12px;margin-top:12px;display:none;">Incorrect password</div>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);

    const input = document.getElementById('gate-pw');
    input.focus();

    document.getElementById('gate-form').addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value === PW) {
        sessionStorage.setItem('ks-auth', '1');
        overlay.remove();
      } else {
        document.getElementById('gate-err').style.display = 'block';
        input.value = '';
        input.focus();
      }
    });
  });
})();

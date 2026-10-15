document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const btn = document.getElementById('test-js');
  const msg = document.getElementById('js-message');

  if (btn && msg) {
    btn.addEventListener('click', function () {
      msg.hidden = false;
      msg.textContent = 'JavaScript is working successfully!';
      msg.style.opacity = '0';
      msg.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 220,
        fill: 'forwards'
      });
      btn.focus();
    });
  }
});

// ============================================================
// Hover-to-popup concept card system
// Mark terms: <span class="cr" data-card="card-id">term</span>
// Store cards: <template id="card-data-card-id">...concept-card HTML...</template>
// ============================================================
(function(){
  let popup = null;
  let hideTimer = null;
  let activeLink = null;

  function ensurePopup() {
    if (popup) return popup;
    popup = document.createElement('div');
    popup.className = 'card-popup';
    popup.setAttribute('data-popup', '1');
    document.body.appendChild(popup);
    // Hide on click outside or Escape key
    document.addEventListener('click', function(e){
      if (popup && !e.target.closest('.cr') && !e.target.closest('.card-popup')) {
        dismiss();
      }
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') dismiss();
    });
    return popup;
  }

  function dismiss() {
    if (hideTimer) clearTimeout(hideTimer);
    if (popup) popup.classList.remove('show');
    activeLink = null;
  }

  function positionPopup(el) {
    const p = ensurePopup();
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pw = 400;

    // Try below first
    let top = rect.bottom + 8;
    let left = rect.left;

    // Estimate popup height
    const ph = Math.max(p.offsetHeight, 100);
    const bottomRoom = vh - top - ph;
    const topRoom = rect.top - ph - 8;

    if (bottomRoom < 20 && topRoom > bottomRoom) {
      // Not enough room below, show above
      top = rect.top - ph - 8;
    }

    // Horizontal bounds
    if (left + pw > vw - 16) left = vw - pw - 16;
    if (left < 8) left = 8;

    // Don't let popup go above viewport
    if (top < 8) top = 8;

    p.style.top = top + 'px';
    p.style.left = left + 'px';
  }

  function showCard(el) {
    // Cancel any pending hide
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }

    // If already showing this card, do nothing
    if (activeLink === el) return;

    // Hide previous card immediately (no delay)
    if (activeLink && activeLink !== el) {
      dismiss();
    }

    activeLink = el;

    const cardId = el.getAttribute('data-card');
    const template = document.getElementById('card-data-' + cardId);
    if (!template) return;

    const p = ensurePopup();
    p.innerHTML = '';
    p.appendChild(template.content.cloneNode(true));
    p.classList.add('show');

    // Typeset MathJax inside popup
    if (window.MathJax && window.MathJax.typesetPromise) {
      MathJax.typesetPromise([p]).then(function(){
        positionPopup(el);
      }).catch(function(){});
    } else {
      positionPopup(el);
    }
  }

  function hideCard() {
    // Short delay to avoid flicker when moving between link and popup
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(function(){
      if (popup) popup.classList.remove('show');
      activeLink = null;
      hideTimer = null;
    }, 150);
  }

  function cancelHide() {
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
  }

  function attach() {
    document.querySelectorAll('.cr').forEach(function(el){
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    if (popup) {
      popup.removeEventListener('mouseenter', cancelHide);
      popup.removeEventListener('mouseleave', hideCard);
      popup.addEventListener('mouseenter', cancelHide);
      popup.addEventListener('mouseleave', hideCard);
    }
  }

  function onEnter(e) { showCard(this); }
  function onLeave(e) { hideCard(); }

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }

  // Re-attach after MathJax
  if (window.MathJax && window.MathJax.startup) {
    window.MathJax.startup.promise.then(function(){
      setTimeout(attach, 200);
    });
  }

  // MutationObserver for dynamic content
  if (window.MutationObserver) {
    new MutationObserver(function(){ attach(); })
      .observe(document.body, { childList: true, subtree: true });
  }

  window.refreshCardLinks = attach;
})();

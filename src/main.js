// list counter

const list = document.querySelector('.js-steps');
let count = 0;
list.querySelectorAll('li').forEach((item) => {
  count++;
  item.querySelector('.js-step-counter').textContent = count;
});

document.addEventListener('DOMContentLoaded', function() {
  const openModal = document.querySelectorAll('.js-open-modal');
  const closeModal = document.querySelectorAll('.data-modal-close');
  const modal = document.querySelector('.data-modal');
  openModal.forEach(function(element) {
    element.addEventListener('click', function() {
      modal.classList.remove('visually-hidden');
    });
  });
  closeModal.addEventListener('click', function() {
    modal.classList.add('visually-hidden');
  });

  // open mobile menu

  (() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
});
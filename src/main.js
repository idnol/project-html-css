document.addEventListener('DOMContentLoaded', function() {
  // list counter
  const list = document.querySelector('.js-steps');
  let count = 0;
  list.querySelectorAll('li').forEach((item) => {
    count++;
    item.querySelector('.js-step-counter').textContent = count;
  });

  // open modal
  const openModal = document.querySelectorAll('.js-open-modal');
  const closeModal = document.querySelectorAll('.data-modal-close');
  const modal = document.querySelector('.data-modal');
  openModal.forEach(function(element) {
    element.addEventListener('click', function() {
      modal.classList.remove('is-hidden');
    });
  });
  closeModal.forEach(function(element) {
    element.addEventListener('click', function() {
      modal.classList.add('is-hidden');
    });
  });

  // basket
  const basketList = document.querySelector('.js-basket-list');
  const basketItem = basketList.querySelectorAll('.js-item-basket');
  const choice = document.querySelector('.js-choice');
  let basket = [];

  basketItem.forEach(function(item) {
    item.addEventListener('click', function() {
      let val = this.querySelector('h3').textContent;
      let check = this.querySelector('.js-basket-add');

      check.classList.toggle('active');

      if (check.classList.contains('active')) {
        basket.push(val);
      } else {
        const index = basket.indexOf(val);
        if (index !== -1) {
          basket.splice(index, 1);
        }
      }
      choice.value = basket.join(', ');
    });
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
      refs.openMenuBtn.classList.toggle('d-none');
      refs.closeMenuBtn.classList.toggle('d-none');
      document.body.classList.toggle('no-scroll');
    }
  })();

  document.querySelectorAll('.js-nav-list li').forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelectorAll('[data-menu]').forEach(function(menu) {
        menu.classList.toggle('is-hidden');
      });
      document.querySelectorAll('[data-menu-close]').forEach(function(close) {
        close.classList.toggle('d-none');
      });
      document.querySelectorAll('[data-menu-open]').forEach(function(open) {
        open.classList.toggle('d-none');
      });
    });
  });
});

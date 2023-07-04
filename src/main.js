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

      console.log(basket);
      choice.value = basket.join(', ');
    });
  });
});







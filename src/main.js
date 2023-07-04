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
      modal.classList.remove('is-hidden');
    });
  });
  closeModal.forEach(function(element) {
    element.addEventListener('click', function() {
      modal.classList.add('is-hidden');
    });
  });
});
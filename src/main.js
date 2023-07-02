const list = document.querySelector('.js-steps');
let count = 0;
list.querySelectorAll('li').forEach((item) => {
  count++;
  item.querySelector('.js-step-counter').textContent = count;
});
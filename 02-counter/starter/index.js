const btns = document.querySelectorAll('.btn-list');
const number = document.querySelector('.number');

const handleClick = (e) => {
  const targetNumber = number.textContent;
  const type = e.target.dataset.type;

  if (type === 'decrease') {
    const decreaseNumber = targetNumber - 1;
    if (decreaseNumber < 0) {
      return 0;
    }
    number.textContent = decreaseNumber;
  }

  if (type === 'increase') {
    const increaseNumber = Number(targetNumber) + 1;
    number.textContent = increaseNumber;
  }

  if (type === 'reset') {
    number.textContent = 0;
  }
};

btns.forEach((btn) => btn.addEventListener('click', handleClick));

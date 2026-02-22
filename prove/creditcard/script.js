const theForm = document.querySelector('#creditCardForm');

function displayError(msg) {
  document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  displayError('');

  const cardNum = document.querySelector('#cardNumber').value.trim();

  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
  }

  const expYear = Number(document.querySelector('#year').value);
  const expMonth = Number(document.querySelector('#month').value);
  const currentDate = new Date();

  if (
    2000 + expYear < currentDate.getFullYear() ||
    (2000 + expYear === currentDate.getFullYear() &&
     expMonth <= currentDate.getMonth() + 1)
  ) {
    errorMsg += 'Card is expired\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  theForm.innerHTML = '<h2>Payment Successful 🎉</h2>';
}

theForm.addEventListener('submit', submitHandler);
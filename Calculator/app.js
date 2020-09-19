const operatorValues = ['/', 'X', '-', '+'];
const numValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let firstValueEntries = [];
let firstNum = 0;
let secondValueEntries = [];
let secondNum = 0;
let btnValue = '';
let operatorSelected = false;
let operator = '';
let result = 0;

//Obtain Btn Value && Set Bool values && Push to Arrays
document.querySelector('.btn-container').addEventListener('click', (e) => {
  btnValue = e.target.innerText;
  //Setting array values && Operator Value && = functionality
  if (operatorSelected === false && numValues.includes(btnValue)) {
    firstValueEntries.push(btnValue);
    firstNum = parseInt(firstValueEntries.join(''));
    document.querySelector('.display-txt').innerText = firstNum;
  } else if (operatorSelected === true && numValues.includes(btnValue)) {
    secondValueEntries.push(btnValue);
    secondNum = parseInt(secondValueEntries.join(''));
    document.querySelector('.display-txt').innerText = secondNum;
  } else if (operatorValues.includes(btnValue)) {
    operatorSelected = true;
    operator = btnValue;
  } else if (btnValue === '=') {
    // Compute Result
    if (operator === '/') {
      result = firstNum / secondNum;
      document.querySelector('.display-txt').innerText = result;
    } else if (operator === 'X') {
      result = firstNum * secondNum;
      document.querySelector('.display-txt').innerText = result;
    } else if (operator === '-') {
      result = firstNum - secondNum;
      document.querySelector('.display-txt').innerText = result;
    } else if (operator === '+') {
      result = firstNum + secondNum;
      document.querySelector('.display-txt').innerText = result;
    }
    //Clear functionality
  } else if (btnValue === 'C') {
    firstValueEntries = [];
    secondValueEntries = [];
    result = 0;
    operatorSelected = false;
    document.querySelector('.display-txt').innerText = result;
    // Del functionality
  } else if (btnValue === 'DEL' && operatorSelected === false) {
    firstValueEntries.pop();
    firstNum = parseInt(firstValueEntries.join(''));
    document.querySelector('.display-txt').innerText = firstNum;
    console.log(firstValueEntries);
  } else if (btnValue === 'DEL' && operatorSelected === true) {
    secondValueEntries.pop();
    secondNum = parseInt(secondValueEntries.join(''));
    document.querySelector('.display-txt').innerText = secondNum;
  }
});


const resultDisplay = document.getElementById('result');
const buttonsContainer = document.querySelector('.buttons');


const buttonLabels = [
  '1', '2', '3', '+',
  '4', '5', '6', '-',
  '7', '8', '9', '*',
  '0', 'C', '=', '/'
];


buttonLabels.forEach(label => {
  const button = document.createElement('button');
  button.classList.add('button');
  button.textContent = label;


  if (label === 'C') {
    button.onclick = clearDisplay;
  } else if (label === '=') { 
    button.onclick = calculateResult;
  } else {
    button.onclick = () => appendNumber(label);
  }

  buttonsContainer.appendChild(button);
});


function appendNumber(value) {
  resultDisplay.value += value;
}

function clearDisplay() {
  resultDisplay.value = '';
}

function calculateResult() {
  try {
    resultDisplay.value = eval(resultDisplay.value);
  } catch (e) {
    resultDisplay.value = 'Error';
  }
}


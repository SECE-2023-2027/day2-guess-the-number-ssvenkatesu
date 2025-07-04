let secretnumber = Math.floor(Math.random() * 100) + 1;
let totalscore = 20;

const checkbutton = document.getElementById('checkBtn');
const againbutton = document.querySelector('.againbtn');
let inputvalue = document.getElementById('inputValue');
let guessedvalue = document.getElementById('guessedValue');
let guessednumbertext = document.getElementById('guessedNumber');
let overviewtext = document.querySelector('.overview p');
const scorecontent = document.getElementById('score');
let inputcontainer = document.getElementById('inputid');

scorecontent.textContent = `Total Score : ${totalscore}`;

checkbutton.addEventListener('click', () => {
  const guess = Number(inputvalue.value);

  if (!guess || guess < 1 || guess > 100) {
    overviewtext.textContent = 'Enter a number between 1 and 100!';
  } else if (guess === secretnumber) {
    totalscore += 1;
    guessedvalue.textContent = secretnumber;
    overviewtext.textContent = 'Correct Number!';
    document.querySelector('.container').style.backgroundColor = '#60b347';
  } else if (guess > secretnumber) {
    totalscore -= 1;
    overviewtext.textContent = '📉 Too high!';
  } else {
    totalscore -= 1;
    overviewtext.textContent = '📈 Too low!';
  }

  guessednumbertext.textContent = `Guessed Number: ${guess}`;
  scorecontent.textContent = `Total Score : ${totalscore}`;

  if (totalscore < 0 && inputcontainer) {
    overviewtext.textContent = 'Game Over! Input and Check removed!';
    inputcontainer.remove();
    inputcontainer = null;
  }
});

againbutton.addEventListener('click', () => {
  secretnumber = Math.floor(Math.random() * 100) + 1;
  totalscore = 20;

  guessedvalue.textContent = '?';
  guessednumbertext.textContent = 'Guessed Number: ';
  overviewtext.textContent = 'Guessing Number ...';
  scorecontent.textContent = `Total Score : ${totalscore}`;
  document.querySelector('.container').style.backgroundColor = 'black';

  if (!inputcontainer) {
    const newinputdiv = document.createElement('div');
    newinputdiv.className = 'input';
    newinputdiv.id = 'inputid';

    const label = document.createElement('label');
    label.id = 'label';
    label.setAttribute('for', 'inputValue');
    label.textContent = 'input';

    const input = document.createElement('input');
    input.id = 'inputValue';
    input.className = 'inputval';
    input.type = 'number';

    const button = document.createElement('button');
    button.className = 'againbtn';
    button.id = 'checkBtn';
    button.textContent = 'Check';

    newinputdiv.appendChild(label);
    newinputdiv.appendChild(input);
    newinputdiv.appendChild(button);

    document.querySelector('.con2').prepend(newinputdiv);

    inputvalue = input;
    inputcontainer = newinputdiv;

    button.addEventListener('click', () => checkbutton.click());
  }
});

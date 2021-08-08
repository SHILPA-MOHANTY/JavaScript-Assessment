const primaryContainer = document.querySelector('#primary-container');
const colorBoxes = document.querySelectorAll('.colour-box');
const redButton = document.querySelector('#red-button');
const yellowButton = document.querySelector('#yellow-button');
const blueButton = document.querySelector('#blue-button');
const lgColourBox = document.querySelector('.lg-colour-box');

let redSelected = false;
let yellowSelected = false;
let blueSelected = false;

const whiteArray = ['👻', '👀', '☁️', '🍚', '🥚', '🥛', '🏐', '🗯'];
const redArray = ['❤️', '👹', '💋', '💃', '🍎', '🌶', '🚘', '🌹'];
const yellowArray = ['🌝', '🐥', '🍋', '🧀', '🚜', '💛', '📒', '👂'];
const blueArray = ['👕', '🦋', '🐬', '💦', '🚙', '💎', '💙', '❄️'];
const orangeArray = ['🎃', '🦁', '🦀', '🍊', '🏀', '📙', '🧡', '🥕'];
const purpleArray = ['😈', '👾', '☂️', '🍆', '🍇', '🔮', '💜', '🕺'];
const greenArray = ['🤢', '🐸', '🦖', '🍀', '🍏', '🎾', '💚', '🥒'];

function toggleButton(button, selected) {
  button.addEventListener('click', () => {
    if(!selected) {
      button.classList.add('active');
      selected = true;
    } else {
      button.classList.remove('active');
      selected = false;
    }
    primaryActiveColour(redButton, '#e53935', redArray);
    primaryActiveColour(yellowButton, '#fdd835', yellowArray)
    primaryActiveColour(blueButton, '#2196f3', blueArray);
    secondaryActiveColour(redButton, yellowButton, '#fb8c00', orangeArray);
    secondaryActiveColour(redButton, blueButton, '#7e57c2', purpleArray);
    secondaryActiveColour(blueButton, yellowButton, '#8bc34a', greenArray);
    if(redButton.classList.contains('active') 
       && yellowButton.classList.contains('active')
       && blueButton.classList.contains('active')) {
         lgColourBox.style.background = '#6d4c41';
         lgColourBox.textContent = '💩';
     }
    if(!redButton.classList.contains('active') 
       && !yellowButton.classList.contains('active')
       && !blueButton.classList.contains('active')) {
         lgColourBox.style.background = '#FFF';
         shuffle(whiteArray)
         lgColourBox.textContent = whiteArray[0];
     }
  });
}

function primaryActiveColour(button, colour, array) {
  if(button.classList.contains('active')) {
    lgColourBox.style.background = colour;
    shuffle(array);
    lgColourBox.textContent = array[0];
  }
}

function secondaryActiveColour(button1, button2, colour, array) {
  if(button1.classList.contains('active') && button2.classList.contains('active')) {
    lgColourBox.style.background = colour;
    shuffle(array);
    lgColourBox.textContent = array[0];
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

shuffle(whiteArray)
lgColourBox.textContent = whiteArray[0];

toggleButton(redButton, redSelected);
toggleButton(yellowButton, yellowSelected);
toggleButton(blueButton, blueSelected);
// DOM SELECTORS
const h1 = document.querySelector(`h1`);
const allAElements = document.querySelectorAll(`a`);

// CONVERTING NODELIST TO ARRAY
const aElementsArray = [...allAElements];

// const allImages = document.querySelectorAll('img');
// console.log(allImages);

// CREATE ELEMENT
const li = document.createElement('li');
li.innerText = 100;

const favoriteNumbersUL = document.querySelector(`#favorite-numbers`);
favoriteNumbersUL.append(li);



const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // grab the input
  const input = document.querySelector('input');
  // get the value from that input
  const userInputNumber = input.value;

  if(userInputNumber !== '') {
    // create a new li
    const newLI = document.createElement('li');

    // put the value into the li
    newLI.innerText = userInputNumber;
    newLI.style.backgroundColor = 'rebeccapurple';
    newLI.style.color = `white`;

    // append the new li to the favorite numbers ul
    favoriteNumbersUL.append(newLI);

    input.value = '';
  }
});

h1.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = `cornsilk`;
});

const leastFvoriteNumbersUL = document.querySelector('#least-favorite-numbers');
leastFvoriteNumbersUL.addEventListener('click', (event) => {
  if(event.target.tagName == 'LI') {
    console.log('LI CLICKED');
  }
});





// SET INTERVAL AND CLEAR INTERVAL

const setIntervalId = setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100);
  // create a new li
  const randomNumberLI = document.createElement('li');

  // put the random number in the li
  randomNumberLI.innerText = randomNumber;

  // append the li to the ul
  leastFvoriteNumbersUL.append(randomNumberLI);

  if(leastFvoriteNumbersUL.children.length === 10) {
    clearInterval(setIntervalId);
  };
}, 1000);

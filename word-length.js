const inputEl = document.getElementById('str');
const calculateBtn = document.getElementById('btn');
const outputEl = document.getElementById('output');

// add eventListener to Button
calculateBtn.addEventListener('click', () => {
  // Get the value from inputEl
  const inputValue = inputEl.value;

  // Calculate the user input word length
  const wordLen = inputValue.length;

  // append it to output element
  outputEl.innerHTML = `<h1>${wordLen}</h1>`;
  // you can also use append method here
});

// Option 2
// inputEl.addEventListener('input', (event) => {
//   // Get the value from inputEl
//   const inputValue = event.target.value;

//   // Calculate the user input word length
//   const wordLen = inputValue.length;

//   // append it to output element
//   outputEl.innerHTML = `<h1>${wordLen}</h1>`;
//   // you can also use append method here
// });

// Styling
const styleBtn = document.querySelector('.style');

// ideally would be toggle or do something else
const addStyle = (event) => {
  // console.log(event.type);
  // if (event.type === 'mouseover') {
  //   document.body.style.backgroundColor = 'lightblue';
  //   styleBtn.style.color = '#fff';
  //   styleBtn.style.backgroundColor = '#000';
  // } else {
  //   document.body.style.backgroundColor = '#000';
  //   styleBtn.style.color = '#000';
  //   styleBtn.style.backgroundColor = 'green';
  // }

  if (event.type === 'mouseover') {
    document.body.style.backgroundColor = 'lightblue';
    styleBtn.style.color = '#fff';
    styleBtn.style.backgroundColor = '#000';
  }
  if (event.type === 'mouseout') {
    document.body.style.backgroundColor = '#000';
    styleBtn.style.color = '#000';
    styleBtn.style.backgroundColor = 'green';
  }
};

styleBtn.addEventListener('mouseover', addStyle);
styleBtn.addEventListener('mouseout', addStyle);

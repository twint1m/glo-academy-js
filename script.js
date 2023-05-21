const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');
const eBtn = document.querySelector('#e_btn').style.display = "none";
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');
const span = document.querySelector('#range-span');


span.textContent = range.value;

const btnClick = btn.addEventListener('click', () => {
    const inputVal = input.value;
    input.value = "";   
    square.style.backgroundColor = inputVal; 
})



const inputRange = range.addEventListener('input', function() {
  const value = range.value;
  circle.style.width = value + '%';
  circle.style.height = value + '%';
  span.textContent = range.value;
});

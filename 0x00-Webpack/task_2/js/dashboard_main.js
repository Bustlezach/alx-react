import $ from "jquery";
import _ from 'lodash';
import './../css/main.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');


let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));



// const btn = document.querySelector('#count');
// function updateCounter() {
//   count += 1;
//   btn.innerHTML = `${count} clicks on the button`;
// }
// btn.addEventListener('click', _.debounce(updateCounter, 500));

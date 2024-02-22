/* eslint-disable */

import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".card").classList.add(randomIcons());
  document.querySelector(".card").innerHTML = randomNumber();
};

let randomNumber = () => {
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let indexNum = Math.floor(Math.random() * numbers.length);
  return numbers[indexNum];
};

let randomIcons = () => {
  let icons = ["diamond", "spade", "heart", "club"];
  let indexIcons = Math.floor(Math.random() * icons.length);
  return icons[indexIcons];
};

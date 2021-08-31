/* eslint-disable no-unused-vars */
'use strict';


let car = [];
let carOrders = [];
let container = document.getElementById('carsProfile');
let tableEl = document.createElement('table');
container.appendChild(tableEl);


function saveToLocalStorge(){
  let data = JSON. stringify(car);
  localStorage.setItem('rentCar', data);
}

function readFromLocalStorge(){
  let stringObj = localStorage.getItem('rentCar');
  let normalObj = JSON.parse(stringObj);

  if(normalObj){
    car = normalObj;
    orderes();

  }
}


function Car(custmerName, carModel){
  this.name = custmerName;
  this.model = carModel;
  car.push(this);
}

Car.prototype.randomNumber = function(min, max){
  min = Math.ceil(1);
  max = Math.floor(1000);
  return Math.floor(Math.render() *(max - min +1) + min);

};
function orderes(event){
  let custmerName = event.target.name.value;
  let carModel = event.target.model.value;

  let newObj = new Car(custmerName,carModel);
  newObj.render();
  
}
Car.prototype.render = function(){
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1.textContent = this.name;

  let tdEl2 = document.createElement('td');
  trEl.appendChild(tdEl2);
  tdEl2.textContent = this.model;

};


function createTableHeader(){
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'custmer name';

  let thEl1 = document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent = 'car model';
}

let myform = document.getElementById('myform');

// eslint-disable-next-line no-undef
myform.addEventListener('submit', addCar);
function addCar(event){
  event.preventDefault();
  let custmerName = event.target.name.value;
  let carModel = event.target.model.value;

  let newCar = new Car(custmerName, carModel);
  newCar.render();
  saveToLocalStorge;
}
createTableHeader();



function createTableFooter(){
  let orderImg = [];
  let orderDetails =[];

  let trEl = document.createElement('tr');

  let thEl5 = document.createElement('th');
  trEl.appendChild(thEl5);
  thEl5.textContent = 'order image';

  let thEl7 = document.createElement('th');
  trEl.appendChild(thEl7);
  thEl7.textContent = 'order details';


  let thEl11 = document.createElement('th');
  trEl.appendChild(thEl11);
  thEl11.textContent = orderImg;

  let thEl15 = document.createElement('th');
  trEl.appendChild(thEl15);
  thEl15.textContent = orderDetails;


}
readFromLocalStorge();



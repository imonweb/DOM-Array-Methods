
const main = document.querySelector('#main');
// buttons
const doubleBtn = document.querySelector('#double');
const addUserBtn = document.querySelector('#add-user');
const showMillionaireBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');
 
 
let data = [];
getRandomUser();
getRandomUser();
getRandomUser();


 
/* ====== Random User start  ====== */
 
// fetch data from api: https://randomuser.me
async function getRandomUser(){
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  // console.log(data)
  const user = data.results[0];

  // console.log(user)
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser)
  console.log(newUser);
}

// add new obj to data arr
function addData(obj){
  data.push(obj)
  updateDOM();
}

/* ====== Random User end ====== */



/* ====== Double Money ====== */
function doubleMoney(){
  data = data.map(user => {
    return {...user, money: user.money * 2 }
  })
  updateDOM()
}
 
/* ====== Double Money end ====== */
 
 
 
/* ====== Show only Millionaires (filter) ====== */
function showMillionaires() {
	  data = data.filter((user) => user.money > 1000000);
	  updateDOM();
	}


 
/* ====== sort by richest ====== */
function sortByRichest(){
  data.sort((a,b) => b.money - a.money)
  updateDOM()
}
 
 
/* ====== Calculate Wealth ====== */
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);


  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  main.appendChild(wealthEl);
}

 
  
// update DOM
function updateDOM(providedData = data){
  // clear main div
  // main.innerHTML = '<h3>Entire Wealth : $1,000,000.00</h3>'
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

  providedData.forEach((item) =>  {
    const element = document.createElement('div')
    element.classList.add('person')
    element.innerHTML = `<span>${item.name}</span> ${formatMoney(item.money)}`
    main.appendChild(element)
  })
}

// format number as money
function formatMoney(number){
  return '£' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
}


 
//////// ====== Event Listener ======/////////

/* ====== Add new user ====== */
addUserBtn.addEventListener('click',  getRandomUser)
 
/* ====== Double Money ====== */
doubleBtn.addEventListener('click', doubleMoney)
 
/* ======Show Millionaires ====== */
showMillionaireBtn.addEventListener('click', showMillionaires);

/* ====== Sort by riches ====== */
sortBtn.addEventListener('click', sortByRichest )
 
/* ====== Calculate wealth ====== */
calculateWealthBtn.addEventListener('click', calculateWealth);
 




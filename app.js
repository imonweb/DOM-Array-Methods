
const main = document.querySelector('#main');
// buttons
const doubleBtn = document.querySelector('#double');
const addUserBtn = document.querySelector('#add-user');
const showMillionaires = document.querySelector('#show-millionaires');
const sort = document.querySelector('#sort');

// calculate
const calculateWealth = document.querySelector('#calculate-wealth');
 
let data = [];
getRandomUser();
getRandomUser();
getRandomUser();

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
  // add new obj to data arr
  function addData(obj){
    data.push(obj)

    updateDOM();
  }
  
  // update DOM
  function updateDOM(providedData = data){
    // clear main div
    main.innerHTML = ' <h3>Entire Wealth : $1,000,000.00</h3>'

    providedData.forEach((item) =>  {
      const element = document.createElement('div')
      element.classList.add('person')
      element.innerHTML = `<strong>${item.name}</strong> ${item.money}`
      main.appendChild(element)
    })
  }

  // format number as money
  function formatMoney(number){

  }
  
}




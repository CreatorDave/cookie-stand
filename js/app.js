'use strict'

//Create Objects


// Globals
// HELPFUL FOR YOUR LAB!!
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// DOM WINDOWS


// HELPER FUNCTIONS / UTILITIES
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// CONSTRUCTOR FUNCTION

function Store(name, minCust, maxCust, avgCookieBought,) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieBought = avgCookieBought;
    this.total = 0;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
}

// PROTOTYPE METHODS

Store.prototype.randomCustomers = function () {
    for (let i = 0; i < hours.length; i++) { 
        this.customersPerHour.push(random(this.minCust, this.maxCust))        
    }
}
Store.prototype.randomCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        let cookiesThisHour = Math.floor(this.customersPerHour[i] * this.avgCookieBought)
        this.cookiesPerHour.push(cookiesThisHour);
        this.total += cookiesThisHour;
    }
}

Store.prototype.render = function () {
    this.randomCustomers();
    this.randomCookies();
    let table = document.getElementById('SalesTable');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = this.name
    tr.appendChild(td);
    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        td.textContent = this.cookiesPerHour[i];
        tr.appendChild(td);
    };
    table.appendChild(tr);


}

// EXECUTABLE CODE
let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);

seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()

// storeLocations.push(seattle, tokyo, dubai, paris, lima);

// function renderAll(){
//     for(let i = 0; i < storeLocations; i++){
//         storeLocations[i].randomCustomers();
//         storeLocations[i].randomCookies();
//         storeLocations[i].render();
//     }
// }
// renderAll()


// OBJECT LITERALS
// **** HELPFUL FOR START OF YOUR LAB *****
// let seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookieBought: 6.3,
//     total: 0,
//     randNumber: [],
//     cookiesBought: [],
//     randomCookies: function () {
//         // got from MDN docs
//         for (let i = 0; i < hours.length; i++) {
//             // let cookieCust = Math.floor(Math.random() * (max - min + 1) + min);
//             // this.randNumber.push(Math.random(this.minCust, this.maxCust))
//             this.randNumber.push(random(this.minCust, this.maxCust))

//         };
//         console.log(this.randNumber)
//     },
//     randomCustomers: function () {
//         // got from MDN docs
//         // return Math.random()
//         this.randomCookies();
//         for (let i = 0; i < hours.length; i++) {
//             let avgCookie = Math.ceil(this.randNumber[i] * this.avgCookieBought)
//             this.cookiesBought.push(avgCookie);
//             this.total += avgCookie
//         }
//     },
//     render() {
//         this.randomCustomers();
//         let ul = document.getElementById('SeattleStats');
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]} cookies`;
//             ul.appendChild(li);
//         };
//         let li = document.createElement('li');
//         li.textContent = ` Total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }

// };
// seattle.render();


// let tokyo = {
//     name: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookieBought: 1.2,
//     total: 0,
//     randNumber: [],
//     cookiesBought: [],
//     randomCookies: function () {
//         // got from MDN docs
//         for (let i = 0; i < hours.length; i++) {
//             // let cookieCust = Math.floor(Math.random() * (max - min + 1) + min);
//             // this.randNumber.push(Math.random(this.minCust, this.maxCust))
//             this.randNumber.push(random(this.minCust, this.maxCust))

//         };
//         console.log(this.randNumber)
//     },
//     randomCustomers: function () {
//         // got from MDN docs
//         // return Math.random()
//         this.randomCookies();
//         for (let i = 0; i < hours.length; i++) {
//             let avgCookie = Math.ceil(this.randNumber[i] * this.avgCookieBought)
//             this.cookiesBought.push(avgCookie);
//             this.total += avgCookie
//         }
//     },
//     render() {
//         this.randomCustomers();
//         let ul = document.getElementById('TokyoStats');
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]} cookies`;
//             ul.appendChild(li);
//         };
//         let li = document.createElement('li');
//         li.textContent = ` Total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }
// };
// tokyo.render();

// let dubai = {
//     name: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookieBought: 3.7,
//     total: 0,
//     randNumber: [],
//     cookiesBought: [],
//     randomCookies: function () {
//         // got from MDN docs
//         for (let i = 0; i < hours.length; i++) {
//             // let cookieCust = Math.floor(Math.random() * (max - min + 1) + min);
//             // this.randNumber.push(Math.random(this.minCust, this.maxCust))
//             this.randNumber.push(random(this.minCust, this.maxCust))

//         };
//         console.log(this.randNumber)
//     },
//     randomCustomers: function () {
//         // got from MDN docs
//         // return Math.random()
//         this.randomCookies();
//         for (let i = 0; i < hours.length; i++) {
//             let avgCookie = Math.ceil(this.randNumber[i] * this.avgCookieBought)
//             this.cookiesBought.push(avgCookie);
//             this.total += avgCookie
//         }
//     },
//     render() {
//         this.randomCustomers();
//         let ul = document.getElementById('DubaiStats');
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]} cookies`;
//             ul.appendChild(li);
//         };
//         let li = document.createElement('li');
//         li.textContent = ` Total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }
// };
// dubai.render();

// let paris = {
//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookieBought: 2.3,
//     total: 0,
//     randNumber: [],
//     cookiesBought: [],
//     randomCookies: function () {
//         // got from MDN docs
//         for (let i = 0; i < hours.length; i++) {
//             // let cookieCust = Math.floor(Math.random() * (max - min + 1) + min);
//             // this.randNumber.push(Math.random(this.minCust, this.maxCust))
//             this.randNumber.push(random(this.minCust, this.maxCust))

//         };
//         console.log(this.randNumber)
//     },
//     randomCustomers: function () {
//         // got from MDN docs
//         // return Math.random()
//         this.randomCookies();
//         for (let i = 0; i < hours.length; i++) {
//             let avgCookie = Math.ceil(this.randNumber[i] * this.avgCookieBought)
//             this.cookiesBought.push(avgCookie);
//             this.total += avgCookie
//         }
//     },
//     render() {
//         this.randomCustomers();
//         let ul = document.getElementById('ParisStats');
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]} cookies`;
//             ul.appendChild(li);
//         };
//         let li = document.createElement('li');
//         li.textContent = ` Total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }
// };
// paris.render();

// let lima = {
//     name: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookieBought: 4.6,
//     total: 0,
//     randNumber: [],
//     cookiesBought: [],
//     randomCookies: function () {
//         // got from MDN docs
//         for (let i = 0; i < hours.length; i++) {
//             // let cookieCust = Math.floor(Math.random() * (max - min + 1) + min);
//             // this.randNumber.push(Math.random(this.minCust, this.maxCust))
//             this.randNumber.push(random(this.minCust, this.maxCust))

//         };
//         console.log(this.randNumber)
//     },
//     randomCustomers: function () {
//         // got from MDN docs
//         // return Math.random()
//         this.randomCookies();
//         for (let i = 0; i < hours.length; i++) {
//             let avgCookie = Math.ceil(this.randNumber[i] * this.avgCookieBought)
//             this.cookiesBought.push(avgCookie);
//             this.total += avgCookie
//         }
//     },
//     render() {
//         this.randomCustomers();
//         let ul = document.getElementById('LimaStats');
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]} cookies`;
//             ul.appendChild(li);
//         };
//         let li = document.createElement('li');
//         li.textContent = ` Total: ${this.total} cookies`;
//         ul.appendChild(li);
//     }
// };
// lima.render();

// DOM MANIPULATION
// getCookiesBought: function() {
//     this.cookiesBought = `${this.name} bought ${randomCookies(2, 16)} total`;
// }


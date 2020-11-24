// 1-----------------------------------------------------------------
// const repeat = function(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// // n = 5; action = value => и т.д. - это анонимная стрелочная функция
// repeat(5, value => { labels.push(`Label ${value + 1}`); });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// 2-----------------------------------------------------------------
// const filter = function(array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// 3----------------------------------------------------------------
// const createCounter = function() {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function() {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3

// -------------------------------------------------------------------
// let a = { 
//     a: 10,
//     b() {
//         console.log(this.a);
//     } 
// }

// console.log(a.a);

// ------------------------------------------------------------------
// let a = 2;
// let b = 8;
// let c = 4;
// if (b -= a += a += c) {
//     b += a + c;
// }
// console.log(b); // 0

// -------------------------------------------------------------------
// let b = 0;
// let a = 1;
// console.log(b -= a ? 2 : 4);
// console.log(a);
// //a = 1
// //b = -2

// ------------------------------------------------------------------
// let b = 5;
// let a = 4;
// b -= a > a ? 2 : 3;
// console.log(b); // 2


// -------------------------------------------------------------------------
// let func = function (b) {
//     return b -= b >= b ? 2 : 3;
// }
// func = func(3) > func(1) ? func(1) : func; // 1 > -1
// console.log(func); // -1

// const fun = function (a) {
//     console.log(a);
//     return a;
// }
// const a = fun(2) * 2;
// console.log(a); // 2 4

// ----------------------------------------------------------------------
// let purse = 50;
// const tolerance = 18;
// const input = 25;
// const priceChildren = 25;
// const price = 50;
// const promo = 0.8;
// purse -= tolerance >= input ? priceChildren : price * promo;
// console.log(purse); // 10
// ----------------------------------------------------------------

//создание замыкания
let priceFun;


const fun = function () {
    priceFun = 10;
    function sum(number) {
        return priceFun * number;
    }
    return {
        sum,
    };
}
//создание объекта.
const shop2 = {
    price: 5,
    sum(number=0) {
        return this.price * number;
    },
}
//////Работает одинаково
//замыкание
const shope = fun();
console.log('Замыкание: ' + shope.sum(2));
//объект
console.log('Объект: ' + shop2.sum(2));
//////////Работает по разному.
//Замыкание
const shopSum = shope.sum;
console.log('Замыкание: ' + shopSum(2));
///////Объект
const shopSum2 = shop2.sum.bind(shop2);
console.log('Объект: ' + shopSum2(2)); 
//Сложная конструкция вызова объекта:
console.log('Объект: ' + shopSum2.call(shop2, 2) );
const prompt = require('prompt-sync')();
let products = {}
for (var i = 1; i<4;i++){
     nameProducts = prompt(`Product ${i}: `)
     priceProducts = prompt(`Price of ${nameProducts}: `)
     products[nameProducts]= priceProducts
}
let sum = Object.values(products).reduce((acc, val) => acc + parseInt(val),0);
console.log(`Sum of All Products: ${sum}`)
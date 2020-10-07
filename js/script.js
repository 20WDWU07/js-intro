console.log('js');

//display a calculated total cost of 4 chocolates @ $4.25 each
var priceChocolate = 4.25;
var quantity = 4;

var total = priceChocolate * quantity;
document.getElementById('quantity').innerHTML += ' ' + quantity;
document.getElementById('total').innerHTML += total;

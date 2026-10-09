// Program 5 C

const price = 750;
const quantity = 4;
const discount = 0.10;

const subtotal = price * quantity;
const finalAmount = subtotal - (discount * subtotal);

console.log(finalAmount);
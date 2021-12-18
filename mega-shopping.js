const cart = [
    { name: "laptop", price: 43000, quantity: 1 },
    { name: "shirt", price: 500, quantity: 10 },
    { name: "watch", price: 3680, quantity: 3 },
    { name: "phone", price: 55000, quantity: 1 }
]

let total = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    total = total + productTotal;
}
console.log(total);
//Output: 114040
const products = [
    { name: "laptop", price: 43000 },
    { name: "shirt", price: 500 },
    { name: "watch", price: 3680 },
    { name: "phone", price: 55000 }
]

let total = 0;
for (let product of products) {
    total = total + product.price;
}
console.log(total);
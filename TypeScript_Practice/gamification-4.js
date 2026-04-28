export {};
function placeOrder(user, items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return {
        username: user.name,
        totalAmount: total,
        status: "Order Placed"
    };
}
const user = {
    name: "Saumya",
    age: 20
};
const items = [
    {
        name: "Pizza",
        price: 500
    },
    {
        name: "Burger",
        price: 150
    }
];
const order = placeOrder(user, items);
console.log(order.totalAmount.toFixed(2));
document.getElementById("result").innerText =
    order.totalAmount.toFixed(2);
//# sourceMappingURL=gamification-4.js.map
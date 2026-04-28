
export{};
type User = {
    name: string;
    age: number;
};

type Item = {
    name: string;
    price: number;
};

type Order = {
    username: string;
    totalAmount: number;
    status: string;
};

function placeOrder(user: User, items: Item[]): Order {
    let total: number = 0;

    for (let item of items) {
        total += item.price;
    }

    return {
        username: user.name,
        totalAmount: total,
        status: "Order Placed"
    };
}

const user: User = {
    name: "Rahul",
    age: 22
};

const items: Item[] = [
    {
        name: "Pizza",
        price: 200
    },
    {
        name: "Burger",
        price: 150
    }
];

const order: Order = placeOrder(user, items);

console.log(order.totalAmount.toFixed(2));
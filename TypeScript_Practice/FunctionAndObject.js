function info() {
    console.log("hello");
}
info();
function displayName(name1) {
    return name1;
}
console.log(displayName("Sami"));
function add(a, b, c) {
    return (a + b + c);
}
console.log(add(1, 2, 3));
let person = {
    name: "sami",
    age: 20
};
let person1 = {
    name: "saumya",
    age: 21
};
let person2 = {
    name: "mihir",
    age: 19
};
console.log(person);
console.log(person1);
console.log(person2);
let product = {
    name: "Laptop",
    price: 50000,
    qty: 2
};
function calculatePrice(product) {
    return product.price * product.qty;
}
console.log(calculatePrice(product));
let Student = {
    name: "sami",
    rollno: 32,
    city: "Motihari",
    state: "Bihar",
    pin: 845401
};
console.log(Student);
export {};

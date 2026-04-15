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
let personAge = 20;
console.log(personAge);
const personName = "Vinay";
console.log(personName);
let newstatus = "sucess";
console.log(newstatus);
// ----------------------------------------QUESTION ----------------------------------------------------------
function updateStatus(status) {
    if (typeof status == "string") {
        console.log("Status is a string: ", status.toUpperCase());
    }
    else if (typeof status == "number") {
        console.log("Status is a number :", status * 4);
    }
    else {
        console.log("error! OOps Something Wrong.");
    }
}
let status1 = "Sami";
let status2 = 8;
updateStatus(status1);
updateStatus(status2);
export {};

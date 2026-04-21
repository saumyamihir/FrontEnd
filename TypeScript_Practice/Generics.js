export {};
function takevalue(val) {
    return val;
}
let a1 = takevalue(3);
let a2 = takevalue("class1");
console.log(takevalue(2));
console.log(takevalue("ABC"));
function takevalue1(val) {
    return val;
}
let a3 = takevalue1(12);
let a4 = takevalue1("rrr");
function takePair(a, b) {
    return [a, b];
}
console.log(takePair(1, "Sami"));
console.log(takePair("raj", 2));
function arrvalue(a, index) {
    return a[index];
}
console.log(arrvalue([3, 7, 8, 9, 0], 2));
let i = {
    name: "AA",
    id: 1
};
console.log(i.name);
console.log(i.id);
//# sourceMappingURL=Generics.js.map
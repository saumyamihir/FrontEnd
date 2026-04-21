// Typeof Narrowing 
export {};
function takeinput(v) {
    if (typeof v === "string") {
        return v.toUpperCase();
    }
    return v * 8;
}
console.log(takeinput("Froentend"));
console.log(takeinput(3));
// Instance of Narrowing
class Reading {
    read() {
        console.log("I am Reading a book.");
    }
}
class Teaching {
    teach() {
        console.log("I am Teaching in class.");
    }
}
function checkObject(hobby) {
    if (hobby instanceof Reading) {
        hobby.read();
    }
    else {
        hobby.teach();
    }
}
let h1 = new Teaching();
checkObject(h1);
// Truthiness Narrowing
function checkNull(val) {
    if (!val) {
        console.log("Please enter a string");
    }
    else {
        console.log(val);
    }
}
checkNull("");
function checktype(o) {
    if ("read" in o) {
        return o.read;
    }
    else {
        return o.teach();
    }
}
let r1 = {
    read() {
        return "I am Reading journel books journel books";
    }
};
let t1 = {
    teach() {
        return "I am teaching this cource.";
    }
};
console.log(checktype(r1));
//# sourceMappingURL=TypeNarrowing.js.map
export {};
let laptopObject = {
    id: 1,
    brand: "Lenovo",
    color: "Silver",
    ram: 16,
    ssd: 512
};
console.log(laptopObject);
class LaptopClass {
    id;
    brand;
    color;
    ram;
    ssd;
    constructor(id, brand, color, ram, ssd) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.ram = ram;
        this.ssd = ssd;
    }
    info() {
        return `The Laptop brand i have ${this.brand} which is of ${this.color} color and has ${this.ram}GB RAM and ${this.ssd}GB SSD.`;
    }
}
let l1 = new LaptopClass(2, "HP", "Balck", 16, 252);
console.log(l1.info());
let StuObject = {
    name: "Saumya Mihir",
    rollno: 32,
    city: "Motihari",
    state: "Bihar"
};
console.log(StuObject);
//# sourceMappingURL=InterfaceFile.js.map
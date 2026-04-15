
export{}
interface Laptop {
    readonly id:number;
    brand : string;
    color :string;
}

interface LaptopSpecs {
    ram:number;
    ssd:number;
    processor?:string
}
interface LaptopCombine extends  Laptop, LaptopSpecs{}

let laptopObject : LaptopCombine = {
    id:1,
    brand:"Lenovo",
    color :"Silver",
    ram:16,
    ssd:512
}
console.log(laptopObject);

class LaptopClass implements LaptopCombine{
    id :number;
    brand:string;
    color: string;
    ram: number;
    ssd: number;
    constructor(id:number,brand:string,color:string,ram:number,ssd:number){
        this.id=id;
        this.brand = brand;
        this.color = color;
        this.ram = ram;
        this.ssd = ssd;
    }
    info():string{
        return `The Laptop brand i have ${this.brand} which is of ${this.color} color and has ${this.ram}GB RAM and ${this.ssd}GB SSD.`
    }
}
let l1 = new LaptopClass(2,"HP","Balck",16,252);
console.log(l1.info());



interface Student {
    name:string;
    rollno:number;
}

interface Student{
    city:string;
    state:string;
}
interface Stu extends Student{}

let StuObject : Stu ={
    name:"Saumya Mihir",
    rollno:32,
    city:"Motihari",
    state:"Bihar"   
}
console.log(StuObject);


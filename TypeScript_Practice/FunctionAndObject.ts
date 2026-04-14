
export{}
function info():void{
    console.log("hello");
}
info();


function displayName(name1:string):string{
    return name1;
}
console.log(displayName("Sami"));


function add(a:number, b:number, c:number):number{
    return (a+b+c);
}
console.log(add(1,2,3));

type PersonType={
    name:string;
    age:number
}
let person:PersonType = {
   name:"sami",
   age:20
}

let person1:PersonType ={
    name:"saumya",
    age:21
}

let person2:PersonType ={
    name:"mihir",
    age:19
}
console.log(person);
console.log(person1);
console.log(person2);



// Question : -> create a type product with the following stucture as name:String, price:number,
// qty:number. create one object and assign values then create calculatePrice() function 
// and calculate the total price by using this price*qty.

type ProductType ={
    name:string;
    price:number;
    qty:number
}
let product:ProductType ={
    name:"Laptop",
    price:50000,
    qty:2
}
function calculatePrice(product:ProductType):number{
    return product.price*product.qty;

}
console.log(calculatePrice(product));



// Uninon(|) And Intersection(&)
type Student ={
    name:string;
    rollno:number
}
type StudentAddress ={
    city:string;
    state:string;
    pin:number
}
// type StudentCombine = Student | StudentAddress; //Union
type StudentCombine = Student & StudentAddress; //Intersection

let Student : StudentCombine={
    name:"sami",
    rollno:32,
    city:"Motihari",
    state:"Bihar",
    pin:845401    
}
console.log(Student);



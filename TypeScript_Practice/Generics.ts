
export{};
function takevalue<T>(val:T):T{
    return val;
}

let a1 = takevalue(3);
let a2 = takevalue("class1");
console.log(takevalue(2));
console.log(takevalue("ABC"));

function takevalue1(val:any):any{
    return val;
}
let a3 = takevalue1(12);
let a4 = takevalue1("rrr");

function takePair<T,Y>(a:T,b:Y):[T,Y]{
    return [a,b];
}
console.log(takePair(1,"Sami"));
console.log(takePair("raj",2));


function arrvalue<T>(a:T[],index:number):T|undefined{
    return a[index];
}
console.log(arrvalue([3,7,8,9,0],2));

interface Info<T>{
    name:T;
    id:number
}

let i:Info<string>={
    name:"AA",
    id:1
}
console.log(i.name);
console.log(i.id);
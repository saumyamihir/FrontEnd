
let btn = document.getElementById("btn1") as HTMLButtonElement;
btn?.addEventListener("click",()=>{
    let t1 = document.getElementById("text1")as HTMLInputElement;
    console.log(t1.value) ;
    alert("Welcome!!");
})
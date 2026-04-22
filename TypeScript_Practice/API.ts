export{}
// type Products ={
//     id:number;
//     price:number
// }
// type APIType ={
//     status :string;
//     products : Products[]
// }
// let APIname : APIType={
//     status:"Sucess",
//     products:[{
//         id:1,
//         price:50000
//     }]
// }

// function getAPIResponse(o: APIType){
//     if(o.status === "Sucess"){
//         console.log(o.status);
//         if(o.products){
//             o.products.map((p)=>{
//                 console.log("Products ID : ", p.id);
//                 console.log("Product Price : ",p.price)
//             })
//         }
//     }
// }
// getAPIResponse(APIname);

type PizzaOrder = {
    price: number;
    size: string;
}

function takeorder (order: PizzaOrder): void {
    console.log(`I have Ordered ${order.size} pizza and price is ${order.price}`);
}

takeorder({price:299,size:"Regular"})
takeorder({price:399,size:"Medium"});
takeorder({price:599,size:"Large"});
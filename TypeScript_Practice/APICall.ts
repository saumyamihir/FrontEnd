
type APIType ={
     userId: number,
     id: number,
     title: string,
     completed: boolean
}

async function APIResponse():Promise<APIType>{
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/4");
    let data = await result.json();
    return data;
}

APIResponse().then((d)=>{
    console.log(d.completed);
    console.log(d.id);
    console.log(d.title);
    console.log(d.userId);
});
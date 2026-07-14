
setTimeout(function(){
    console.log("Công việc A");
},3000)

console.log("Công việc B");
console.log("Công việc C");

let result;

// async
fetch("https://dummyjson.com/products?limit=5&skip=0")
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then((data) =>{
        console.log(data);
        result = data;
    })
    .catch((err) =>{
        console.log(err);
    })
    .finally(()=>{
        console.log("finish");
    })
console.log(result);
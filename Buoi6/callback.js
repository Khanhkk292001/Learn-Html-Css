// Callback là hàm được truyền qua đối số khi gọi hàm khác 
// 1. Là hàm 2. Được truyền qua đối số khi gọi hàm khác 

// const myFunction = callback => callback(123);

// const callback = value => console.log(`value: ${value}`);

// myFunction(callback);

// const caculate = (a,b,cb) => cb(a,b);
// const sumCb = (a,b) => a+b;

// console.log(caculate(1,2,sumCb));

// Callback phần 2. Callback là hàm và được truyền qua đối số và đc gọi lại trong hàm nhận đối số

var courses = [
    1,2,3
];

// courses.map((course,index) =>{
//     console.log(course);
//     console.log(index);
// })

// Xây dựng lại hàm map, dùng để duyệt mảng biến đổi từng thành phần 
// của 1 mảng thành 1 giá trị mới và trả về 1 mảng mới có cùng sl mảng cũ 

Array.prototype.map2 = function (callback) {
    const output = [];
    for(let i=0;i<this.length;i++)
    output.push(callback(this[i],i));
    return output;
}

const callback = (course,index) =>{
    return {value :course*2,
         index : index
    };
}
const result=courses.map2(callback);
console.log(result);

// forEach() dùng lặp để in ra màn hình hoặc thực hiện 1 hành động 
myName = [
    "Khánh", "Nam", "Hiếu"
];
const inTen = myName.forEach(name=>{
    console.log(`Xin chao toi la: ${name}`);
})

myNumber = [
   0, 1,2,3,8,9
];
let sum=0
 myNumber.forEach(number=>{
     sum += number;
     
});
console.log(sum);

const myNumberCheck = myNumber.filter((number,index,arr)=>
    number >5).map((number,index,arr)=>{
        return {
            value: number,
            
        }
    })
console.log(myNumberCheck);

const check1 = myNumber.some(number => {
    return number===10;
})

console.log(check1);

const check2 = myNumber.every(number => number>0);
console.log(check2);
// function fun(){
//     console.log("whats up");
//     console.log("hello");
// }
// fun();

// function fun(param){
//     console.log(param);
// }
// fun("argument");

// function sum(x,y){
//     console.log(x+y);
// }
// sum(1,2);

//rather than printing we are returning
// function sum(x,y){
//     return x+y;
// }
// console.log(sum(1,2));

//arrow functions 
// const sum = (a,b)=>{
//     console.log(a+b);
// }
// sum(1,2);

//count no of vowels
// function vow(param){
//     let cnt = 0;
//     for(let i of param){
//         if(i === 'a' || i === 'i' || i === 'e' || i === 'o' || i ==='u'){
//             cnt++;
//         }
//     }
//     return cnt;
// }

// console.log(vow("hello"));

// count vowels using arrow function
// const cntvow = (param) => {
//     let cnt = 0;
//     for(let i of param){
//         if(i === 'a' || i === 'i' || i === 'e' || i === 'o' || i ==='u'){
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(cntvow("helloo"));

//call back function -> fucntion which is passed as an argument to another fucntion

//foreach loop in arrays
let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach(function twice(val){
//     console.log(val*2);
// })

// generally as an arrow fucntion we pass fucntion in forEach
// arr.forEach((val) => {
//     console.log(val*3);
// })

//optional parameters in foreach ka callback
// arr.forEach((val , idx , arr) =>{
//     console.log(val , idx , arr) ;
// })

// hof -> a function that uses another function as a parameter 
//        and can return the function as a value 


// arr.forEach((val) => {
//     console.log(val*val);
// })
// this can be written as:

// let square = (val) =>{
//     console.log(val*val);
// }
// arr.forEach(square);

//array methods

//map method is mostly similar like foreach just it returns new arr

// map
// arr.map((val)=>{
//     console.log(val);
// })

// let newArr = arr.map( (val) => {
//     return val;
// })
// console.log(newArr);

// filter 
// let fil = arr.filter((val) => {
//     return val%2===0;
// })
// console.log(fil);

// reduce

//sum of array
// const op  = arr.reduce((acc,val) => {
//     return acc+val;
// },0);
// console.log(op);

//max of an array
// const max = arr.reduce((acc,val) => {
//     if(val > acc){
//         acc = val;
//     }return acc;
// },0);
// console.log(max);







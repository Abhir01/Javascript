//accessing html using js with dom
//dom manipulation
// document.body.style.background = "green";
// document.body.childNodes[1].style.color= "yellow";

// let heading = document.getElementById("heading");
// console.log(heading);

// let clss = document.getElementsByClassName("op");
// console.log(clss);
// return html collections very similar to arrays

// let tagi = document.getElementsByTagName("p");
// console.log(tagi);


//better way than these three
 
//qs for tah
// let qs = document.querySelector("p");
// console.log(qs);

// let qs = document.querySelector(".cls");
// console.log(qs);

// let qs = document.querySelector("#heading");
// console.log(qs);

//qs all dont have meaning with id as id is unique
// let qs = document.querySelectorAll("p");
// console.log(qs);


//get / set properties of html elements

//tagname
// let ele = document.querySelector("p");
// console.log(ele.tagName);

//innerText
// let ele = document.querySelector("div");
// console.log(ele.innerText);
// ele.innerText = "happy";

//innerHtml (plain text with html elements andar wale)
// let ele = document.querySelector("div");
// console.log(ele.innerHTML);


//textcontent for accessing hidden elements

//append two string using js
// let app = document.querySelector("h2");
// app.innerText = app.innerText + " from me";
// console.log(app);

let unique = document.querySelectorAll(".box");
// unique[0].innerText = "hello";
// unique[1].innerText = "bello";
// unique[2].innerText = "cullo"; //simple

// using loop
// let ind  = 1;
// for(ele of unique){
//     ele.innerText = `new unique value ${ind}`;
//     ind++;
// }



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

// let unique = document.querySelectorAll(".box");
// unique[0].innerText = "hello";
// unique[1].innerText = "bello";
// unique[2].innerText = "cullo"; //simple

// using loop
// let ind  = 1;
// for(ele of unique){
//     ele.innerText = `new unique value ${ind}`;
//     ind++;
// }



//Attribute selector
//value of attribute
// let ele = document.querySelector("div");
// console.log(ele.getAttribute("id"));
// console.log(ele.setAttribute("id","why")); //unddef ara but you can check it in elements broweser

//style using js
// let ele = document.querySelector("p");
// ele.style.color = "red";
// ele.style.fontSize = "25px";
// ele.style.backgroundColor = "yellow";


//insert elements
// let divsel = document.querySelector("div");
// divsel.style.border = "2px solid black"

// let ele = document.createElement("button");
// ele.innerText = "click Me";
// divsel.append(ele);   //add btn to div at the end
// divsel.prepend(ele);     //add btn to div at the starting
// divsel.before(ele);     //div start hone se pehle (outside)
// divsel.after(ele);          //div end hone ke baad (outside)


// ele.remove();   //to remove a ele using js


//body ke start me btn add kardo
// let ele = document.querySelector("button");
// ele.style.backgroundColor = "red";
// ele.style.color = "white";
// let sel = document.querySelector("body");
// sel.prepend(ele);


//to change a class of an element using js 
//can to it using setattribute but it will replace existing 
//but in classlist it add the new and keep the earlier one also
let ele = document.querySelector(".js");
ele.classList.add("hl");








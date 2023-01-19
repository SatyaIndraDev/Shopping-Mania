let cardimg=document.getElementsByClassName("cardimg");
let carddelivery=document.getElementsByClassName("carddeliverDy");
let carddet=document.getElementsByClassName(" carddet");
let savedcart=[];
let removecart=[];

// in cardimg append image, +, - , quantity

// carddelivery append element name

//  in carddet append cardddelivery and element details and 2 buttons save forlater remove.

let cart=JSON.parse(localStorage.getItem("cart")) || [];


function showData(){

cart.forEach((el,index)=>{

let image=document.createElement("img");
image.setAttribute("src",el.img);
let decbtn=document.createElement("button");
decbtn.innerText="-";
let incbtn=document.createElement("button");
incbtn.innerText="+";
let quanttext=document.createElement("span")
quanttext.innerText=el.quantity;

let name=document.createElement("h3");
name.innerText=el.name;

carddelivery.append(name);

let seller=document.createElement("p");
seller.innerText="Seller:SuperComNet";

let price=document.createElement("h3")
price.innerText="₹"+el.price*el.quantity;

let savefor=document.createElement("button");
savefor.innerText="Save for Later";

savefor.addEventListener("click",()=>{

savedcart.push(el);
localStorage.setItem("saved",JSON.stringify(savedcart));

cart.aplice(index,1)
localStorage.setItem("cart",JSON.stringify(cart));
showData(cart);


})

let remove=document.createElement("button");
remove.innerText="Remove";
remove.addEventListener("click",()=>{
    removecart.push(el);
    cart.aplice(index,1)
localStorage.setItem("cart",JSON.stringify(cart));
showData(cart);
})

let sum=0;
let itemprice=document.getElementById("itemprice");

sum=sum+el.price*el.quantity
itemprice.innerText=sum;
let disc=-sum*0.4;
let discountprice=document.getElementById("discountprice");
discountprice.innerText=disc;


let totalprice=document.getElementById("totalprice");
totalprice.innerText=sum+disc+40;




})




}
// showData();

let placeorder1=document.getElementById("placeorder1")
placeorder1.addEventListener("click",()=>{
    
    window.location.assign("order.html")
    console.log("y")
})

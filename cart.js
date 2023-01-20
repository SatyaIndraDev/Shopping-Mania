// let cardimg=document.getElementById("cardimg");
window.addEventListener("load",()=>{
    showData()
})
let card1=document.getElementById("card");
// let carddet=document.getElementById("carddet");
let pricequant=document.getElementById("pricequant")
let parent1=document.getElementById("parent")
let child1=document.getElementById("child1")
let savedcart=[];
let removecart=[];
// let tbody=document.querySelector("body")
let discprice=document.getElementById("discprice")
let itemprice=document.getElementById("itemprice");
let discountprice=document.getElementById("discountprice");
let totalprice=document.getElementById("totalprice");
// in cardimg append image, +, - , quantity

// carddelivery append element name

//  in carddet append cardddelivery and element details and 2 buttons save forlater remove.

let cart=JSON.parse(localStorage.getItem("cart")) || [];


pricequant.innerText=`${cart.length} items`

function showData(){
    card1.innerHTML=null;
    let sum=0; 
    for(let i=0;i<cart.length;i++){
        sum=sum+cart[i].price*cart[i].quantity
    }
    
    
    itemprice.innerText="$"+ sum;
    let disc=-Math.floor(sum*0.4);
    
    discountprice.innerText= disc;

discprice.innerText=  "$" +(-disc ) 

cart.forEach((el,index)=>{
    let card=document.createElement("div");
    
    card.setAttribute("id","cardcard")
    let cardimg=document.createElement("div");
    cardimg.setAttribute("id","cardimg")
    let carddet=document.createElement("div")
    carddet.setAttribute("id","carddet")
let image=document.createElement("img");
image.setAttribute("src",el.image);
let decbtn=document.createElement("button");
decbtn.innerText="-";
decbtn.setAttribute("class","plusbtn");
decbtn.addEventListener("click",()=>{
    if(el.quantity>0){
        el.quantity=el.quantity-1
    }
    quanttext.innerText=el.quantity;
    localStorage.setItem("cart",JSON.stringify(cart));
showData();
})
let incbtn=document.createElement("button");
incbtn.innerText="+";
incbtn.setAttribute("class","plusbtn");
incbtn.addEventListener("click",()=>{
    el.quantity=el.quantity+1

quanttext.innerText=el.quantity;
localStorage.setItem("cart",JSON.stringify(cart));
showData();
})
let quanttext=document.createElement("span")
quanttext.innerText=el.quantity;
quanttext.setAttribute("id","qtext")

let name=document.createElement("h3");
name.innerText=el.name;



let seller=document.createElement("p");
seller.innerText="Seller:SuperComNet";

let price=document.createElement("h3")
price.innerText="$"+el.price*el.quantity;

let savefor=document.createElement("button");
savefor.innerText="Save for Later";
savefor.setAttribute("class","addbtn")

savefor.addEventListener("click",()=>{

savedcart.push(el);
localStorage.setItem("saved",JSON.stringify(savedcart));

cart.splice(index,1)
localStorage.setItem("cart",JSON.stringify(cart));
showData(cart);


})

let remove=document.createElement("button");
remove.innerText="Remove";
remove.setAttribute("class","addbtn")
remove.addEventListener("click",()=>{
    removecart.push(el);
    cart.splice(index,1)
localStorage.setItem("cart",JSON.stringify(cart));
showData(cart);
})






let hr=document.createElement("hr");
hr.setAttribute("id","hrline")
// let hr1=document.create/Element("hr");

totalprice.innerText=`$${sum+disc+40}` ;

cardimg.append(image,incbtn,quanttext,decbtn)

carddet.append(name,seller,price,savefor,remove,hr)
card.append(cardimg,carddet)
card1.append(card)
})




}
 showData();

let placeorder1=document.getElementById("placeorder1")
placeorder1.addEventListener("click",()=>{
    
    window.location.assign("order.html")
    // console.log("y")
})

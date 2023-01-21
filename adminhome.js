
let datas= JSON.parse(localStorage.getItem("key"))||[]

window.addEventListener("load",function(){
    display(datas)
})

function display(data){

    document.querySelector("#cont").innerHTML=null;

data.forEach((el,i)=>{

let div= document.createElement("div")

let img=document.createElement("img")

img.setAttribute("src",el.image)

let brandname=document.createElement("h2")

let name=document.createElement("p")


let price=document.createElement("h3")
let qty=document.createElement("h3")

let but=document.createElement("button")
div.append(img,brandname,name,price,qty,but)


document.querySelector("#cont").append(div)
})






}
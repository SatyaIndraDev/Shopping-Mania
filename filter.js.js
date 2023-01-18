let container=document.getElementById("product-container")
let nameasc=document.getElementById("AtoZ")
let namedsc=document.getElementById("ZtoA")
let priceasc=document.getElementById("LtH")
let pricedsc=document.getElementById("HtL")

let lowdata=[];
nameasc.addEventListener("click",()=>{
    lowdata.sort(function(a,b){
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        return 0;
    });
    displayproducts(lowdata);
})
let highdata=[];
namedsc.addEventListener("click",()=>{
    highdata.sort(function(a,b){
        if(a.name>b.name) return -1;
        if(a.name<b.name) return 1;
        return 0;
        });
    displayproducts(highdata);
})
let lowprice=[];
priceasc.addEventListener("click",()=>{
    lowprice.sort(function(a,b){
        return a.price-b.price;
        });
    displayproducts(lowprice);
})
let highprice=[];
pricedsc.addEventListener("click",()=>{
    highprice.sort(function(a,b){
        return b.price-a.price;
        });
    displayproducts(highprice);
})


    fetch("https://639ef56e5eb8889197f0d414.mockapi.io/product/?_limit=8&_page=1")
    .then((responseobj)=>{
        return responseobj.json();
    })
    .then((actualdata)=>{
        highdata=actualdata
        lowprice=actualdata
        highprice=actualdata
        lowdata=actualdata
        displayproducts(actualdata)
    })
    .catch((error)=>{
        console.log(error)
    })

    function displayproducts(data){
        container.innerHTML=null
        data.forEach(element => {
            let card=document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("src",element.avatar)
        let name=document.createElement("h2")
        name.innerText=element.name;
        let price=document.createElement("h3")
        price.innerText=element.price;
        let type=document.createElement("p")
        type.innerText=element.category;
        let cartbtn=document.createElement("button")
        cartbtn.innerText="Add To Cart"

            card.append(image,name,price,type,cartbtn)
            container.append(card);
        });
    }
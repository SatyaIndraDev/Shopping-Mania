let container=document.getElementById("product-container")
let nameasc=document.getElementById("AtoZ")
let namedsc=document.getElementById("ZtoA")
let priceasc=document.getElementById("LtH")
let pricedsc=document.getElementById("HtL")
let calvinbtn=document.getElementById("calvin")
let dieselbtn=document.getElementById("diesel")
let turtlebtn=document.getElementById("turtle")
let raymondbtn=document.getElementById("raymond")
let adidasbtn=document.getElementById("adidas")

let fetcheddata=[];
     calvinbtn.addEventListener("click",()=>{
      let filtered=fetcheddata.filter((element)=>{
        if(element.brandName==="Calvin Klein"){
          return true
        }else{
          return false;
        }
      })
      displayproducts(filtered)
     })
     dieselbtn.addEventListener("click",()=>{
        let dieselfilter=fetcheddata.filter((element)=>{
          if(element.brandName==="Diesel"){
            return true
          }else{
            return false;
          }
        })
        displayproducts(dieselfilter)
       })
       turtlebtn.addEventListener("click",()=>{
        let turtlefilter=fetcheddata.filter((element)=>{
          if(element.brandName==="Turtle"){
            return true
          }else{
            return false;
          }
        })
        displayproducts(turtlefilter)
       })
       raymondbtn.addEventListener("click",()=>{
        let raymondfilter=fetcheddata.filter((element)=>{
          if(element.brandName==="Raymond"){
            return true
          }else{
            return false;
          }
        })
        displayproducts(raymondfilter)
       })
       adidasbtn.addEventListener("click",()=>{
        let adidasfilter=fetcheddata.filter((element)=>{
          if(element.brandName==="Adidas"){
            return true
          }else{
            return false;
          }
        })
        displayproducts(adidasfilter)
       })



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


    fetch("mens-input.json")
    .then((responseobj)=>{
        return responseobj.json();
    })
    .then((actualdata)=>{
        fetcheddata=actualdata
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
        image.setAttribute("src",element.image)
        let name=document.createElement("h2")
        name.innerText=element.name;
        let price=document.createElement("h3")
        price.innerText= "$"+element.price;
        let brandname=document.createElement("p")
        brandname.innerText=element.brandName
        let desc=document.createElement("p")
        desc.innerText=element.desc;
        let cartbtn=document.createElement("button")
        cartbtn.innerText="Add To Cart"

            card.append(image,name,brandname,desc,price,cartbtn)
            container.append(card);
        });
    }
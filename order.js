function displayBlock(id)
    {
        let div = document.querySelectorAll(".radio-group > .pay")
        

        div.forEach((each_div) => {
            each_div.style.display = "none";
        })

        let payopt = document.getElementById(id);
        

        payopt.style.display = "block";
    }
    function onClick()
    {
        
        window.location.assign("loading.html")
    }
    let ordersum=document.getElementById("ordersum")
let totalprice=document.getElementById("totalprice")
let address=document.getElementById("address");
let pricequant=document.getElementById("pricequant")
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let discprice=document.getElementById("discprice")
pricequant.innerText=cart.length
    function showData(){
        let sum=0; 
    for(let i=0;i<cart.length;i++){
        sum=sum+cart[i].price*cart[i].quantity
    }
    
    // window.location.reload(1);
    itemprice.innerText="$"+ sum;
    let disc=-Math.floor(sum*0.4);
    discprice.innerText="$" +(-disc ) 
    
    totalprice.innerText= `$${sum+disc+40}` ;
// ordersum.innerHTML=null;

        cart.forEach((el,index)=>{
            let card=document.createElement("div");
            // card.style.border="solid"
            card.setAttribute("class","cardwidth")
            let hr=document.createElement("hr")
            card.setAttribute("id","cardcard")
            let cardimg=document.createElement("div");
            cardimg.setAttribute("id","cardimg")
            let carddet=document.createElement("div")
            carddet.setAttribute("id","carddet")
        let image=document.createElement("img");
        image.setAttribute("src",el.image);
        
        
        
        
        let name=document.createElement("h3");
        name.innerText=el.name;
        
        let quant=document.createElement("p")
        quant.innerText=`Quantity: ${el.quantity}`
        
        let seller=document.createElement("p");
        seller.innerText="Seller:SuperComNet";
        
        let price=document.createElement("h3")
        price.innerText="₹"+el.price*el.quantity;
        
        
        
        
        
        
        
        
        // let hr=document.createElement("hr");
        // hr.setAttribute("id","hrline")
        // let hr1=document.create/Element("hr");
        
        // totalprice.innerText=sum+disc+40;
        
        cardimg.append(image)
        
        carddet.append(name,seller,price,quant,hr)
        card.append(cardimg,carddet)
        ordersum.append(card)
        })
    }
    showData();
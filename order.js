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
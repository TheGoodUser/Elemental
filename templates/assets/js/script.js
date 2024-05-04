document.addEventListener("deviceready", function() {
    navigator.splashscreen.hide();
}, false);


function typeWriter(text, inputElement, speed) {
    let i = 0;
    const textLength = text.length;
    const intervalId = setInterval(function() {
        if (i < textLength) {
            inputElement.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, speed);
}


// ai api
document.getElementById("askaiButton").addEventListener("click", function(){
    const topic = document.getElementById('AIAskValue');
    const res = document.getElementById('response');
    res.innerHTML = '';

    if(topic.value) {
        const apiEndpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${topic.value}`;
    
        // Perform API call here
        fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the data
            // console.log(data.extract);
            res.style.border = "1px solid antiquewhite";
            res.style.backgroundColor = "rgb(13, 20, 31)";
            typeWriter(data.extract, res, 30);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            res.style.border = "none";
            res.style.backgroundColor = "transparent";
            res.innerHTML = "Sorry, I couldn't find any information on that topic.";
            setTimeout(() => {
                res.innerHTML = '';
            }, 3000);
        });
    }else {
        // console.log("Please enter a topic")
        res.innerHTML = "Please enter a topic";
        res.style.border = "none";
        res.style.backgroundColor = "transparent";
        res.style.color = "red";
        setTimeout(() => {
            res.innerHTML = '';
        }, 1700);
        res.style.color = "white";
    } 
});

var container_bgc = document.querySelector(".container");
container_bgc.style.backgroundColor = "rgb(15, 23, 42)";

document.getElementById("r2").addEventListener("click", function(){
    let bgc = document.querySelector(".container");
    let sun_n_moon = document.querySelector("#r2 i");

    let logo = document.getElementById("r1");
    let logo_text = document.querySelector("#r1 h1");

    let city = document.querySelector("#meteo-form input");

    let AI = document.getElementById("AIAskValue")
    
    let askAIbtn  = document.querySelector("#askaiButton");
    let askAIbtnicon  = document.querySelector("#askaiButton i");
    
    let magnifying_glass_bgc = document.querySelector("#meteo-form button");
    let magnifying_glass_bgc_icon = document.querySelector("#meteo-form button i");

    let locate = document.querySelector("#meteo-form i");

    // rgb(13, 20, 31)
    let response = document.querySelector("#askai p");
    response.style.backgroundColor = "transparent";
    
    if(window.getComputedStyle(bgc).backgroundColor == "rgb(15, 23, 42)") {
        bgc.style.backgroundColor = "lightseagreen";
        document.documentElement.style.backgroundColor = "lightseagreen"; 
        sun_n_moon.classList.add("fa-moon");
        sun_n_moon.style.backgroundColor = "white";

        this.style.backgroundColor = "white";
        this.style.color = "black";
        
        logo.style.backgroundColor = "white";
        logo_text.style.color = "black";

        city.style.backgroundColor = "white";
        city.style.color = "black";

        AI.style.backgroundColor = "white";
        AI.style.color = "black";

        askAIbtn.style.backgroundColor = "white";
        askAIbtnicon.style.color = "black";

        magnifying_glass_bgc.style.backgroundColor = "white";
        magnifying_glass_bgc_icon.style.color = "black";

        locate.style.color = "antiquewhite";

        response.style.backgroundColor = "#6ea79a";

    } else {
        bgc.style.backgroundColor = "rgb(15, 23, 42)";
        document.documentElement.style.backgroundColor = "rgb(15, 23, 42)"; 
        sun_n_moon.classList.remove("fa-moon");
        
        logo.style.backgroundColor = "rgb(30, 41, 59)";
        logo_text.style.color = "white";
        
        city.style.backgroundColor = "transparent";
        city.style.color = "white";
        
        AI.style.backgroundColor = "transparent";
        AI.style.color = "white";

        this.style.backgroundColor = "rgb(30, 41, 59)";
        this.style.color = "white";
        
        sun_n_moon.style.backgroundColor = "transparent"

        askAIbtn.style.backgroundColor = "rgb(30, 41, 59)";
        askAIbtnicon.style.color = "white";

        magnifying_glass_bgc.style.backgroundColor = "rgb(30, 41, 59)";
        magnifying_glass_bgc_icon.style.color = "white";
        
        response.style.backgroundColor = "rgb(13, 20, 31)";
    }
});






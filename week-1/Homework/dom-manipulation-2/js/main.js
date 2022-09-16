let blueBtn = document.querySelector("#blueBtn").addEventListener("click", changeBlue);
function changeBlue(){
    document.querySelector(".Jumbotron").style.backgroundColor = "#588fbd";
    document.querySelector("#donate").style.backgroundColor = "#ffa500";
    document.querySelector("#vol").style.backgroundColor = "black";
    document.querySelector("#vol").style.color = "white"
};

let orangeBtn = document.querySelector("#orangeBtn").addEventListener("click", changeOrange);
function changeOrange(){
    document.querySelector(".Jumbotron").style.backgroundColor = "#f0ad4e";
    document.querySelector("#donate").style.backgroundColor = "#5751fd";
    document.querySelector("#vol").style.backgroundColor = "#31b0d5";
    document.querySelector("#vol").style.color = "white"
};

let greenBtn = document.querySelector("#greenBtn").addEventListener("click", changeGreen);
function changeGreen(){
    document.querySelector(".Jumbotron").style.backgroundColor = "#87ca8a";
    document.querySelector("#donate").style.backgroundColor = "black";
    document.querySelector("#vol").style.backgroundColor = "#8c9c08";
   
};
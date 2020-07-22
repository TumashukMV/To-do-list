function tipsBtnCall(){
    var tipsBtn = document.querySelector(".tipBtn");
    var overlay = document.getElementById("overlay");
    tipsBtn.addEventListener("click", function(){
        overlay.style.height = "100%";
    });
}

export{tipsBtnCall}
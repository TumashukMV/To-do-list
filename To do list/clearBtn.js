function clearBtnCall(){
    var ul = document.querySelector("ul");
    var clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener('click', function(){
        ul.innerHTML = "";
    });
}

export{clearBtnCall}
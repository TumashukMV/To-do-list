function clearBtnCall(){
    var clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener('click', function(){
        ul.innerHTML = "";
    });
}

export{clearBtnCall}
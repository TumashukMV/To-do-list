function closeBtnCall(){
    var closeBtn = document.querySelector(".closebtn");
    closeBtn.addEventListener("click", function(event){
        event.preventDefault();
        overlay.style.height = "0";
    });
}

export{closeBtnCall}
function callPencil(){
    var input = document.querySelector("input[type='text']");
    var pencil = document.querySelector("#pencil");
    pencil.addEventListener('click', function(){
        input.classList.toggle("display");
    });
}

export{callPencil}
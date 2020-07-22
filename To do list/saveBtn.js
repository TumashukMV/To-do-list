function saveBtnCall(){
    var ul = document.querySelector("ul");
    var saveBtn = document.querySelector(".save");
    saveBtn.addEventListener('click', function(){
        localStorage.setItem('todoList', ul.innerHTML);
    });
}
export{saveBtnCall}
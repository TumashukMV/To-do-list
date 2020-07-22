    
    var ul = document.querySelector("ul");
    var container = document.querySelector("div");
    var lists = document.querySelectorAll("li");
    var spans = document.getElementsByTagName("span");
    var input = document.querySelector("input[type='text']");
    var saveBtn = document.querySelector(".save");
    var clearBtn = document.querySelector(".clear");
    var tipsBtn = document.querySelector(".tipBtn");
    var closeBtn = document.querySelector(".closebtn");
    var overlay = document.getElementById("overlay");

    import { ulCall } from "./ul.js";
    import { callPencil } from "./pencil.js";
    import { inputCall } from "./input.js";
    import { clearBtnCall } from "./clearBtn.js";
    import { saveBtnCall } from "./saveBtn.js";

    saveBtnCall();
    clearBtnCall();
    inputCall();
    ulCall();
    callPencil();
    //Delete todo if delete span clicked
    function deleteTodo(){
        for(let span of spans){
            span.addEventListener('click', function(){
                span.parentElement.remove();
            })
        }
    }

    function loadTodos(){
        if(localStorage.getItem("todoList")){
            ul.innerHTML = localStorage.getItem("todoList")
        }
    }

    tipsBtn.addEventListener("click", function(){
        overlay.style.height = "100%";
    });

    closeBtn.addEventListener("click", function(event){
        event.preventDefault();
        overlay.style.height = "0";
    });

    /*pencil.addEventListener('click', function(){
        input.classList.toggle("display");
    })*/

    /*ul.addEventListener("click", function(e){
        if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    input.addEventListener('keypress', function(key){
        console.log(key);
        if (key.which === 13){
            var li = document.createElement('li');
            var spanElement = document.createElement("span");
            var icon = document.createElement("i");
            
            var newTodo = this.value;
            this.value = "";

            icon.classList.add('fas', 'fa-trash-alt');
            spanElement.append(icon);
            ul.appendChild(li).append(spanElement, newTodo);
        }
    });
});

//Add todo to


//Clear all todos on click Clear button
clearBtn.addEventListener('click', function(){
    ul.innerHTML = "";
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoList', ul.innerHTML);
})*/
deleteTodo();
loadTodos();
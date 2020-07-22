    var input = document.querySelector("input[type='text']");
    var ul = document.querySelector("ul");
    var container = document.querySelector("div");
    var lists = document.querySelectorAll("li");
    var spans = document.getElementsByTagName("span");
    var pencil = document.querySelector("#pencil");
    var saveBtn = document.querySelector(".save");
    var clearBtn = document.querySelector(".clear");
    var lists = document.querySelectorAll("li");
    var tipsBtn = document.querySelector(".tipBtn");
    var closeBtn = document.querySelector(".closebtn");
    var overlay = document.getElementById("overlay");

    //Delete todo if delete span clicked
    function deleteTodos(){
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

    pencil.addEventListener('click', function(){
        input.classList.toggle("display");
    })

    ul.addEventListener("click", function(e){
        if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
});

//Add todo to
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

//Clear all todos on click Clear button
clearBtn.addEventListener('click', function(){
    ul.innerHTML = "";
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoList', ul.innerHTML);
})

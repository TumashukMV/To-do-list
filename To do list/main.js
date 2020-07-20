/*document. addEventListener("DOMContentLoaded", function (event){
    function calculate() {
    var bill_count = document.getElementById("bill_count").value;
    var service_quality = document.getElementById("service_quality"). value;
    var people_num = document.getElementById("people_num").value;
    // Simple validation
    if (!bill_count ||!service_quality) {
    alert("Please enter values!");
    return;
    }
    // Check people input value
    if (!people_num || people_num <= 1) {
    people_num =1;
    } else {
    document.getElementById("each"). style. display = "block";
    }
    
    // Calculate tips
    var total = (bill_count * service_quality) / people_num;
    
    //round value
    total - Math.round(total * 100) / 100;
    total - total.toFixed(2);
    
    document.getElementById("totalTip"). style. display - "block";
    document.getElementById("tip"). innerHTML - total;
    }
    // Hide tips element on load
    document.getElementById("totalTip").style.display - "none";
    document.getElementById("each"). style. display - "none";
    
    document.getElementById("calculate").onclick - function () {
    calculate();
    }
    
    })*/
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

deleteTodos();

loadTodos();
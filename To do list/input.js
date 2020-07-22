var spans = document.getElementsByTagName("span");

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
        })
    }
}

function inputCall(){
    var ul = document.querySelector("ul");
    var input = document.querySelector("input[type='text']");
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

            deleteTodo();
        }
    });
}

export{inputCall}
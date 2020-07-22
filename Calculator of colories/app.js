/*Новая задача - Счётчик стоимости блюда (написать его нужно используя объект и методы этого объекта для подсчёта)

Некая сеть ресторанов предлагает несколько видов коробок с ланчем:

маленький (300р, 250 калорий)

большой (380р, 400 калорий)

Коробка может быть с одним из нескольких видов соусов и топпингов(обязательно):

терияки и свинина(+ 60р, + 100 калорий)

унаги и говядина(+ 80р, + 150 калорий)

устричный и курица(+ 40р, + 80 калорий)

Дополнительно, еду можно посыпать сухариками (+ 15р, 10 калорий) и полить доп. соусом (+ 20р, + 5 калорий). Напиши программу, рассчитывающую стоимость и калорийность коробочки с едой.
Используйте ООП подход (подсказка: нужен класс Китайская коробка, константы, методы). */


var ChinaBox = {
    price: 0,
    calories: 0,


    small:{
        price: 300,
        calories: 250
    },
    large: {
        price: 300,
        calories: 400
    },
    pig: {
        price: 60,
        calories: 100
    },
    meet: {
        price: 80,
        calories: 150
    },
    chicken: {
        price: 40,
        calories: 80
    },
    bread_crumbs: {
        price: 15,
        calories: 10
    },
    extra_souse: {
        price: 20,
        calories: 5
    },

    calculate: function(size, meat) {
        this.price = ChinaBox[size].price;
        this.calories = ChinaBox[meat].calories;
        if (ChinaBox[size]=="small") {
            this.calories =this.calories *2;
        } else {
            this.calories=this.calories *3.5;
        }
        var checkBoxArray = querySelectorAll('input[name = add]:checked');
        
        for(var i = 0; i < checkBoxArray.length; i++){
            var type = checkBoxArray[i].id;

            this.price += ChinaBox[type].price;
            this.calories += ChinaBox[type].calories;
        }
        console.log(this.prise);
        ChinaBox.result(this.price, this.calories)
    },

    result: function(){
        document.getElementById('price').innerHTML = price;
        document.getElementById('calories').innerHTML = calories;
    },
    reset_all: function(){
        this.price = 0;
        this.calories = 0;
        ChinaBox.result(this.price, this.calories);
    }
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    //ChinaBox.calculate(document.querySelector('input[name = "size"]:checked').value
    var sizeBox=document.querySelector('input[name="size"]:checked').value;
        var meat =document.querySelector('input[name="base"]:checked').value;
        ChinaBox.calculate(sizeBox, meat);
        ChinaBox.result();
})
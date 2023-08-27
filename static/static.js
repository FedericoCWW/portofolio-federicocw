var li_elems = document.querySelectorAll(".seccion2 .navbar ul li")
var item_elems = document.querySelectorAll(".item")
for(var i = 0; i < li_elems.length; i++){
    li_elems[i].addEventListener("click", function(){
        li_elems.forEach(function(li){
            li.classList.remove("active");
        })
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");
        item_elems.forEach(function(item){
            item.style.display = "none";
        })
        if(li_value == "a1"){
            document.querySelector("." + li_value).style.display = "block";
        }
        else if(li_value == "a2"){
            document.querySelector("." + li_value).style.display = "block";
        }
        else if(li_value == "a3"){
            document.querySelector("." + li_value).style.display = "block";
        }
        else if(li_value == "a4"){
            document.querySelector("." + li_value).style.display = "block";
        }
    });
}
var moment = moment().format("H");
console.log(moment)

//localStorage.setItem("label","value");
//localStorage.getItem("label")

$(document).ready(function (){
    $("#saveButton").click(function(event){
        console.log(event.target.previousElementSibling.value)
        localStorage.setItem("text",event.target.previousElementSibling.value);  
    })

    $("#showStorage").click(function(event){
        event.preventDefault();
        console.log(localStorage.getItem("text"))
    })
})
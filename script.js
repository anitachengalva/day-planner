var moment = moment().format("H");
console.log(moment)
//localStorage.setItem("label","value");
//localStorage.getItem("label")

$(document).ready(function (){
    moment().format('MM/DD/YYYY');
    // Moment Date Stamp

    $(".time").each(function(){
        $(this).append("<button class='submitTime'>Submit</button>")
    })

    $(".submitTime").each(function(){
        $(this).on("click",function(event){
            let text = $(this).prev().val()
            console.log(text)
        })
    })
    $("#saveButton").click(function(event){
        console.log(event.target.previousElementSibling.value)
        localStorage.setItem("text",event.target.previousElementSibling.value);  
    })

    $("#showStorage").click(function(event){
        event.preventDefault();
        console.log(localStorage.getItem("text"))
    })
})
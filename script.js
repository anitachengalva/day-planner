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
            //let time = get the value of the time, 9am 10am etc and save it to variable

            //save text to local storage
            //localStorage.setItem(time,text)
        })
    })
    $("#saveButton").click(function(event){
        console.log(event.target.previousElementSibling.value)
        localStorage.setItem("text",event.target.previousElementSibling.value);  
    })

    $("#showStorage").click(function(event){
        event.preventDefault();
        console.log(localStorage.getItem("text"))
        //run a for loop to go through the localstorage items that match the times
        $('.time').each(/*inside of here dynamically getItem from localStorage with the time label, and set the .val() of the textareass to be what's already there*/)
    })
})
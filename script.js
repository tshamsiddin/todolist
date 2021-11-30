var input=document.getElementById("input");
var button=document.getElementById("submit");
var ul=document.querySelector("ul");
var emoji = String.fromCodePoint(128204)

button.addEventListener("click", function () {
    if (input.value.length > 0) {
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(`${emoji} ${input.value}`));
        ul.appendChild(li);
        input.value= ""; }
})

input.addEventListener("keypress", function (event) {
    if (input.value.length >0 && event.code === "Enter") {
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(`${emoji} ${input.value}`));
        ul.appendChild(li);
        input.value= "";
    }
})


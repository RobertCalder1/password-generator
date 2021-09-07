// slider scripting
var slider = document.getElementById("Password-Length");
var output = document.getElementById("length-value");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
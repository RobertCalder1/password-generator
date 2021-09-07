// slider output scripting
var slider = document.getElementById("Characters");
var output = document.getElementById("characters-value");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}


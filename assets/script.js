// slider output scripting
var slider = document.getElementById("Characters");
var slideroutput = document.getElementById("characters-value");
slideroutput.value = slider.value;

slider.oninput = function() {
    slideroutput.value = this.value;
}

slideroutput.oninput = function() {
    slider.value = this.value;
}

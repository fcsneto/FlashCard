var i = 0;
var progressBar = document.getElementById("bar");
progressBar.value = i;
function countNumbers(){
    i++;
    progressBar.value = i;
}
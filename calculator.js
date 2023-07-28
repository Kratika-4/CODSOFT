function clrScr() 
{
    document.getElementById("result").value = "";
 }
 
function display(value) {
    document.getElementById("result").value += value;
 }
 

function cal() {
    var num1 = document.getElementById("result").value;
    var result = eval(num1);
    document.getElementById("result").value = result;
 }

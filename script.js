function clearScreen(){
    document.getElementById("result").value = "";
}

function display(num) {
    temp = document.getElementById("result").value;
    if ((temp.charAt(temp.length-1) == "+" || temp.charAt(temp.length-1) == "-" || temp.charAt(temp.length-1) == "x" || temp.charAt(temp.length-1) == "÷") && 
    (num == "+" || num == "-" || num == "x" || num == "÷")) {
        document.getElementById("result").value += "";
        
    }
    else if (temp.charAt(0) == "" && (num == "+" || num == "-" || num == "x" || num == "÷")) {
        document.getElementById("result").value += "";
        
    }
    else {
        document.getElementById("result").value += num;
    }
    
}

function calculate() {
    var p = document.getElementById("result").value;
    p = p.replaceAll("x", "*");
    p = p.replaceAll("÷", "/");
    var q = eval(p)
    document.getElementById("result").value = q;
}
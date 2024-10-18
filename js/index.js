function basicButton(symbol){
    let x = document.getElementById("ans");

    x.value = x.value + symbol;
}

function ansButton(){
    let x = document.getElementById("ans");

    x.value = eval(x.value);
}
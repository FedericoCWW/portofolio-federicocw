//contantes
const display = document.getElementById("entrada");
const botones_num = document.querySelectorAll(".boton-num");
//console.log(botones_num)


//funciones
function clearDisplay(){
    display.value = '';
}

function Suma(){
    display.value += "+";
}


function Resta(){
    display.value += "-";
}

function Multiplicacion(){
    display.value += "*";
}


function Division(){
    display.value += "/";
}

function Resultado(){
    if (isNaN(display.value)){
        let result = eval(display.value);
        console.log(result)
        if (isFinite(result)){
            display.value = result.toFixed(2)
        }
    }else{
        display.value = "ERROR!"
    }
}

botones_num.forEach((button) => {
    button.addEventListener('click', () => {
        const valor = button.innerHTML;
        //console.log(valor);
        display.value += valor;
    });
});
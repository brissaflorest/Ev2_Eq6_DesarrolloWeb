function Operacion() {
    let selectParseado, numero1, numero2, resultado;

    selectParseado = document.getElementById("ddlOperacion").value;
    numero1 = parseFloat(document.getElementById("txtNumero1").value);
    numero2 = parseFloat(document.getElementById("txtNumero2").value);

    switch (selectParseado) {
        case "Suma":
            resultado = numero1 + numero2;
            break;

        case "Resta":
            resultado = numero1 - numero2;
            break;

        case "Multiplicacion":
            resultado = numero1 * numero2;
            break;

        case "Division":
            resultado = numero1 / numero2;
            break;

        case "Residuo":
            resultado = numero1 % numero2;
            break;
            
    }
    alert(`La ${selectParseado} del número ${numero1} y número ${numero2} es ${resultado}`);


}

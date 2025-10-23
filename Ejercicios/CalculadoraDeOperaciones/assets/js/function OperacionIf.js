function OperacionIf() {
    let selectParseado, numero1, numero2, resultado;

    selectParseado = document.getElementById("ddlOperacion").value;
    numero1 = parseFloat(document.getElementById("txtNumero1").value);
    numero2 = parseFloat(document.getElementById("txtNumero2").value);

    if (selectParseado === "Suma") {
            resultado = numero1 + numero2;
    }
    else if (selectParseado === "Resta") {
        resultado = numero1 - numero2;
    }
    else if (selectParseado === "Multiplicacion") {
        resultado = numero1 * numero2;
    }
    else if (selectParseado === "Division") {
        resultado = numero1 / numero2;
    }
    else if (selectParseado === "Residuo") {
        resultado = numero1 % numero2;
    }
    else {
        resultado = 0;
    }

    alert("El resultado es " + resultado);


}
function random() {
    let NumAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre el 1 y 100
    let intentos = 5;

    while (intentos <= 5) {
        let prediccion = parseInt(prompt("Escribe el número que piensas que es:"))

        if (prediccion == NumAleatorio) {
            alert("Felicidades, lo,lograste (dab dab)");
            break; // Atinó el nuúmero
        } 

        else if (prediccion > NumAleatorio) { // Mayor que
            intentos--;
            alert("El número secreto es menor al ingresado, te quedan " + intentos + " intentos");
        }
        
        else if (prediccion < NumAleatorio) { // Menor que
            intentos--;
            alert("El número secreto es mayor al ingresado, te quedan " + intentos + " intentos");
        }
        
        if (intentos === 0) {
            alert("Suerte para la próxima, el número secreto es " + NumAleatorio)
            break; // Sale del bucle cuando se le terminan los intentos
        }
        
    }
}

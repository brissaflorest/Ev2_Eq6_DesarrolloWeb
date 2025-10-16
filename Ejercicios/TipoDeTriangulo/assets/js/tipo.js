function tipoTriangulo() {
    // Definimos valores
    const lado1 = parseFloat(document.getElementById('txtLado1').value);
    const lado2 = parseFloat(document.getElementById('txtLado2').value);
    const lado3 = parseFloat(document.getElementById('txtLado3').value);

    let tipo;

    // Tipo de triángulo
    if (lado1 === lado2 && lado2 === lado3) { // Todos los lados son iguales
        tipo = 'Equilátero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) { // Dos lados son iguales
        tipo = 'Isósceles';
    } else { // Todos los lados son diferentes
        tipo = 'Escaleno';
    }

    // Mostramos en consola
    console.log('El triángulo es de tipo: ' + tipo);
}
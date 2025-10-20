let calificaciones = [];

function agregarCalificacion() {
    const input = document.getElementById('calificacion');
    const valor = parseFloat(input.value);

    // validación básica
    if (isNaN(valor)) {
        alert('Por favor ingresa una calificación válida.');
        return;
    }
    if (valor < 0 || valor > 100) {
        alert('La calificación debe estar entre 0 y 100.');
        return;
    }

    calificaciones.push(valor);
    mostrarCalificaciones();
    input.value = ''; // limpiar campo
    input.focus();
}

// Mostrar calificaciones en la tabla (usa #tablaCalificaciones tbody)
function mostrarCalificaciones() {
    const tbody = document.querySelector('#tablaCalificaciones tbody');
    if (!tbody) {
        console.error('No se encontró #tablaCalificaciones tbody en el DOM.');
        return;
    }
    tbody.innerHTML = ''; // limpiar antes de volver a llenarla

    calificaciones.forEach((nota, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${index + 1}</td><td>${nota.toFixed(2)}</td>`;
        tbody.appendChild(tr);
    });
}

// Calcular promedio y mostrar resultado
function calcularPromedio() {
    if (calificaciones.length === 0) {
        alert('No has ingresado ninguna calificación.');
        return;
    }

    const suma = calificaciones.reduce((a, b) => a + b, 0);
    const promedio = suma / calificaciones.length;

    const resultado = document.getElementById('resultado');
    resultado.textContent = `Promedio: ${promedio.toFixed(2)} - ${promedio >= 70 ? ' El estudiante Aprobo ' : 'El estudiante Reprobo'}`;
}

function limpiarCalificaciones() {
    calificaciones = [];
    mostrarCalificaciones();
    document.getElementById('resultado').textContent = '';
}
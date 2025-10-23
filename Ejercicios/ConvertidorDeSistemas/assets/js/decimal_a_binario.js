const boton = document.getElementById('btnConvertir');

boton.addEventListener('click', function() {
  let decimal = parseInt(document.getElementById('decimal').value);
  let binario = "";

  // Validar que sea un número positivo
  if ( decimal < 0) {
    document.getElementById('binario').value = "Ingresa un número positivo";
    return;
  }

  // Caso especial: si el número es 0
  if (decimal === 0) {
    document.getElementById('binario').value = "0";
    return;
  }

   
  while (decimal > 0) {
    let residuo = decimal % 2;         
    binario = residuo + binario;      
    decimal = Math.floor(decimal / 2);  
  }


  document.getElementById('binario').value = binario;
});

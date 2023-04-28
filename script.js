function encriptar(texto) {
  // Reemplazar las letras según las llaves de encriptación
  let texto_encriptado = texto.replace(/e/g, 'enter');
  texto_encriptado = texto_encriptado.replace(/i/g, 'imes');
  texto_encriptado = texto_encriptado.replace(/a/g, 'ai');
  texto_encriptado = texto_encriptado.replace(/o/g, 'ober');
  texto_encriptado = texto_encriptado.replace(/u/g, 'ufat');
  return texto_encriptado;
}

function desencriptar(texto_encriptado) {
  // Reemplazar las llaves de encriptación por las letras originales
  let texto = texto_encriptado.replace(/enter/g, 'e');
  texto = texto.replace(/imes/g, 'i');
  texto = texto.replace(/ai/g, 'a');
  texto = texto.replace(/ober/g, 'o');
  texto = texto.replace(/ufat/g, 'u');
  return texto;
}

function convert() {
  const input = document.getElementById('input').value;
  const operation = document.querySelector('input[name="operation"]:checked').value;
  let output = '';
  if (operation === 'encrypt') {
    output = encriptar(input);
  } else {
    output = desencriptar(input);
  }

  document.getElementById('output').value = output;
}

function copy() {
  const output = document.getElementById('output');
  output.select();
  output.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('¡Texto copiado!');
}



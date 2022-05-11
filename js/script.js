function encriptar() {
  var texto = document.getElementById("inputText").value.toLowerCase();

  var cifrarTexto = texto.replace(/e/gim, "enter");
  var cifrarTexto = cifrarTexto.replace(/o/gim, "ober");
  var cifrarTexto = cifrarTexto.replace(/i/gim, "imes");
  var cifrarTexto = cifrarTexto.replace(/a/gim, "ai");
  var cifrarTexto = cifrarTexto.replace(/u/gim, "ufat");

  document.getElementById("imagenMunieco").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = cifrarTexto;
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("inputText").value.toLowerCase();

  var cifrarTexto = texto.replace(/enter/gim, "e");
  var cifrarTexto = cifrarTexto.replace(/ober/gim, "o");
  var cifrarTexto = cifrarTexto.replace(/imes/gim, "i");
  var cifrarTexto = cifrarTexto.replace(/ai/gim, "a");
  var cifrarTexto = cifrarTexto.replace(/ufat/gim, "u");

  document.getElementById("imagenMunieco").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = cifrarTexto;
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");
  alert("Se ha copiado el texto");
}

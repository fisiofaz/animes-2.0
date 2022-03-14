function adicionarAnime() {
  var animeFavorito = document.getElementById("anime").value;
  if (animeFavorito.endsWith(".jpg")) {
    listarAnimeTela(animeFavorito);
  } else {
    console.error("Endereço de Anime invalido");
  }
  document.getElementById("anime").value = "";
}

function listarAnimeTela(animeFavorito) {
  var elementoAnimeFavorito = "<img src=" + animeFavorito + ">";
  var elementoListaAnime = document.getElementById("listaAnime");
  elementoListaAnime.innerHTML =
    elementoListaAnime.innerHTML + elementoAnimeFavorito;
}

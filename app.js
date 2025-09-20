//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaDeNomes = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Por favor, informe o nome do amigo!');
        return;
    }
    let lista = document.getElementById('listaAmigos');
    ListaDeNomes.push(amigo);

    if (lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }
    
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
let nomeSorteado = parseInt(Math.random() * ListaDeNomes + 1);
return nomeSorteado;

}

//bloquear caso não tenha amigo na lista
function sortearAmigo() {
  if (ListaDeNomes.length === 0){
    alert("Não tem nenhum amigo na lista!");
    return;
  }

  // Gerar o Sorteio
  let listaSorteio = Math.floor(Math.random() * ListaDeNomes.length);
  let nomeSorteado = ListaDeNomes[listaSorteio];

  // Colocar resultado na tela
  let titulo = document.getElementById('resultado')
  titulo.innerHTML = `O nome do seu amigo secreto é ${nomeSorteado}!`;

  // Limpa o sorteio
  nListaDeNomes.splice(listaSorteio, 1);

  // Atualiza a lista visível
  criarListaVisivel();
}

function reiniciarJogo() {
  ListaDeNomes = [];
  document.getElementById('listaAmigos').innerHTML = "";
  document.getElementById('resultado').innerHTML = "";
  document.getElementById('amigo').value = "";
}
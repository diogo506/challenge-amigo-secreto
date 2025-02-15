//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    if (amigoInput && amigoInput.value.trim() !== '') {
        amigos.push(amigoInput.value.trim());
        listaAmigos();
        amigoInput.value = ''; // Limpa o campo após adicionar
    } else {
        alert("Digite um nome válido!");
    }
}

function listaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpa o resultado anterior

    let li = document.createElement('li');
    li.textContent = "Amigo sorteado: " + sorteado;
    resultadoLista.appendChild(li);
}

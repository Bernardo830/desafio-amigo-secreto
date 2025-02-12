let amigos = [];

function agregarAmigo() {
    let amiguito = document.getElementById("amigo").value;

    if (amiguito === "") {
        alert("Debe ingresar un nombre");
        return;
    } else {
        amigos.push(amiguito);
        document.getElementById('amigo').value = '';
    }
    actualizarLista();
}

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    } else {
        document.getElementById("resultado").textContent = "El amigo sorteado es: " + amigoSorteado;
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
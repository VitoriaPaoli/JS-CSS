const paragrafo = document.createElement("p")
paragrafo.innerHTML = "É culpa do mike!"

document.body.appendChild(paragrafo)

function mostrarTelefone(){
    document.getElementById("telefone").style.display = "block"
}

function removerTelefone(){
    document.body.removeChild(telefone)
}
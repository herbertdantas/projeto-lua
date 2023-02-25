const button = document.getElementById("quero")

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value


    if (nome == "" || email == ""){

        alert("Não foi possível efetivar o seu cadastro!")   
        
    } else{
        alert("Cadastro efetuado com sucesso!")
        limpar()
    }

    
})

function limpar(){
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""

}


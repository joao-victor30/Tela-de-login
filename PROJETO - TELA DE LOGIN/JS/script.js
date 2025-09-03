const email = document.getElementById('email')
const senha = document.getElementById('senha')
const visualizar = document.getElementById('verSenha')


function entrar(e) {
    e.preventDefault()

    if (email.value === "" && senha.value === "") {
        alert("Digite um email e senha válidos!")
    } else if (email.value === "") {
        email.placeholder = "Digite um email válido";
        email.style.setProperty('--placeholder-color', '#ff0000ff')
        

    } else if (senha.value === "") {
        senha.placeholder = "Digite uma senha";
        senha.style.setProperty('--placeholder-color', '#ff0000ff')
    } else {
        alert(`Bem vindo ao lobby!`)
    }
    email.value = "";
    senha.value = "";
}


visualizar.addEventListener("click", () => {
    if (senha.type === "password") {
        senha.type = "text";
        visualizar.src = "IMG/olhoFechado.png";

    } else {
        senha.type = "password";
        visualizar.src = "IMG/olho.png";


    }
});
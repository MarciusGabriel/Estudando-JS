function alerta() {
    let nome = prompt("Qual é o seu nome?")
    let texto = "  <h2> Seja bem vindo " + nome + "</h2>"
    document.getElementById("nome").innerHTML = texto
    return 0
}

function e() {
    let lorem = "<p id= 'paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui a illo iure fuga omnis praesentium vero, dolore quos ea mollitia nam nemo eum, soluta facere dolorum sequi blanditiis in.</p>"
    document.getElementById("texto2").innerHTML += lorem
}

function f() {
    let nome = document.getElementById("texto2").remove()
    let contador
    contador++
    if (contador != 1) {
        let kkkk = "<p id='texto2' ></p>"
        document.getElementById("quatro").innerHTML = kkkk
    }

}









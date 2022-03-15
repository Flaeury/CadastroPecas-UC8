let pesoPeca = 200
let numeroPecas = 6
let listaPecas = ["Disco de Freio", "Motor", "Pastilha de Freio", "Roda", ] //array
let nomePeca = "Disco de Freio" // Trim

if (pesoPeca >= 100){
   console.log("Peso adequado, pode cadastrar, ")
}else{
    console.log("Não pode cadastrar")
}

if (listaPecas.length >= 10) {
    console.log("Capacidade máxima atingida!")
} else {
    console.log("Ainda há espaço e ")
}

if (nomePeca.length < 3) {
    console.log("Nome inválido, tente novamente")
} else {
    console.log("Nome válido, cadastrando...")
}
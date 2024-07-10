// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contagem = 1;

while (contagem <= 10) {
alert(contagem);
contagem++
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contagem2 = 10;

while (contagem2 >= 0) {
    alert(contagem2);
    contagem2--
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contagem3 = prompt('Digite um número para a contagem regressiva')

while (contagem3 >= 0) {
    console.log(contagem3);
    contagem3--
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contagemInicial = prompt('Digite um número para a contagem progressiva')
let contagemFinal = 0;

while (contagemFinal <= contagemInicial) {
console.log(contagemFinal);
contagemFinal++
}
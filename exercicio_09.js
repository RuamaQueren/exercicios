/*Escreva um programa que calcula a média dos números de 1 a 30:*/

var soma = 0;
for (numero = 1; numero<=30; numero ++) {
    soma += numero;
}
var media = soma / 30;
console.log ("A média dos numeros de 1 a 30 é:" +media);

/*Escreva um programa que calcula a média dos números de 1 a 100:*/

let soma = 0;
for (numero=1; numero<=100; numero++) {
    soma += numero;
}
let media = soma / 100;
console.log ("A media dos numeros entre 1 e 100 é:" +media);

/*Crie um loop while que imprima os números impares de 0 a 20:*/

var i = 0;
    while (i<=20) {
        if (i%2!==0) {
        console.log (i)
        }
        i++
    }

/*Escreva um programa que imprime os números de 20 a 2 na tela:*/

for (numero=20; numero>=2; numero--) {
    console.log (numero)
}
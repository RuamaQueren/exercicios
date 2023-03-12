/*Escreva um programa que imprime os números de 1 a 10 na tela:*/

for (numero = 1; numero <=10; numero++) {
    console.log (numero);
}

/*Escreva um programa que imprima os números pares de 2 a 10 na tela*/

for (numero = 2; numero <=10; numero++) {
    if (numero%2==0)
    console.log (numero);
}

/*Crie um loop while que imprima os números pares de 0 a 20:*/

var numero = 0;
    while (numero <=20) {
       if (numero%2==0)
       console.log (numero);
       numero += 2;
    }

/*Escreva um programa que calcula a média dos números de 1 a 10:*/

let soma = 0;
for (numero = 1; numero <=10; numero++) {
    soma += numero;
}

let media = soma / 10;
console.log("A media dos numeros de 1 a 10 é:" +media);

/*numero = 1 + 1 = 2 + 1 = 3 + 1 = 4 + 1 = 5 + 1 = 6 + 1 = 7 + 1 = 8 + 1 = 9 + 1 = 10 
soma = 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15 + 6 = 21 + 7 = 28 + 8 = 36 + 9 = 45 + 10 = 55*/





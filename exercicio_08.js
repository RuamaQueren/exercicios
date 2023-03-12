/*Escreva um programa que imprime os números de 2 a 20 na tela:*/

for (n=2; n<=20; n++) {
    console.log (n)
}

/*Escreva um programa que imprime os números de 20 a 2 na tela:*/

for (numero=20; numero>=2; numero--) {
    console.log (numero)
}

/*Escreva um programa que imprima os números impares de 1 a 10 na tela*/

for (i=1; i<=10; i++) {
    if (i%2!=0) 
    console. log (i)
}

/*Escreva um programa que imprima os números pares de 20 a 50 na tela*/

for (pares=20; pares<=50; pares++) {
    if (pares%2==0)
    console.log (pares)
}

/*Crie um loop while que imprima os números impares de 0 a 20:*/

    var numero = 0;
    while (numero <=20) {
        if (numero%2!==0) {
            console.log (numero)
        }
          numero ++
    }

    /*escrever dentro do if console*/

/*Escreva um programa que calcula a média dos números de 20 a 60:*/
 
    var soma = 0;
    for (numero=20; numero<=60; numero ++) {
        soma += numero;
    }

    var media = soma / 60;
        console.log ("A media dos numeros de 20 a 60 é:" +media);


/*Crie um algoritmo que escreva todos os números ímpares de 1 a 100*/
 for (var impares = 1; impares <=100; impares ++ ) {
    if (impares %2 ==0 ) {
        continue;
    }
    console.log (impares)
 }

/*Crie um algoritmo que escreva todos os múltiplos de 3 de 1 a 30*/

for ( var múltiplo = 1; múltiplo <=30; múltiplo++) {
    if (múltiplo%3==0) {
        console.log (múltiplo);
    }
}

/*Crie um algoritmo que escreva todos os números entre dois números específicos*/

var numero = 20;
    while (numero<=60) {
        console.log (numero)
        var numero = numero +1;
    }
    
/*Crie um algoritmo que escreva a soma de todos os números de 1 a 100*/

var numero = 0
var soma = 0
    while (numero<=100) {
        console.log (soma)
        numero += 1
        soma += numero;   
    }

    /*numero = 0 + 1 = 1 + 1 = 2 + 1 = 3 + 1 = 4 + 1 = 5 + 1 = 6
    soma = 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15 + 6 = 21*/
// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
// soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
// linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma 
// mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência 
// ou pode ser previamente definido no código;



let numEscolhido = 5;
let num1 = 1;
let num2 = 0;
let pertence = false;


while(num1 <= numEscolhido){
    if(num1 === numEscolhido){
        pertence = true;
        break;
    }
    let proximo = num1 + num2;
    num1 = num2;
    num2 = proximo;
}

    if(pertence){
        console.log(`${numEscolhido} pertence à sequência Fibonnaci`)
    }else{
        console.log(`${numEscolhido} não pertence à sequência Fibonnaci`)
    }

// 2) Escreva um programa que verifique, em uma string, 
// a existência da letra ‘a’, seja maiúscula ou minúscula, 
// além de informar a quantidade de vezes em que ela ocorre.


// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua
//  preferência ou pode ser previamente definida no código;

let textoDeExemplo = "Uma Abelha Voa Sem Parar Com SuAs Asas a BrilhAr"

let contadorMinusculo = 0;
let contadorMaiusculo = 0;


for(let i = 0; i < textoDeExemplo.length; i++){
    let letra = textoDeExemplo[i];
    let letraMaiuscula = textoDeExemplo[i];
    if(letra === "a"){
        contadorMinusculo++;
    }
    if(letraMaiuscula === "A"){
        contadorMaiusculo++;
    }
    
}

if(contadorMaiusculo > 0 && contadorMinusculo > 0){
    console.log(`A letra 'A' aparece ${contadorMaiusculo} vezes no texto 
                e a letra 'a' aparece ${contadorMinusculo} vezes no texto.`)
}else{
    console.log("A letra 'a' não aparece no texto.")
}
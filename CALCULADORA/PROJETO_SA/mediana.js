function mediana(){
let variavel = [];
let tamanho = parseInt(prompt("Quantos numeros serão Digitados: "));

for(let i = 0; i < tamanho; i++){
    variavel[i] = parseInt(prompt("Digite o " + (i + 1) + "º número: "));
}
let meio = 0, par = 0;
//numera em crescente os numeros dentro do array
variavel.sort((a,b) =>a - b);

if(variavel.length %2 == 0){
    meio = variavel.length / 2; //inteiro arredondado pra baixo
    //pega os dois numeros do meio, soma eles e divide por dois
    par = (variavel[meio] + variavel[meio - 1]) / 2
    console.log("Mediana é: " , par)
} else {
    //pega somente o numero do meio
    meio = (Math.floor(variavel.length / 2)); //inteiro arredondado pra baixo
    console.log("Mediana é: " , variavel[meio]);
    }
}
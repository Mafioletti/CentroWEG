function moda(){
let variavel = [];
let tamanho = parseInt(prompt("Quantos numeros serão Digitados: "));

for(let i = 0; i < tamanho.length; i++){
    variavel[i] = parseInt(prompt("Digite o " + (i + 1) + "º número: "));
}
let cont = 0;
let num;

//conta os numeros dentro do vetor variavel
for(let i = 0; i < variavel.length; i++){
    let c = 0;
    //conta novamente os numeros do vetor variavel, e compara com os numeros contados no anterior
    for(let j = 0; j < variavel.length; j++){
        if(variavel[i] == variavel[j]){
            //se o numero anterior for igual, add 1 na variavel 'c'
            c++;
        }
    } 
    //se o c for maior que o cont, o cont passa a se tornar o numero mais repetido no array, e depois pega o numero mais repetido no array e printa ele
    if(c > cont){
        cont = c;
        num = variavel[i];
    }
}
console.log(num);
}
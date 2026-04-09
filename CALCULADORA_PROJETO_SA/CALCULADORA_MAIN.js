console.log("=======================");
console.log("======CALCULADORA======");
console.log("=======================");

let opcao = parseInt(prompt(`==Escolha a operação a ser feita==
1 - Matemática Básica
2 - Matemática Avançada
3 - Conversões
4 - Estatística
5 - Aritmetica Avançada
`));

switch(opcao){
    case 1:
        matBasica();
        break;
    case 2:
        matAvancada();
        break;
    case 3:
        Conversoes();
        break;
    case 4:
        Estatistica();
        break;
    case 5:
        AritmeticaAvancada();
        break;
    default:
        alert("Erro, tente novamente !")
}

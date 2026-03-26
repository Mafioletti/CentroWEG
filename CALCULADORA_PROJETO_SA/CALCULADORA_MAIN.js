console.log("=======================");
console.log("======CALCULADORA======");
console.log("=======================");

let opcao = parseInt(prompt(`==Escolha a operação a ser feita==
1 - Matemática Básica
2 - Matemática Avançada
3 - Conversões
4 - Estatística
`));

switch(opcao){
    case 1:
        matBasica();
        break;
    case 2:
        matAvancada();
        break;
    case 3:
        chamaTemp();
        break;
    case 4:
        Distancia();
        break;
    case 5:
        fracao();
        break;
    case 6:
        Soma();
        break;
    default:
        alert("Erro, tente novamente !")
}

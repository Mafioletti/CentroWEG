function matBasica(){
let opcao = parseInt(prompt(`==Escolha a operação a ser feita==
1 - Adição
2 - subtração
3 - Multiplicação
4 - Divisão
`));

switch(opcao){
    case 1:
        Soma();
        break;
    case 2:
        Subtracao();
        break;
    case 3:
        Multiplicacao();
        break;
    case 4:
        Divisao();
        break;
    default:
        alert("Opção Indisponível")
    }
}
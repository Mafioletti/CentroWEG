console.log("=======================");
console.log("======CALCULADORA======");
console.log("=======================");

let opcao = parseInt(prompt(`==Escolha a operação a ser feita==
1 - Potênciação                     
2 - Radiciação
3 - Temperatura
4 - Distância
5 - Fração
6 - Adição
7 - Subtração
8 - Multiplicação
9 - Divisão
10 - Bhaskara
11 - Equação 1º Grau
12 - Regra 3 composta
13 - Conta de luz/KWh
`));

switch(opcao){
    case 1:
        Potencia();
        break;
    case 2:
        raizQuadrada();
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
    case 7:
        Subtracao();
        break;
    case 8:
        Multiplicacao();
        break;
    case 9:
        Divisao();
        break;
    case 10:
        Bhaskara();
        break;
    case 11:
        equacao1();
        break;
    case 12:
        regra3C();
        break;
    case 13:
        eletrodomestico();
        break;
    default:
        alert("Erro, tente novamente !")
}

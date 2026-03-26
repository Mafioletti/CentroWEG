function matAvancada(){
    let opcao = parseInt(prompt(`==Escolha a operação a ser feita==
    1 - Potenciação
    2 - Radiciação
    3 - Simplificação de frações
    4 - Regra de 3 Simples
    5 - Regra de 3 Composta
    `));
    
    switch(opcao){
        case 1:
            Potencia();
            break;
        case 2:
            raizQuadrada();
            break;
        case 3:
            fracao();
            break;
        case 4:
            regra3();
            break;
        case 5:
            regra3C();
            break;
        case 6: 
            equacao1();
            break;
        case 7:
            Bhaskara();
            break;
        default:
            alert("Opção indisponível")
        }
    }
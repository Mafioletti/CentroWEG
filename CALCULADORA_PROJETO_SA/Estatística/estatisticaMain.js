function Estatistica(){
    let opcao = parseInt(prompt(`==Escolha a operação a ser feita==
    1 - Amostragem
    2 - Media
    3 - Mediana
    4 - Moda
    5 - Variância e Desvio Padrão
    `));
    
    switch(opcao){
        case 1:
            amostragem();
            break;
        case 2:
            media();
            break;
        case 3:
            mediana();
            break;
        case 4:
            moda();
            break;
        case 5:
            variancia_desvioPadrao();
            break;
        default:
            alert("Opção Indisponível")
        }
    }
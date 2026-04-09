function Conversoes(){
    let opcao = parseInt(prompt(`==Escolha a operação a ser feita==
    1 - Consumo Doméstico
    2 - Distância
    3 - Mult_&_Sub
    4 - Temperatura
    5 - Arquivos
    `));
    
    switch(opcao){
        case 1:
            consumoDomestico();
            break;
        case 2:
            Distancia();
            break;
        case 3:
            mult_sub();
            break;
        case 4:
            chamaTemp();
            break;
        case 5:
            arquivos();
            break;
        default:
            alert("Opção Indisponível")
        }
    }
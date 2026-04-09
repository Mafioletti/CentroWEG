function trigonometria(){
    let opcao = parseInt(prompt("Digite a operação a ser feita:\n1 - Seno\n2 - Cosseno\n3 - Tangente"))
    let valor = parseFloat(prompt("Digite o valor conhecido: "))
    let graus = parseFloat(prompt("Digite graus conhecidos: "))

    switch(opcao){
        case 1:
            console.log("Valor descoberto: " + seno(valor, graus));
            break;
            case 2:
                console.log("Valor descoberto: " + cosseno(valor, graus));
                break;
                case 3:
                    console.log("Valor descoberto: " + tangente(valor, graus));
        default:
            alert("Opção indisponível")
    }
}
function seno(valor, graus){
    let radianos = graus * (Math.PI / 180);
    let sen = Math.sin(radianos);
    let valorDescoberto = sen * valor
    return valorDescoberto;
}
function cosseno(valor, graus){
    let radianos = graus * (Math.PI / 180);
    let cos = Math.cos(radianos);
    let valorDescoberto = cos * valor
    return valorDescoberto;
}
function tangente(valor, graus){
    let radianos = graus * (Math.PI / 180);
    let tg = Math.tan(radianos);
    let valorDescoberto = tg * valor
    return valorDescoberto;
}
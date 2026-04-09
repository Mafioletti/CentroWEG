function arquivos(){
    // Opções de potências de 10 para cada unidade (expoentes)
    const escalas = {
        "GB": 9,  // giga (10^9)
        "MB": 6,  // mega (10^6)
        "KB": 3,  // quilo (10^3)
        "B": 0,  // byte (10^0)
    };
    let atual = prompt(`Digite a unidade de ORIGEM:
    GB - Giga
    MB - Mega
    KB - Kilo
    B  - Byte
    `);
    
    if (!escalas[atual.toUpperCase]) {
        alert("Operação indisponível: Unidade inválida.");
        return;
    }

    let startValue = parseFloat(prompt("Digite o valor inicial:"));

    let convertion = prompt(`Digite para qual unidade DESEJA CONVERTER:
    GB - Giga
    MB - Mega
    KB - Kilo
    B  - Byte
    `);

    if (!escalas[convertion.toUpperCase]) {
        alert("Operação indisponível: Unidade inválida.");
        return;
    }

    // Lógica de conversão:
    // Valor * 10^(origem - destino)
    let expoenteOrigem = escalas[atual];
    let expoenteDestino = escalas[convertion];
    
    let resultado = startValue * Math.pow(10, expoenteOrigem - expoenteDestino);

    alert("Resultado enviado para o console!");
    console.log("O valor final é: " + resultado + " " + convertion);
}
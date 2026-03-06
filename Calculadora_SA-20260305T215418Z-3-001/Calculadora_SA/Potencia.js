function Potencia(){
    let potencia = parseInt(prompt("Digite um valor para potência"));
    let fator = parseInt(prompt("Digite o fator para potência"));
    potencia = potencia ** fator;
    console.log("O resultado é: " + potencia);
}
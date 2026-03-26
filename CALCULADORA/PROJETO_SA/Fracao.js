function fracao(){
    let numerador = parseInt(prompt("Digite o numerador da fração: "));
    let denominador = parseInt(prompt("Digite o denominador da fração: "));

    denominador /= numerador;
    numerador /= numerador;
    
    console.log("O resultado é: " + numerador + "/" + denominador);
}
function IMC(){
    let altura = parseFloat(prompt("Digite sua altura: "));
    let peso = parseFloat(prompt("Digite seu peso: "));

    let imc = peso / (altura*altura);

    console.log("O seu IMC é: " + imc.toFixed(2))
}
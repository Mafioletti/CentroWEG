function Bhaskara(){
    let a = parseInt(prompt("Digite valor de a: "));
    let b = parseInt(prompt("Digite valor de b: "));
    let c = parseInt(prompt("Digite valor de c: "));

    let comeco = b * -1;
    let delta = (b**2) - (4 * a * c);
    let deltaFake = (b**2) - (-4 * a * c);
    console.log(delta)
    let raizDelta = delta ** 0.5;

    alert("O resultado é: " + comeco + "+-√" + deltaFake + "/" + a + "*2");
    alert("Agora olhe no console.");

    let xLinha = (comeco + raizDelta) / (2 * a);
    let x2Linha = (comeco - raizDelta) / (2 * a);

    console.log("xlinha é: " + xLinha);
    console.log("x2Linha é " + x2Linha);

}
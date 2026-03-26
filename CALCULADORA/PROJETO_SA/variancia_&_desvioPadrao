function variancia_desvioPadrao(){
// variancia
/*media
subtrair media de cada valor
elevar ao quadrado
fazer media desses valores*/
let valor = [];
soma = 0;
for(let i = 0; i < 5; i++){
    valor[i] = parseInt(prompt("Digite valor: "));
    soma += valor[i];
}
let media = soma / valor.length;
soma = 0;

for(let i = 0; i < valor.length; i++){
    let menos = valor[i] - media;
    let quadrado = menos * menos;

    soma += quadrado;
}
let variancia = soma / valor.length;
console.log("Media: " + media);
console.log("Variância: " + variancia);


//desvio padrão
let desvioPadrao = variancia ** 0.5;
console.log("Desvio Padrão: " + desvioPadrao);
}
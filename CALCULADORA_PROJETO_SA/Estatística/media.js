function media(){
    let soma = 0;
    let tamanho = parseInt(prompt("Quantos numeros serão Digitados: "));
    let variavel = [];

    for(let i = 0; i < tamanho; i++){
        variavel[i] = parseInt(prompt("Digite o " + (i + 1) + "º número: "));
        soma += variavel[i];
    }

    let media = soma / tamanho.length;

    console.log(media);
}
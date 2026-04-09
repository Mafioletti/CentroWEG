function AritmeticaAvancada(){
    let opcao = parseInt(prompt("Digite a operação a ser calculada:\n1 - IMC\n2 - Trigonometria"));

    switch(opcao){
        case 1:
            IMC();
            break;
        case 2:
            trigonometria();
            break;
        default:
            alert("Opção Indisponível")
    }
}
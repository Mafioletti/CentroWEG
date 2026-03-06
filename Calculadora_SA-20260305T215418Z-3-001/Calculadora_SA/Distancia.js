function Distancia(){
    let determinante = parseInt(prompt("Digite o numero da unidade de medida que vai ser utilizadada:\n1 - km>m\n2 - m>cm\n3 - cm>m\n4 - cm>km\n5 - m>km "));
    let dist = parseInt(prompt("Digite a distância"));

    switch(determinante){
        case 1:
            console.log(dist * 1000);
            break;
        case 2:
            console.log(dist * 100)
            break;
        case 3:
            console.log(dist / 100);
            break;
        case 4:
            console.log(dist / 100000);
            break;
        case 5:
            console.log(dist / 1000);     
        default:
            alert("Erro, tente novamente.");
    }
}
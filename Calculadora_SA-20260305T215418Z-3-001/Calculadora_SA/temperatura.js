function TemperaturaC(){
    let celsius = parseInt(prompt("Digite a temperatura em celsius"));
    let fator = parseInt(prompt("Digite o numero no qual a conversão será feita:\n1 - Fahrenheit\n2 - Kelvin "));
    let temp;

    switch(fator){
        case 1:
            temp = (celsius * (1.8) + 32);
            console.log(`${temp}ºF`);
            break;
        case 2:
            temp = celsius + 273;
            console.log(`${temp}ºK`)
    }
}
function TemperaturaF(){
    let tempF = parseInt(prompt("Digite a temperatura em Fahrenheit"));
    let fator = parseInt(prompt("Digite o numero no qual a conversão será feita:\n1 - Celsius\n2 - Kelvin "));
    let temp;

    switch(fator){
        case 1:
            temp = (tempF - 32) / 1.8;
            console.log(`${temp}ºC`);
            break;
        case 2:
            temp = ((tempF - 32) / (1.8)) + 273;
            console.log(`${temp}ºK`)
    }
}
function TemperaturaK(){
    let tempK = parseInt(prompt("Digite a temperatura em Kelvin"));
    let fator = parseInt(prompt("Digite o numero no qual a conversão será feita:\n1 - Celsius\n2 - Fahrenheit "));
    let temp;

    switch(fator){
        case 1:
            temp = tempK - 273;
            console.log(`${temp}ºC`);
            break;
        case 2:
            temp = ((tempK - 273) * (1.8) + 32);
            console.log(`${temp}ºK`)
    }
}
function chamaTemp(){
    let opcao = parseInt(prompt("Qual unidade será convertida:\n1 - Celsius\n2 - Fahrenhet\n3 - Kelvin"));
    switch(opcao){
        case 1:
            TemperaturaC();
            break;
        case 2:
            TemperaturaF();
            break;
        case 3:
            TemperaturaK();
            break;
    }
}
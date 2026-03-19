# Calculadora_SA

Bem-vindo à **Calculadora_SA**, uma ferramenta completa de cálculos matemáticos e estatísticos desenvolvida em JavaScript. Este projeto oferece uma interface intuitiva com diversas funcionalidades para realizar operações e análises de forma simples e eficiente.

## 📋 Sobre o Programa

A Calculadora_SA é um programa interativo que agrupa múltiplas funcionalidades de cálculo em uma única aplicação. Através de um menu principal, o usuário pode selecionar qual operação deseja realizar e obter o resultado de forma rápida. O projeto foi desenvolvido com 91.3% de JavaScript e 8.7% de HTML.

## 🧮 Funções Disponíveis

### 1. **Operações Básicas**

#### **Adição** (Adicao.js)
A função `Soma()` realiza a adição de dois números inteiros. Solicita ao usuário dois valores e exibe o resultado da soma no console.

#### **Subtração** (Subtracao.js)
Realiza a subtração entre dois números inteiros, permitindo o cálculo rápido de diferenças.

#### **Multiplicação** (Multiplicacao.js)
Executa a multiplicação de dois números inteiros, útil para cálculos básicos de produto.

#### **Divisão** (Divisao.js)
Realiza a divisão entre dois números inteiros, fornecendo o quociente da operação.

### 2. **Operações Avançadas**

#### **Potenciação** (Potencia.js)
Calcula a potência de um número, ou seja, eleva um número base a um expoente específico.

#### **Radiciação** (Raiz.js)
Calcula a raiz quadrada de um número fornecido pelo usuário.

#### **Fração** (Fracao.js)
Realiza operações com frações, permitindo cálculos com números racionais.

### 3. **Funções Físicas e de Conversão**

#### **Temperatura** (temperatura.js)
Converte valores de temperatura entre as escalas:
- **Celsius para Fahrenheit e Kelvin**: Utiliza as fórmulas de conversão padrão
- **Fahrenheit para Celsius e Kelvin**: Realiza as conversões inversas
- **Kelvin para Celsius e Fahrenheit**: Converte da escala absoluta para as demais

Exemplo: 0°C = 32°F = 273°K

#### **Distância** (Distancia.js)
Calcula distâncias entre pontos utilizando fórmulas geométricas, facilitando cálculos de comprimento e espaçamento.

#### **Conta de Luz/KWh** (eletrica.js)
A função `eletrodomestico()` calcula o consumo de energia elétrica de um eletrodoméstico. Solicita:
- Nome do eletrodoméstico
- Potência (em Watt ou KiloWatt)
- Tempo de uso diário (em horas)

Em seguida, calcula:
- Consumo diário em KWh (kilowatt-hora)
- Custo mensal estimado (considerando o preço de R$ 0.90 por KWh × 30 dias)

### 4. **Funções de Estatística**

#### **Mediana** (mediana.js)
Calcula a mediana de um conjunto de dados, que é o valor do meio quando os dados estão ordenados.

#### **Moda** (moda.js)
Determina a moda (valor mais frequente) de um conjunto de dados.

#### **Amostragem** (amostragem.js)
Realiza cálculos relacionados à amostragem estatística.

### 5. **Funções Matemáticas Especiais**

#### **Bhaskara** (bhaskara.js)
Resolve equações do segundo grau utilizando a fórmula de Bhaskara. Solicita os coeficientes a, b e c e calcula:
- O discriminante (Δ = b² - 4ac)
- As raízes da equação (x₁ e x₂)

A fórmula utilizada é: x = (-b ± √Δ) / 2a

#### **Equação do 1º Grau** (equacao1grau.js)
Resolve equações lineares da forma ax + b = 0, fornecendo a solução direta.

#### **Regra de Três Composta** (regra3composta.js)
Realiza cálculos de proporcionalidade entre múltiplas grandezas, útil para problemas com relações complexas.

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Uma caixa de diálogo será exibida com um menu de opções (1-13)
3. Digite o número correspondente à operação desejada
4. Siga as instruções para fornecer os valores necessários
5. O resultado será exibido no console ou em um alerta

## 🌐 Arquitetura

- **index.html**: Arquivo principal HTML que carrega todos os scripts JavaScript
- **calculadora.js**: Gerenciador central que coordena todas as operações através de um menu switch
- **Arquivos de função**: Cada operação possui seu próprio arquivo JavaScript isolado

## 📝 Exemplo de Uso

Para calcular a temperatura de conversão:
1. Selecione a opção 3 no menu principal
2. Escolha a unidade de origem (Celsius, Fahrenheit ou Kelvin)
3. Digite a temperatura
4. Escolha a unidade de destino
5. O resultado aparecerá no console

## 🛠️ Tecnologias

- **JavaScript**: Linguagem principal (91.3%)
- **HTML**: Estrutura da interface (8.7%)
- **Console API**: Para exibição de resultados

## 💡 Observações

- Todos os resultados de operações são exibidos no console do navegador
- Use F12 (ou Cmd+Option+I no Mac) para abrir o console
- O programa utiliza `prompt()` e `alert()` para interação com o usuário
- Certos resultados podem ser visualizados através de caixas de alerta (alert)
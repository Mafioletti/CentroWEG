import java.util.Scanner;


public class qst2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double matriz[][] = new double[3][4];

        for(int linha = 0; linha < matriz.length; linha++){
            for(int coluna = 0; coluna < matriz[linha].length; coluna++){
                System.out.println("Digite temperatura: ");
                matriz[linha][coluna] = sc.nextInt();
            }
        }
        double soma = 0;
        double maior = Integer.MIN_VALUE;
        double menor = Integer.MAX_VALUE;

        System.out.println("Temperaturas registradas:  ");
        for(double linha [] : matriz){
            for(double valor : linha){
                    System.out.println(valor + "ºC | ");

                    soma += valor;
                    if(valor > maior){
                        maior = valor;
                    }
                    if(valor < menor){
                        menor = valor;
                    }
                }
            }
            double media = soma / (3 * 4);
            System.out.println("Media: " + media);
            System.out.println("Maior: " + maior);
            System.out.println("Menor: " + menor);
        }
    }

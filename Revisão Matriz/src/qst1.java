import java.util.Scanner;

public class qst1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int matriz[][] = new int[3][3];

        for(int linha = 0; linha < matriz.length; linha++){
            for(int coluna = 0; coluna < matriz[linha].length; coluna++){
                System.out.println("Digite valor: ");
                matriz[linha][coluna] = sc.nextInt();
            }
        }
        System.out.println("Digite o valor a ser buscado: ");
        int valorBuscar = sc.nextInt();

        for(int linha = 0; linha < matriz.length; linha++){
            for(int coluna = 0; coluna < matriz[linha].length; coluna++){
                if (valorBuscar == matriz[linha][coluna]){
                    System.out.println("Valor existente em: ");
                    System.out.println("[" + linha + "],[" + coluna + "]");
                }
            }
        }
        sc.close();
    }
}
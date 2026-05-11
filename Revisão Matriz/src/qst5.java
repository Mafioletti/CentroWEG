
import java.util.Scanner;

public class qst5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int mapa[][] = new int[5][5];

        int opcao = 0;

        int qtdLivre = 25;
        
        
        while(opcao != 5){
            System.out.println("\nSISTEMA DE ONIBUS");
            System.out.println("\n1. Reservar assento");
            System.out.println("2. Mostrar assentos");
            System.out.println("3. Cancelar reserva");
            System.out.println("4. Mostrar quantidade livre");
            System.out.println("5. Sair do programa");
            opcao = sc.nextInt();

            switch(opcao){
                case 1:
                    System.out.println("Linha: 0 - 4");
                    int linha = sc.nextInt();
                    System.out.println("Coluna: 0 - 4");
                    int coluna = sc.nextInt();

                    if(linha >= 0 && linha < 5 && coluna >= 0 && coluna < 5){
                        if(mapa[linha][coluna] == 0){
                            mapa[linha][coluna] = 1;
                            System.out.println("Reserva realizada com sucesso !");
                            qtdLivre--;
                        } else {
                            System.out.println("Assento já ocupado");
                        } 
                    } else {
                        System.out.println("Posição inválida !");
                    }
                    break;
                case 2:
                    System.out.println("Mapa dos acentos");
                    System.out.println("   0 1 2 3 4");

                    for(int fileiras = 0; fileiras < mapa.length; fileiras++){
                        System.out.print(fileiras + "  ");
                        for(int cadeiras = 0; cadeiras < mapa[fileiras].length; cadeiras++){
                            System.out.print(  mapa[fileiras][cadeiras] + " ");
                        }
                        System.out.println();
                    }
                    break;
                case 3:
                    System.out.println("Linha: 0 - 4");
                    int linhaDeletar = sc.nextInt();
                    System.out.println("Coluna: 0 - 4");
                    int colunaDeletar = sc.nextInt();

                    if(linhaDeletar >= 0 && linhaDeletar < 5 && colunaDeletar >= 0 && colunaDeletar < 5){
                        if(mapa[linhaDeletar][colunaDeletar] == 1){
                            mapa[linhaDeletar][colunaDeletar] = 0;
                            System.out.println("Reserva cancelada !");
                            qtdLivre++;
                        } else {
                            System.out.println("Assento já está livre");
                        } 
                    } else {
                        System.out.println("Posição inválida !");
                    }
                    break;
                case 4:
                    System.out.println("Quantidade de assentos livres: " + qtdLivre);
                    break;
                case 5:
                    System.out.println("Encerrando o sistema...");
                    break;
                default:
                    System.out.println("Opção indisponível");
            }
        }
    }
}
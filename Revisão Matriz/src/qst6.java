
import java.util.Scanner;

public class qst6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int mapa[][] = new int[10][10];

        int opcao = 0;

        int qtdLivre = 100;
        
        
        while(opcao != 5){
            System.out.println("\nESTACIONAMENTO INTELIGENTE");
            System.out.println("\n1. Reservar vaga");
            System.out.println("2. Mostrar vagas");
            System.out.println("3. Liberar vaga");
            System.out.println("4. Mostrar percentual de ocupação");
            System.out.println("5. Sair do programa");
            opcao = sc.nextInt();

            switch(opcao){
                case 1:
                    System.out.println("Linha: 0 - 9");
                    int linha = sc.nextInt();
                    System.out.println("Coluna: 0 - 9");
                    int coluna = sc.nextInt();

                    if(linha >= 0 && linha < 9 && coluna >= 0 && coluna < 9){
                        if(mapa[linha][coluna] == 0){
                            mapa[linha][coluna] = 1;
                            System.out.println("Reserva realizada com sucesso !");
                            qtdLivre--;
                        } else {
                            System.out.println("Vaga já ocupada");
                        } 
                    } else {
                        System.out.println("Posição inválida !");
                    }
                    break;
                case 2:
                    System.out.println("Mapa das vagas");
                    System.out.println("   0 1 2 3 4 5 6 7 8 9");

                    for(int fileiras = 0; fileiras < mapa.length; fileiras++){
                        System.out.print(fileiras + "  ");
                        for(int cadeiras = 0; cadeiras < mapa[fileiras].length; cadeiras++){
                            System.out.print(  mapa[fileiras][cadeiras] + " ");
                        }
                        System.out.println();
                    }
                    break;
                case 3:
                    System.out.println("Linha: 0 - 9");
                    int linhaDeletar = sc.nextInt();
                    System.out.println("Coluna: 0 - 9");
                    int colunaDeletar = sc.nextInt();

                    if(linhaDeletar >= 0 && linhaDeletar < 9 && colunaDeletar >= 0 && colunaDeletar < 9){
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
                    System.out.println("Percentual de vagas ocupadas: " + (100 - qtdLivre) + "%");
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
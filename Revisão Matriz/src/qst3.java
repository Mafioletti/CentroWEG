import java.util.Scanner;

public class qst3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int qtdTimes = 3;
        int qtdPartidas = 4;
        int[][] partida = new int[qtdTimes][qtdPartidas];

        for (int time = 0; time < qtdTimes; time++) {
            System.out.println("Dados do Time " + (time + 1) + ":");
            for (int golsPartida = 0; golsPartida < qtdPartidas; golsPartida++) {
                System.out.print("Gols na partida: ");
                partida[time][golsPartida] = sc.nextInt();
            }
        }

        int maiorTotalGols = -1;
        int indexTimeCampeao = 0;
        int totalGolsCampeonato = 0;

        System.out.println("RESULTADOS");
        
        int contadorTime = 0; 
        for (int[] partidasDoTime : partida) {
            int golsDesteTime = 0;
            for (int gol : partidasDoTime) {
                golsDesteTime += gol;
            }

            totalGolsCampeonato += golsDesteTime;
            System.out.println("Time " + (contadorTime + 1) + ", Total de Gols: " + golsDesteTime);
            
            if (golsDesteTime > maiorTotalGols) {
                maiorTotalGols = golsDesteTime;
                indexTimeCampeao = contadorTime + 1;
            }
            contadorTime++;
        }
        double mediaGeral = (double) totalGolsCampeonato / (qtdTimes * qtdPartidas);

        System.out.println("ESTATÍSTICAS GERAIS");
        System.out.println("Média de gols do campeonato:" + mediaGeral);
        System.out.println("Time com mais gols: Time " + indexTimeCampeao + " (" + maiorTotalGols + " gols)");

        sc.close();
    }
}
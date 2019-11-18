import java.util.Scanner;

public class P05_WeddingPresents {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countA = 0;
        int countB = 0;
        int countV = 0;
        int countG = 0;

        int guests = Integer.parseInt(scanner.nextLine());
        int gifts = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= gifts; i++) {
            String type = scanner.nextLine();
            switch (type) {
                case "A":
                    countA++;
                    break;
                case "B":
                    countB++;
                    break;
                case "V":
                    countV++;
                    break;
                case "G":
                    countG++;
                    break;
            }
        }
        double percentA = ((double) countA / gifts) * 100;
        double percentB = ((double) countB / gifts) * 100;
        double percentV = ((double) countV / gifts) * 100;
        double percentG = ((double) countG / gifts) * 100;
        double percentGifts = ((double)gifts / guests) * 100;

        System.out.printf("%.2f%%\n%.2f%%\n%.2f%%\n%.2f%%\n%.2f%%", percentA, percentB, percentV, percentG, percentGifts);
    }
}

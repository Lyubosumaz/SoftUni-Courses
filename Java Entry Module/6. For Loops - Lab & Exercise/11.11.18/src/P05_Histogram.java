import java.util.Scanner;

public class P05_Histogram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int p1 = 0;
        int p2 = 0;
        int p3 = 0;
        int p4 = 0;
        int p5 = 0;

        for (int i = 0; i < num; i++) {
            int numeral = Integer.parseInt(scanner.nextLine());
            if (numeral < 200) {
                p1++;
            }
            if (numeral >= 200 && numeral < 400) {
                p2++;
            }
            if (numeral >= 400 && numeral < 600) {
                p3++;
            }
            if (numeral >= 600 && numeral < 800) {
                p4++;
            }
            if (numeral >= 800) {
                p5++;
            }
        }
        System.out.printf("%.2f%%\n%.2f%%\n%.2f%%\n%.2f%%\n%.2f%%", (p1 / (double) num * 100),
                (p2 / (double) num * 100), (p3 / (double) num * 100), (p4 / (double) num * 100),
                (p5 / (double) num * 100));
    }
}

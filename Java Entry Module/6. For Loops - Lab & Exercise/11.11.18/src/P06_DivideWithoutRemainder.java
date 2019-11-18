import java.util.Scanner;

public class P06_DivideWithoutRemainder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int p1 = 0;
        int p2 = 0;
        int p3 = 0;

        for (int i = 0; i < num; i++) {
            int numeral = Integer.parseInt(scanner.nextLine());
            if (numeral % 2 == 0) {
                p1++;
            }
            if (numeral % 3 == 0) {
                p2++;
            }
            if (numeral % 4 == 0) {
                p3++;
            }
        }
        System.out.printf("%.2f%%\n%.2f%%\n%.2f%%", (double) p1 / num * 100, (double) p2 / num * 100,
                (double) p3 / num * 100);
    }
}

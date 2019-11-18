import java.util.Scanner;

public class P06 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        int amount = Integer.parseInt(scanner.nextLine());

        int breakCount = 1;
        int incrementer = 1;

        for (char i = 35; i <= 55; i++) {
            for (char j = 64; j <= 96; j++) {
                for (int k = 1; k <= a; k++) {
                    for (int l = 1; l <= b; l++) {

                        if (k == 1 && l == 1) {
                            System.out.printf("%c%c%d%d%c%c|", i, j, k, l, j, i);
                        } else {
                            int test1 = i + incrementer;
                            int test2 = j + incrementer;
                            if (test1 > 55) {
                                test1 = 35;
                                incrementer = 1;
                            }
                            if (test2 > 96) {
                                test2 = 64;
                                incrementer = 1;
                            }
                            System.out.printf("%c%c%d%d%c%c|", test1, test2, k, l, test2, test1);
                            breakCount++;
                            incrementer++;
                        }
                        if (amount == breakCount) {
                            return;
                        }
                        if (k == a && l == b) {
                            return;
                        }
                    }
                }
            }
        }
    }
}
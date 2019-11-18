import java.util.Scanner;

public class P06_1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        int amount = Integer.parseInt(scanner.nextLine());

        int breakCount = 1;
        int incrementer = 1;


        int test1 = 0;
        int test2 = 0;
        for (int i = 35; i <= 55; i++) {
            test1 = i;
            for (int j = 64; j <= 96; j++) {
                test2 = j;
                for (int k = 1; k <= a; k++) {
                    for (int l = 1; l <= b; l++) {

                        if (k != a && l != b) {
                            System.out.printf("%c%c%d%d%c%c|", i, j, k, l, j, i);

                        }
                    }
                }

            }
        }


    }
}
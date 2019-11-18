import java.util.Scanner;

public class P06_TicketCombination {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int combinationNumber = Integer.parseInt(scanner.nextLine());
        int counter = 0;

        for (int i = 'B'; i <= 'L'; i++) {
            for (int j = 'f'; j >= 'a'; j--) {
                for (int k = 'A'; k <= 'C'; k++) {
                    for (int n = 1; n <= 10; n++) {
                        for (int m = 10; m >= 1; m--) {

                            if (i % 2 == 0) {
                                counter++;
                            }
                            if (counter == combinationNumber) {
                                System.out.printf("Ticket combination: %c%c%c%d%d\nPrize: %d lv.", i, j, k, n, m,
                                        (i + j + k + n + m));
                            }
                        }
                    }
                }
            }
        }
    }
}
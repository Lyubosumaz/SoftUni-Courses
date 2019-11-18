import java.util.Scanner;

public class P06_Substitute {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int counter = 0;
        int K = Integer.parseInt(scanner.nextLine());
        int L = Integer.parseInt(scanner.nextLine());
        int M = Integer.parseInt(scanner.nextLine());
        int N = Integer.parseInt(scanner.nextLine());
        for (int k = K; k <= 8; k++) {
            for (int l = 9; l >= L; l--) {
                for (int m = M; m <= 8; m++) {
                    for (int n = 9; n >= N; n--) {

                        if (k % 2 == 0 && l % 2 != 0 && m % 2 == 0 && n % 2 != 0) {
                            if (k == m && l == n) {
                                System.out.println("Cannot change the same player.");
                            } else {
                                System.out.printf("%d%d - %d%d\n", k, l, m, n);
                                counter++;
                            }
                            if (counter == 6) {
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
}
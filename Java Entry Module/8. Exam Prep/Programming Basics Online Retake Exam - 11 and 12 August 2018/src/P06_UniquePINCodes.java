import java.util.Scanner;

public class P06_UniquePINCodes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        int c = Integer.parseInt(scanner.nextLine());

        for (int A = 1; A <= a; A++) {
            for (int B = 1; B <= b; B++) {
                for (int C = 1; C <= c; C++) {

                    if (A % 2 == 0 && C % 2 == 0 && (B == 2 || B == 3 || B == 5 || B == 7)) {
                        System.out.printf("%d %d %d\n", A, B, C);
                    }
                }
            }
        }
    }
}


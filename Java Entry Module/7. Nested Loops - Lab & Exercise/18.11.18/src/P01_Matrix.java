import java.util.Scanner;

public class P01_Matrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numA = Integer.parseInt(scanner.nextLine());
        int numB = Integer.parseInt(scanner.nextLine());
        int numC = Integer.parseInt(scanner.nextLine());
        int numD = Integer.parseInt(scanner.nextLine());

        for (int i = numA; i <= numB; i++) {
            for (int j = numA; j <= numB; j++) {
                for (int k = numC; k <= numD; k++) {
                    for (int l = numC; l <= numD; l++) {
                        if ((i + l) == (j + k) && (i != j) && (k != l)) {
                            System.out.printf("%d%d\n", i, j);
                            System.out.printf("%d%d\n", k, l);
                            System.out.println();
                        }
                    }
                }
            }
        }
    }
}
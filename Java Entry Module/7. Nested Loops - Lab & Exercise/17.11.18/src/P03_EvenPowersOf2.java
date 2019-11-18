import java.util.Scanner;

public class P03_EvenPowersOf2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i <= num; i += 2) {
            double current = Math.pow(2, i);
            System.out.printf("%.0f\n", current);
        }
    }
}
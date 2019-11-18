import java.util.Scanner;

public class P04_MaxNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < num; i++) {
            int numeral = Integer.parseInt(scanner.nextLine());
            if (numeral > max) {
                max = numeral;
            }
        }
        System.out.println(max);
    }
}
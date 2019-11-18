import java.util.Scanner;

public class P05_MinNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int min = Integer.MAX_VALUE;
        for (int i = 0; i < num; i++) {
            int numeral = Integer.parseInt(scanner.nextLine());
            if (numeral < min) {
                min = numeral;
            }
        }
        System.out.println(min);
    }
}
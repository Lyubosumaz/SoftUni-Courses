import java.util.Scanner;

public class P07_OddEvenSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());

        int evenSum = 0;
        int oddSum = 0;
        for (int i = 0; i < num; i++) {
            int numeral = Integer.parseInt(scanner.nextLine());
            if (i % 2 == 0) {
                evenSum += numeral;
            } else {
                oddSum += numeral;
            }
        }
        int diff = Math.abs(evenSum - oddSum);
        if (evenSum == oddSum) {
            System.out.printf("Yes Sum = %d", evenSum);
        } else {
            System.out.printf("No Diff = %d", diff);

        }
    }
}
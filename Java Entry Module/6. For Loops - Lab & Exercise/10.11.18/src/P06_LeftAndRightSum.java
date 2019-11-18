import java.util.Scanner;

public class P06_LeftAndRightSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());

        int leftSum = 0;
        int rightSum = 0;

        for (int i = 0; i < num * 2; i++) {
            int numeral = Integer.parseInt(scanner.nextLine());

            if (i < num) {
                leftSum += numeral;
            } else {
                rightSum += numeral;
            }
        }
        int diff = Math.abs(leftSum - rightSum);
        if (leftSum == rightSum) {
            System.out.printf("Yes, sum = %d", leftSum);
        } else {
            System.out.printf("No, diff = %d", diff);
        }
    }
}
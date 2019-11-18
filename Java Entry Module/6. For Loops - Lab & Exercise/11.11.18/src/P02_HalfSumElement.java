import java.util.Scanner;

public class P02_HalfSumElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int sum = 0;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < num; i++) {
            int numeral = Integer.parseInt(scanner.nextLine());
            sum += numeral;
            if (max < numeral) {
                max = numeral;
            }
        }
        int diffSum = Math.abs(sum - max);
        int diff = Math.abs(max - diffSum);
        if (diffSum == max) {
            System.out.printf("Yes Sum = %d", diffSum);
        } else {
            System.out.printf("No Diff = %d", diff);
        }
    }
}
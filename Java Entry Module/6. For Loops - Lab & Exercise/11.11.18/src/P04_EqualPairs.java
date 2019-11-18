import java.util.Scanner;

public class P04_EqualPairs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int currentSum = 0;
        int previousSum = 0;
        int maxDiff = Integer.MIN_VALUE;

        for (int i = 0; i < num; i++) {
            int numeralOne = Integer.parseInt(scanner.nextLine());
            int numeralTwo = Integer.parseInt(scanner.nextLine());

            previousSum = currentSum;

            currentSum = numeralOne + numeralTwo;
            int diff = Math.abs(currentSum - previousSum);

            if (diff > maxDiff && i > 0 && previousSum != currentSum) {
                maxDiff = diff;
            }
        }
        if (maxDiff == Integer.MIN_VALUE) {
            System.out.printf("Yes, value=%d", currentSum);
        } else {
            System.out.printf("No, maxdiff=%d", maxDiff);
        }
    }
}
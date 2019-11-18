import java.util.Scanner;

public class P06_EqualSumsLeftRightPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int smallNum = Integer.parseInt(scanner.nextLine());
        int bigNum = Integer.parseInt(scanner.nextLine());

        for (int now = smallNum; now <= bigNum; now++) {
            int currentNumber = now;
            int d1 = currentNumber % 10;
            currentNumber /= 10;
            int d10 = currentNumber % 10;
            currentNumber /= 10;
            int d100 = currentNumber % 10;
            currentNumber /= 10;
            int d1000 = currentNumber % 10;
            currentNumber /= 10;
            int d10000 = currentNumber % 10;
            currentNumber /= 10;

            int left = d10000 + d1000;
            int right = d1 + d10;
            int left100 = left + d100;
            int right100 = right + d100;

            if (left == right || left100 == right || left == right100) {
                System.out.printf("%d ", now);
            }
        }
    }
}

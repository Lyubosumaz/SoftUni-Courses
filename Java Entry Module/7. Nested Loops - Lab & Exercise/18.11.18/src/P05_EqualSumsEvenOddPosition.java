import java.util.Scanner;

public class P05_EqualSumsEvenOddPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int smallNum = Integer.parseInt(scanner.nextLine());
        int bigNum = Integer.parseInt(scanner.nextLine());

        for (int i = smallNum; !(i > bigNum); i++) {
            String currentNumber = Integer.toString(i);

            if (currentNumber.charAt(0) + currentNumber.charAt(2) + currentNumber.charAt(4) ==
                    currentNumber.charAt(1) + currentNumber.charAt(3) + currentNumber.charAt(5))
                System.out.printf("%s ", currentNumber);

        }
    }
}
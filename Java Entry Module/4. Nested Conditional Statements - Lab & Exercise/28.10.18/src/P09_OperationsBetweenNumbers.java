import java.util.Scanner;

public class P09_OperationsBetweenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numOne = Integer.parseInt(scanner.nextLine());
        int numTwo = Integer.parseInt(scanner.nextLine());
        String theOperator = scanner.nextLine();

        int result = 0;
        double division = 0;
        switch (theOperator) {
            case "+":
                result = numOne + numTwo;
                if (result % 2 == 0) {
                    System.out.printf("%d + %d = %d - even", numOne, numTwo, result);
                } else {
                    System.out.printf("%d + %d = %d - odd", numOne, numTwo, result);
                }
                break;
            case "-":
                result = numOne - numTwo;
                if (result % 2 == 0) {
                    System.out.printf("%d - %d = %d - even", numOne, numTwo, result);
                } else {
                    System.out.printf("%d - %d = %d - odd", numOne, numTwo, result);
                }
                break;
            case "*":
                result = numOne * numTwo;
                if (result % 2 == 0) {
                    System.out.printf("%d * %d = %d - even", numOne, numTwo, result);
                } else {
                    System.out.printf("%d * %d = %d - odd", numOne, numTwo, result);
                }
                break;
            case "/":
                if (numTwo == 0) {
                    System.out.printf("Cannot divide %d by zero", numOne);
                } else {
                    division = (double) numOne / (double) numTwo;
                    System.out.printf("%d / %d = %.2f", numOne, numTwo, division);
                }
                break;
            case "%":
                if (numTwo == 0) {
                    System.out.printf("Cannot divide %d by zero", numOne);
                } else {
                    result = numOne % numTwo;
                    System.out.printf("%d %% %d = %d", numOne, numTwo, result);
                }
                break;
        }
    }
}
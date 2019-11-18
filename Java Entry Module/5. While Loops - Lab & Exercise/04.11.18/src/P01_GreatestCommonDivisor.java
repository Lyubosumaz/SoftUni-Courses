import java.util.Scanner;

public class P01_GreatestCommonDivisor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numA = Integer.parseInt(scanner.nextLine());
        int numB = Integer.parseInt(scanner.nextLine());
        int result = 0;

        if (numB == 0) {
            result = numA;
        } else {
            while (numB != 0) {
                result = numB;
                numB = numA % numB;
                numA = result;
            }
        }
        System.out.println(result);
    }
}
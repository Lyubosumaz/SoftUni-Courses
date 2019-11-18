import java.util.Scanner;

public class P03_GreaterNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());

        if (num2 < num1) {
            System.out.println(num1);
        } else {
            System.out.println(num2);
        }
    }
}
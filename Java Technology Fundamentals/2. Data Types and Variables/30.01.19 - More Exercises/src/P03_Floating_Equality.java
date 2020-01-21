import java.util.Scanner;

public class P03_Floating_Equality {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double inputA = Double.parseDouble(scanner.nextLine());
        double inputB = Double.parseDouble(scanner.nextLine());
        double difference = Math.abs(inputA - inputB);
        if (difference > 0.000001) {
            System.out.println("False");
        } else {
            System.out.println("True");
        }
    }
}

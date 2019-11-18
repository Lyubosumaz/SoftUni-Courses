import java.util.Scanner;

public class P01_ShoppingTime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int restTime = Integer.parseInt(scanner.nextLine());
        double priceOfPeripheral = Double.parseDouble(scanner.nextLine());
        double priceOfProgram = Double.parseDouble(scanner.nextLine());
        double whiteFrappePrice = Double.parseDouble(scanner.nextLine());

        double totalSpend = (3*priceOfPeripheral) + (2*priceOfProgram) + whiteFrappePrice;
        int relaxTime = (((restTime - 5) - (3 * 2)) - (2 * 2));

        System.out.printf("%.2f\n%d", totalSpend, relaxTime);
    }
}

import java.util.Scanner;

public class P06_AccountBalance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberTransactions = Integer.parseInt(scanner.nextLine());
        int timesTransferred = 0;
        double total = 0.0;

        while (timesTransferred < numberTransactions) {
            double amount = Double.parseDouble(scanner.nextLine());
            if (amount < 0) {
                System.out.println("Invalid operation!");
                break;
            }
            total += amount;
            System.out.printf("Increase: %.2f\n", amount);
            timesTransferred++;
        }
        System.out.printf("Total: %.2f", total);
    }
}
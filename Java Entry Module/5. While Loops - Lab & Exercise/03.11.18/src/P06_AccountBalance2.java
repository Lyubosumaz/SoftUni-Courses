import java.util.Scanner;

public class P06_AccountBalance2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberTransactions = Integer.parseInt(scanner.nextLine());
        int timesTransferred = 0;
        double total = 0;

        while (true) {
            double amount = Double.parseDouble(scanner.nextLine());
            if (amount < 0) {
                System.out.println("Invalid operation!");
                break;
            }
            if (amount >= 0) {
                total += amount;
                System.out.printf("Increase: %.2f\n", amount);
                timesTransferred++;
            }
            if (timesTransferred == numberTransactions) {
                break;
            }
        }
        System.out.printf("Total: %.2f", total);
    }
}
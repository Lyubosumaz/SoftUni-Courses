import java.util.Scanner;

public class P04_Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double neededMoney = Double.parseDouble(scanner.nextLine());
        double availableMoney = Double.parseDouble(scanner.nextLine());

        double balanceMoney = 0 + availableMoney;
        int counter = 0;
        int days = 0;

        while (counter < 5 && neededMoney > balanceMoney) {
            String command = scanner.nextLine();
            double transaction = Double.parseDouble(scanner.nextLine());
            if (command.equals("save")) {
                balanceMoney += transaction;
                counter = 0;
            }

            if (command.equals("spend")) {
                if (balanceMoney < transaction) {
                    balanceMoney = 0;
                } else if (balanceMoney >= transaction) {
                    balanceMoney -= transaction;
                }
                counter++;
            }
            days++;
        }
        if (neededMoney <= balanceMoney) {
            System.out.printf("You saved the money for %d days.", days);
        } else {
            System.out.printf("You can't save the money.\n%d", days);
        }

    }
}
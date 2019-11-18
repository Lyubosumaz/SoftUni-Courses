import java.util.Scanner;

public class P06_Travelling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String destination = "";
        double neededMoney = 0;
        double moneyCounter = 0;
        while (true) {
            destination = scanner.nextLine();
            if (destination.equalsIgnoreCase("end")) {
                break;
            }
            neededMoney = Double.parseDouble(scanner.nextLine());
            moneyCounter = 0;
            while (!(moneyCounter >= neededMoney)) {
                double saveMoney = Double.parseDouble(scanner.nextLine());
                moneyCounter += saveMoney;
                if (moneyCounter >= neededMoney) {
                    System.out.printf("Going to %s!\n", destination);
                }
            }
        }
    }
}
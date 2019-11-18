import java.util.Scanner;

public class P03_ComputerRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String month = scanner.nextLine();
        int hoursSpent = Integer.parseInt(scanner.nextLine());
        int peopleGroup = Integer.parseInt(scanner.nextLine());
        String timeOfDay = scanner.nextLine();

        double pricePersonOneHour = 0;

        if (month.equalsIgnoreCase("march") || month.equalsIgnoreCase("april") || month.equalsIgnoreCase("may")) {
            switch (timeOfDay) {
                case "day":
                    pricePersonOneHour = 10.50;
                    break;
                case "night":
                    pricePersonOneHour = 8.40;
                    break;
            }
        } else if (month.equalsIgnoreCase("june") || month.equalsIgnoreCase("july") || month.equalsIgnoreCase("august")) {
            switch (timeOfDay) {
                case "day":
                    pricePersonOneHour = 12.60;
                    break;
                case "night":
                    pricePersonOneHour = 10.20;
                    break;
            }
        }
        if (peopleGroup >= 4) {
            pricePersonOneHour -= (pricePersonOneHour * 0.10);
        }
        if (hoursSpent >= 5) {
            pricePersonOneHour -= (pricePersonOneHour * 0.50);
        }

        double totalGroup = (pricePersonOneHour*hoursSpent) * peopleGroup;
        System.out.printf("Price per person for one hour: %.2f\nTotal cost of the visit: %.2f", pricePersonOneHour, totalGroup);
    }
}
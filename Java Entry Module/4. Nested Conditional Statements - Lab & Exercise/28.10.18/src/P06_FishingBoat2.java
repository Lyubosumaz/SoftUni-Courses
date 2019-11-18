import java.util.Scanner;

public class P06_FishingBoat2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int budget = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        int fishers = Integer.parseInt(scanner.nextLine());

        double amount = 0;
        switch (season) {
            case "Spring":
                amount = 3000;
                break;
            case "Summer":
            case "Autumn":
                amount = 4200;
                break;
            case "Winter":
                amount = 2600;
                break;
        }

        if (fishers <= 6) {
            amount = amount - (amount * 0.10);
        } else if (fishers >= 7 && fishers <= 11) {
            amount = amount - (amount * 0.15);
        } else {
            amount = amount - (amount * 0.25);
        }

        if ((fishers % 2 == 0) && (!season.equals("Autumn"))) {
            amount = amount - (amount * 0.05);
        }

        if ((double) budget >= amount) {
            System.out.printf("Yes! You have %.2f leva left.", Math.abs((double) budget - amount));
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", Math.abs(amount - (double) budget));
        }
    }
}
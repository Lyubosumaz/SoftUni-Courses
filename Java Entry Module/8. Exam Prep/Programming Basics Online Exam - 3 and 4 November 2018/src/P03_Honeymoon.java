import java.util.Scanner;

public class P03_Honeymoon {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        String chosenCity = scanner.nextLine();
        int numberNights = Integer.parseInt(scanner.nextLine());

        double sum = 0;
        switch (chosenCity) {
            case "Cairo":
                sum = (numberNights * (250 * 2)) + 600;
                break;
            case "Paris":
                sum = (numberNights * (150 * 2)) + 350;
                break;
            case "Lima":
                sum = (numberNights * (400 * 2)) + 850;
                break;
            case "New York":
                sum = (numberNights * (300 * 2)) + 650;
                break;
            case "Tokyo":
                sum = (numberNights * (350 * 2)) + 700;
                break;
        }


        double discount = 0.0;
        if (numberNights >= 1 && numberNights <= 4) {
            switch (chosenCity) {
                case "Cairo":
                case "New York":
                    discount = 0.03;
                    break;
            }
        } else if (numberNights >= 5 && numberNights <= 9) {
            switch (chosenCity) {
                case "Cairo":
                case "New York":
                    discount = 0.05;
                    break;
                case "Paris":
                    discount = 0.07;
                    break;
            }
        } else if (numberNights >= 10 && numberNights <= 24) {
            switch (chosenCity) {
                case "Cairo":
                    discount = 0.10;
                    break;
                case "Paris":
                case "New York":
                case "Tokyo":
                    discount = 0.12;
                    break;
            }
        } else if (numberNights >= 25 && numberNights <= 49) {
            switch (chosenCity) {
                case "Tokyo":
                case "Cairo":
                    discount = 0.17;
                    break;
                case "New York":
                case "Lima":
                    discount = 0.19;
                    break;
                case "Paris":
                    discount = 0.22;
                    break;
            }
        } else if (numberNights >= 50) {
            switch (chosenCity) {
                case "Cairo":
                case "Paris":
                case "New York":
                case "Lima":
                case "Tokyo":
                    discount = 0.30;
                    break;
            }
        }


        double finalPrice = sum - (sum * discount);
        double diff = budget - finalPrice;
        if (budget >= finalPrice) {
            System.out.printf("Yes! You have %.2f leva left.", diff);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", Math.abs(diff));
        }
    }
}
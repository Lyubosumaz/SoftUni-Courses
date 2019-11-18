import java.util.Scanner;

public class P03_WeddingInvestment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String years = scanner.nextLine();
        String contract = scanner.nextLine();
        String dessert = scanner.nextLine();
        int monthsNumber = Integer.parseInt(scanner.nextLine());

        double monthPrice = 0.0;
        if (years.equalsIgnoreCase("one")) {
            switch (contract) {
                case "Small":
                    monthPrice = 9.98;
                    break;
                case "Middle":
                    monthPrice = 18.99;
                    break;
                case "Large":
                    monthPrice = 25.98;
                    break;
                case "ExtraLarge":
                    monthPrice = 35.99;
                    break;
            }
        }
        if (years.equalsIgnoreCase("two")) {
            switch (contract) {
                case "Small":
                    monthPrice = 8.58;
                    break;
                case "Middle":
                    monthPrice = 17.09;
                    break;
                case "Large":
                    monthPrice = 23.59;
                    break;
                case "ExtraLarge":
                    monthPrice = 31.79;
                    break;
            }
        }
        if (dessert.equalsIgnoreCase("yes")) {
            if (monthPrice > 30) {
                monthPrice += 3.85;
            }
            if (monthPrice > 10 && monthPrice <= 30) {
                monthPrice += 4.35;
            }
            if (monthPrice <= 10) {
                monthPrice += 5.50;
            }
        }
        if (years.equalsIgnoreCase("two")) {
            monthPrice -= (monthPrice* 3.75)/100;
        }
        System.out.printf("%.2f lv.", monthPrice * monthsNumber);
    }
}
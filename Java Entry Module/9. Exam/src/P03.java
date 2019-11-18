import java.util.Scanner;

public class P03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String fruit = scanner.nextLine();
        String size = scanner.nextLine();
        int ordered = Integer.parseInt(scanner.nextLine());

        double packagePrice = 0.0;
        if (size.equalsIgnoreCase("small")) {
            switch (fruit) {
                case "Watermelon":
                    packagePrice = (2 * 56.00) * ordered;
                    break;
                case "Mango":
                    packagePrice = (2 * 36.66) * ordered;
                    break;
                case "Pineapple":
                    packagePrice = (2 * 42.10) * ordered;
                    break;
                case "Raspberry":
                    packagePrice = (2 * 20.00) * ordered;
                    break;
            }
        }
        if (size.equalsIgnoreCase("big")) {
            switch (fruit) {
                case "Watermelon":
                    packagePrice = (5 * 28.70) * ordered;
                    break;
                case "Mango":
                    packagePrice = (5 * 19.60) * ordered;
                    break;
                case "Pineapple":
                    packagePrice = (5 * 24.80) * ordered;
                    break;
                case "Raspberry":
                    packagePrice = (5 * 15.20) * ordered;
                    break;
            }
        }
        if (packagePrice >= 400 && packagePrice <= 1000) {
            packagePrice -= packagePrice * 0.15;
        }
        if (packagePrice > 1000) {
            packagePrice -= packagePrice * 0.50;
        }
        System.out.printf("%.2f lv.", packagePrice);
    }
}
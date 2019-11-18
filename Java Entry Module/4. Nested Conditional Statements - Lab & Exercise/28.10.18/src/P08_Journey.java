import java.util.Scanner;

public class P08_Journey {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();

        double expenses = -1;
        if (season.equals("summer")) {
            if (budget <= 100) {
                expenses = budget * 0.30;
                System.out.printf("Somewhere in Bulgaria\nCamp - %.2f", expenses);
            } else if (budget <= 1000) {
                expenses = budget * 0.40;
                System.out.printf("Somewhere in Balkans\nCamp - %.2f", expenses);
            } else if (budget > 1000) {
                expenses = budget * 0.90;
                System.out.printf("Somewhere in Europe\nHotel - %.2f", expenses);
            }
        }
        if (season.equals("winter")) {
            if (budget <= 100) {
                expenses = budget * 0.70;
                System.out.printf("Somewhere in Bulgaria\nHotel - %.2f", expenses);
            } else if (budget <= 1000) {
                expenses = budget * 0.80;
                System.out.printf("Somewhere in Balkans\nHotel - %.2f", expenses);
            } else if (budget > 1000) {
                expenses = budget * 0.90;
                System.out.printf("Somewhere in Europe\nHotel - %.2f", expenses);
            }
        }
    }
}
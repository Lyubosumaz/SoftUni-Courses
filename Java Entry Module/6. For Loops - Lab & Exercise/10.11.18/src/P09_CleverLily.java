import java.util.Scanner;

public class P09_CleverLily {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int age = Integer.parseInt(scanner.nextLine());
        double goal = Double.parseDouble(scanner.nextLine());
        int toysPrice = Integer.parseInt(scanner.nextLine());

        double moneyGift = 10;
        int toys = 0;
        double money = 0;

        for (int year = 1; year <= age; year++) {
            if (year % 2 > 0) {
                toys++;
            } else {
                money += moneyGift - 1;
                moneyGift += 10;
            }
        }
        int toysMoney = toys * toysPrice;
        double total = money + toysMoney;
        double diff = Math.abs(goal - total);

        if (total < goal) {
            System.out.printf("No! %.2f", diff);
        } else {
            System.out.printf("Yes! %.2f", diff);
        }
    }
}
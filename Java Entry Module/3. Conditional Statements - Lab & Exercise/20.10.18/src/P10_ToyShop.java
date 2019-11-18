import java.util.Scanner;

public class P10_ToyShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //BGN
        double puzzle = 2.60;
        double doll = 3.00;
        double teddyBear = 4.10;
        double minion = 8.20;
        double truck = 2.00;
        //console
        double dream = Double.parseDouble(scanner.nextLine());
        int numPuzzles = Integer.parseInt(scanner.nextLine());
        int numDolls = Integer.parseInt(scanner.nextLine());
        int numBears = Integer.parseInt(scanner.nextLine());
        int numMinions = Integer.parseInt(scanner.nextLine());
        int numTrucks = Integer.parseInt(scanner.nextLine());

        double sells = (numPuzzles * puzzle) + (numDolls * doll) + (numBears * teddyBear) + (numMinions * minion) + (numTrucks * truck);
        int order = numPuzzles + numDolls + numBears + numMinions + numTrucks;

        if (order >= 50) {
            double discount = (sells * 25) / 100;
            double endPrice = sells - discount;
            double rent = (endPrice * 10) / 100;
            double profit = endPrice - rent;
            double myMoney = Math.max(dream, profit) - Math.min(dream, profit);
            if (profit >= dream) {
                System.out.printf("Yes! %.2f lv left.", myMoney);
            } else {
                System.out.printf("Not enough money! %.2f lv needed.", myMoney);
            }
        } else {
            double rent = (sells * 10) / 100;
            double profit = sells - rent;
            double myMoney = Math.max(dream, profit) - Math.min(dream, profit);
            if (profit >= dream) {
                System.out.printf("Yes! %.2f lv left.", myMoney);
            } else {
                System.out.printf("Not enough money! %.2f lv needed.", myMoney);
            }
        }
    }
}
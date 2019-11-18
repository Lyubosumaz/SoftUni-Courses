import java.util.Scanner;

public class P05_NewHouse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //The Flowers Price
        double roses = 5.00;
        double dahlias = 3.80;
        double tulips = 2.80;
        double narcissus = 3.00;
        double gladiolus = 2.50;

        String type = scanner.nextLine();
        int amount = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());

        double costs = -1;

        if (type.equals("Roses") && amount > 80) {
            double total = amount * roses;
            costs = total - (total * 0.10);
        } else if (type.equals("Roses")) {
            costs = amount * roses;
        }
        if (type.equals("Dahlias") && amount > 90) {
            double total = amount * dahlias;
            costs = total - (total * 0.15);
        } else if (type.equals("Dahlias")) {
            costs = amount * dahlias;
        }
        if (type.equals("Tulips") && amount > 80) {
            double total = amount * tulips;
            costs = total - (total * 0.15);
        } else if (type.equals("Tulips")) {
            costs = amount * tulips;
        }
        if (type.equals("Narcissus") && amount < 120) {
            double total = amount * narcissus;
            costs = total + (total * 0.15);
        } else if (type.equals("Narcissus")) {
            costs = amount * narcissus;
        }
        if (type.equals("Gladiolus") && amount < 80) {
            double total = amount * gladiolus;
            costs = total + (total * 0.20);
        } else if (type.equals("Gladiolus")) {
            costs = amount * gladiolus;
        }
        //Output
        if (budget >= costs) {
            System.out.printf("Hey, you have a great garden with %d %s and %.2f leva left.", amount, type, budget - costs);
        } else if (budget < costs) {
            System.out.printf("Not enough money, you need %.2f leva more.", Math.abs(budget - costs));
        }
    }
}
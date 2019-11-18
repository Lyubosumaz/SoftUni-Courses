import java.util.Scanner;

public class P06_Charity {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //цени
        double priceCake = 45;
        double priceWaffle = 5.80;
        double pricePancake = 3.20;

        int days = Integer.parseInt(scanner.nextLine());
        int chefs = Integer.parseInt(scanner.nextLine());

        int cakes = Integer.parseInt(scanner.nextLine());
        int waffles = Integer.parseInt(scanner.nextLine());
        int pancakes = Integer.parseInt(scanner.nextLine());

        double onedayis = ((cakes * priceCake) + (waffles * priceWaffle) + (pancakes * pricePancake)) * chefs;
        double profit = onedayis * days;
        double total = profit - (profit / 8);

        System.out.printf("%.2f", total);
    }
}
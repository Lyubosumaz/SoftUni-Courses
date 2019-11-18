import java.util.Scanner;

public class P02_BeerAndChips {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        double budget = Double.parseDouble(scanner.nextLine());
        int beerWants = Integer.parseInt(scanner.nextLine());
        int chipsWants = Integer.parseInt(scanner.nextLine());

        double oneBeer = 1.20;
        double totalBeers = oneBeer * beerWants;
        double totalChips = Math.ceil((totalBeers * 0.45) * chipsWants);
        double result = totalBeers + totalChips;

        if (budget >= result) {
            System.out.printf("%s bought a snack and has %.2f leva left.", name, Math.abs(result - budget));

        } else {
            System.out.printf("%s needs %.2f more leva!", name, Math.abs(result - budget));
        }
    }
}
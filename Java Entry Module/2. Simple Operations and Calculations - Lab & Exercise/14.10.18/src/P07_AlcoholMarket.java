import java.util.Scanner;

public class P07_AlcoholMarket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double whiskeyLv = Double.parseDouble(scanner.nextLine());
        double beerLiter = Double.parseDouble(scanner.nextLine());
        double wineLiter = Double.parseDouble(scanner.nextLine());
        double rakiaLiter = Double.parseDouble(scanner.nextLine());
        double whiskeyLiter = Double.parseDouble(scanner.nextLine());

        double rakiaLv = whiskeyLv / 2;
        double wineLv = rakiaLv - ((rakiaLv * 40) / 100);
        double beerLv = rakiaLv - ((rakiaLv * 80) / 100);

        double whiskeyTotal = whiskeyLv * whiskeyLiter;
        double beerTotal = beerLv * beerLiter;
        double wineTotal = wineLv * wineLiter;
        double rakiaTotal = rakiaLv * rakiaLiter;

        double party = whiskeyTotal + beerTotal + wineTotal + rakiaTotal;
        System.out.printf("%.2f", party);
    }
}
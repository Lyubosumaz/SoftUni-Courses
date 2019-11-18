import java.util.Scanner;

public class P01_WeddingTime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double whiskeyPrice = Double.parseDouble(scanner.nextLine());
        double litersWater = Double.parseDouble(scanner.nextLine());
        double litersWine = Double.parseDouble(scanner.nextLine());
        double litersChampagne = Double.parseDouble(scanner.nextLine());
        double litersWhiskey = Double.parseDouble(scanner.nextLine());

        double champagnePrice = whiskeyPrice * 0.50;
        double winePrice = champagnePrice * 0.40;
        double waterPrice = champagnePrice * 0.10;

        double totalWhiskey = litersWhiskey * whiskeyPrice;
        double totalWater = litersWater * waterPrice;
        double totalWine = litersWine * winePrice;
        double totalChampagne = litersChampagne * champagnePrice;

        double sum = totalWhiskey + totalWater + totalWine + totalChampagne;
        System.out.printf("%.2f", sum);
    }
}
import java.util.Scanner;

public class P05_ComputerFirm {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfComputers = Integer.parseInt(scanner.nextLine());
        double totalSales = 0;
        int ratingCount = 0;
        int counter = 0;
        while (counter < numberOfComputers) {
            int currentNumber = 0;
            int sales = 0;
            int rating = 0;
            int salesAndRating = Integer.parseInt(scanner.nextLine());
            currentNumber = salesAndRating;
            rating = currentNumber % 10;
            ratingCount += rating;
            sales = currentNumber / 10;
            switch (rating) {
                case 2:
                    totalSales += sales * 0.0;
                    break;
                case 3:
                    totalSales += sales * 0.50;
                    break;
                case 4:
                    totalSales += sales * 0.70;
                    break;
                case 5:
                    totalSales += sales * 0.85;
                    break;
                case 6:
                    totalSales += sales * 1.00;
                    break;
            }
            counter++;
        }
        double averageRating = (double) ratingCount / numberOfComputers;
        System.out.printf("%.2f\n%.2f", totalSales, averageRating);
    }
}

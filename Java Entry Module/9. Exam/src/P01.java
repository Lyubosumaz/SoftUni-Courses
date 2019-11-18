import java.util.Scanner;

public class P01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int pens = Integer.parseInt(scanner.nextLine());
        int markers = Integer.parseInt(scanner.nextLine());
        double boardCleaner = Double.parseDouble(scanner.nextLine());
        int percentDiscount = Integer.parseInt(scanner.nextLine());

        double totalPens = pens * 5.80;
        double totalMarkers = markers * 7.20;
        double totalBoardCleaner = boardCleaner * 1.20;
        double totalAll = totalPens + totalMarkers + totalBoardCleaner;
        double result = totalAll - ((totalAll * percentDiscount) / 100);

        System.out.printf("%.3f", result);
    }
}
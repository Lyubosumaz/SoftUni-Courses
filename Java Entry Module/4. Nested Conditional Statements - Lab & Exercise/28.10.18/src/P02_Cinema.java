import java.util.Scanner;

public class P02_Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double premiere = 12.00;
        double normal = 7.50;
        double discount = 5.00;

        String typeProjection = scanner.nextLine();
        double rows = Double.parseDouble(scanner.nextLine());
        double columns = Double.parseDouble(scanner.nextLine());

        double profit = 0;

        if (typeProjection.equals("Premiere")) {
            profit = rows * columns * premiere;
        } else if (typeProjection.equals("Normal")) {
            profit = rows * columns * normal;
        } else if (typeProjection.equals("Discount")) {
            profit = rows * columns * discount;
        }
        System.out.printf("%.2f leva", profit);
    }
}
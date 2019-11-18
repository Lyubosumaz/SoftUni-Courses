import java.util.Scanner;

public class P04_TailoringWorkshop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberTables = Integer.parseInt(scanner.nextLine());
        double lengthTables = Double.parseDouble(scanner.nextLine());
        double widthTables = Double.parseDouble(scanner.nextLine());

        double rectangle = (numberTables * (lengthTables + 2 * 0.30) * (widthTables + 2 * 0.30));
        double square = (numberTables * (lengthTables / 2) * (lengthTables / 2));

        double totalUSD = rectangle * 7 + square * 9;
        double totalBGN = totalUSD * 1.85;

        System.out.printf("%.2f" + " USD" + "\n", totalUSD);
        System.out.printf("%.2f" + " BGN" + "\n", totalBGN);
    }
}
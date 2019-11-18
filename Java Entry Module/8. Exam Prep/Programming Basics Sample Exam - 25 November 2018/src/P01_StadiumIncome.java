import java.util.Scanner;

public class P01_StadiumIncome {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sectors = Integer.parseInt(scanner.nextLine());
        int stadiumSeats = Integer.parseInt(scanner.nextLine());
        double ticketPrice = Double.parseDouble(scanner.nextLine());

        double totalIncome = 0;
        double charity = 0;

        totalIncome = stadiumSeats * ticketPrice;
        charity = (totalIncome - ((totalIncome / sectors) * 0.75)) / 8;

        System.out.printf("Total income - %.2f BGN\nMoney for charity - %.2f BGN", totalIncome, charity);
    }
}
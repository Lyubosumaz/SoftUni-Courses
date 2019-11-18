import java.util.Scanner;

public class P01_TripToWorldCup {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double ticketPriceGoing = Double.parseDouble(scanner.nextLine());
        double ticketPriceReturn = Double.parseDouble(scanner.nextLine());
        double ticketPricePerMatch = Double.parseDouble(scanner.nextLine());
        int numberOfMatches = Integer.parseInt(scanner.nextLine());
        int percentDiscount = Integer.parseInt(scanner.nextLine());

        double planeTickets = 6 * (ticketPriceGoing + ticketPriceReturn);
        double totalDiscount = planeTickets * percentDiscount / 100;
        double totalPlaneTickets = planeTickets - totalDiscount;

        double priceOfAllMatches = 6 * (numberOfMatches * ticketPricePerMatch);

        double totalResult = totalPlaneTickets + priceOfAllMatches;
        double totalPerPerson = totalResult / 6;

        System.out.printf("Total sum: %.2f lv.\nEach friend has to pay %.2f lv.", totalResult, totalPerPerson);
    }
}
import java.util.Scanner;

public class P10_MatchTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Ticket Type
        double vipTicket = 499.99;
        double normalTicket = 249.99;

        double budget = Double.parseDouble(scanner.nextLine());
        String typeTicket = scanner.nextLine();
        int group = Integer.parseInt(scanner.nextLine());

        double transportExpenses = 0;

        double result = -1;
        if (group >= 1 && group <= 4) {
            transportExpenses = budget - (budget * 0.75);
        } else if (group >= 5 && group <= 9) {
            transportExpenses = budget - (budget * 0.60);
        } else if (group >= 10 && group <= 24) {
            transportExpenses = budget - (budget * 0.50);
        } else if (group >= 25 && group <= 49) {
            transportExpenses = budget - (budget * 0.40);
        } else if (group >= 50) {
            transportExpenses = budget - (budget * 0.25);
        }

        if (typeTicket.equals("VIP")) {
            result = transportExpenses - (group * vipTicket);
        } else if (typeTicket.equals("Normal")) {
            result = transportExpenses - (group * normalTicket);
        }

        if (result >= 0) {
            System.out.printf("Yes! You have %.2f leva left.", result);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", Math.abs(result));
        }
    }
}
import java.util.Scanner;

public class P07_TradeCommissions {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //Trade Commissions* Sofia
        double sofiaSellsUnder500 = 0.05;
        double sofiaSellsUnder1000 = 0.07;
        double sofiaSellsUnder10k = 0.08;
        double sofiaSellsAbove10k = 0.12;
        //Trade Commissions* Varna
        double varnaSellsUnder500 = 0.045;
        double varnaSellsUnder1000 = 0.075;
        double varnaSellsUnder10k = 0.10;
        double varnaSellsAbove10k = 0.13;
        //Trade Commissions* Plovdiv
        double plovdivSellsUnder500 = 0.055;
        double plovdivSellsUnder1000 = 0.08;
        double plovdivSellsUnder10k = 0.12;
        double plovdivSellsAbove10k = 0.145;

        String city = scanner.nextLine();
        double sells = Double.parseDouble(scanner.nextLine());

        double commissions = -1;

        if (city.equals("Sofia")) {
            if (sells >= 0 && sells <= 500) {
                commissions = sells * sofiaSellsUnder500;
            } else if (sells > 500 && sells <= 1000) {
                commissions = sells * sofiaSellsUnder1000;
            } else if (sells > 1000 && sells <= 10000) {
                commissions = sells * sofiaSellsUnder10k;
            } else if (sells > 10000) {
                commissions = sells * sofiaSellsAbove10k;
            }
        } else if (city.equals("Varna")) {
            if (sells >= 0 && sells <= 500) {
                commissions = sells * varnaSellsUnder500;
            } else if (sells > 500 && sells <= 1000) {
                commissions = sells * varnaSellsUnder1000;
            } else if (sells > 1000 && sells <= 10000) {
                commissions = sells * varnaSellsUnder10k;
            } else if (sells > 10000) {
                commissions = sells * varnaSellsAbove10k;
            }
        } else if (city.equals("Plovdiv")) {
            if (sells >= 0 && sells <= 500) {
                commissions = sells * plovdivSellsUnder500;
            } else if (sells > 500 && sells <= 1000) {
                commissions = sells * plovdivSellsUnder1000;
            } else if (sells > 1000 && sells <= 10000) {
                commissions = sells * plovdivSellsUnder10k;
            } else if (sells > 10000) {
                commissions = sells * plovdivSellsAbove10k;
            }
        }
        if (commissions == -1) {
            System.out.println("error");
        } else {
            System.out.printf("%.2f", commissions);
        }
    }
}
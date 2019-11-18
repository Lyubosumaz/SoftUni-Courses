import java.util.Scanner;

public class P02_MaidenParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double moneyForMaidenParty = Double.parseDouble(scanner.nextLine());
        int loveMessages = Integer.parseInt(scanner.nextLine());
        int waxRoses = Integer.parseInt(scanner.nextLine());
        int keyChains = Integer.parseInt(scanner.nextLine());
        int caricature = Integer.parseInt(scanner.nextLine());
        int luckSurprise = Integer.parseInt(scanner.nextLine());


        double totalSum = (loveMessages * 0.60) + (waxRoses * 7.20) + (keyChains * 3.60) + (caricature * 18.20) + (luckSurprise * 22);
        int orderedItems = loveMessages + waxRoses + keyChains + caricature + luckSurprise;
        if (orderedItems >= 25) {
            totalSum -= totalSum * 0.35;
        }
        double hosting = totalSum * 0.10;
        double profit = totalSum - hosting;
        if (profit >= moneyForMaidenParty) {
            System.out.printf("Yes! %.2f lv left.", profit - moneyForMaidenParty);
        } else {
            System.out.printf("Not enough money! %.2f lv needed.", Math.abs(profit - moneyForMaidenParty));
        }
    }
}
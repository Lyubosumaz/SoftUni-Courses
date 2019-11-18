import java.util.Scanner;

public class P02_WeddingParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int guests = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());
        int perPerson = 20;

        double spend = guests * perPerson;
        double diff = budget - spend;
        double fireworks = diff * 0.40;
        double donation = diff - fireworks;
        if (spend <= budget) {
            System.out.printf("Yes! %.0f lv are for fireworks and %.0f lv are for donation.", fireworks, donation);
        } else {
            System.out.printf("They won't have enough money to pay the covert. They will need %.0f lv more.", Math.abs(diff));
        }
    }
}
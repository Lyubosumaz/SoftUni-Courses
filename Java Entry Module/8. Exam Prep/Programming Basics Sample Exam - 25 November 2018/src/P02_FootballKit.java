import java.util.Scanner;

public class P02_FootballKit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double shirtPrice = Double.parseDouble(scanner.nextLine());
        double neededSpends = Double.parseDouble(scanner.nextLine());

        double shortsCost = shirtPrice * 0.75;
        double socksCost = shortsCost * 0.20;
        double buttonsCost = (shirtPrice + shortsCost) * 2;
        double total = shirtPrice + shortsCost + socksCost + buttonsCost;
        double hisDiscount = total - (total * 0.15);


        if (hisDiscount >= neededSpends) {
            System.out.printf("Yes, he will earn the world-cup replica ball!\nHis sum is %.2f lv.", hisDiscount);
        } else {
            double diff = Math.abs(neededSpends - hisDiscount);
            System.out.printf("No, he will not earn the world-cup replica ball.\nHe needs %.2f lv. more.", diff);
        }
    }
}

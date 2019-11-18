import java.util.Scanner;

public class P05_FanShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int budget = Integer.parseInt(scanner.nextLine());
        int numberItems = Integer.parseInt(scanner.nextLine());

        int resultMoney = 0;
        int counter = 0;
        int diff = 0;

        for (int i = 0; i < numberItems; i++) {
            String item = scanner.nextLine();
            switch (item) {
                case "hoodie":
                    resultMoney += 30;
                    break;
                case "keychain":
                    resultMoney += 4;
                    break;
                case "T-shirt":
                    resultMoney += 20;
                    break;
                case "flag":
                    resultMoney += 15;
                    break;
                case "sticker":
                    resultMoney += 1;
                    break;
            }
            counter++;
        }
        diff = budget - resultMoney;
        if (budget >= resultMoney) {
            System.out.printf("You bought %d items and left with %d lv.", counter, Math.abs(diff));
        } else {
            System.out.printf("Not enough money, you need %d more lv.", Math.abs(diff));

        }
    }
}
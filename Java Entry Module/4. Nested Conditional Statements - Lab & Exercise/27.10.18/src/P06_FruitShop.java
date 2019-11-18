import java.util.Scanner;

public class P06_FruitShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //Work Week
        double priceBanana = 2.50;
        double priceApple = 1.20;
        double priceOrange = 0.85;
        double priceGrapefruit = 1.45;
        double priceKiwi = 2.70;
        double pricePineapple = 5.50;
        double priceGrapes = 3.85;
        //Weekend
        double weekendBanana = 2.70;
        double weekendApple = 1.25;
        double weekendOrange = 0.90;
        double weekendGrapefruit = 1.60;
        double weekendKiwi = 3.00;
        double weekendPineapple = 5.60;
        double weekendGrapes = 4.20;

        String product = scanner.nextLine();
        String day = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());

        double thePrice = -1;


        if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
            if (product.equals("banana")) {
                thePrice = priceBanana * quantity;
            } else if (product.equals("apple")) {
                thePrice = priceApple * quantity;
            } else if (product.equals("orange")) {
                thePrice = priceOrange * quantity;
            } else if (product.equals("grapefruit")) {
                thePrice = priceGrapefruit * quantity;
            } else if (product.equals("kiwi")) {
                thePrice = priceKiwi * quantity;
            } else if (product.equals("pineapple")) {
                thePrice = pricePineapple * quantity;
            } else if (product.equals("grapes")) {
                thePrice = priceGrapes * quantity;
            }
        } else if (day.equals("Saturday") || day.equals("Sunday")) {
            if (product.equals("banana")) {
                thePrice = weekendBanana * quantity;
            } else if (product.equals("apple")) {
                thePrice = weekendApple * quantity;
            } else if (product.equals("orange")) {
                thePrice = weekendOrange * quantity;
            } else if (product.equals("grapefruit")) {
                thePrice = weekendGrapefruit * quantity;
            } else if (product.equals("kiwi")) {
                thePrice = weekendKiwi * quantity;
            } else if (product.equals("pineapple")) {
                thePrice = weekendPineapple * quantity;
            } else if (product.equals("grapes")) {
                thePrice = weekendGrapes * quantity;
            }
        }
        if (thePrice == -1) {
            System.out.println("error");
        } else {
            System.out.println(thePrice);
        }
    }
}
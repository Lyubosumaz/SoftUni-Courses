import java.util.Scanner;

class P02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //price in Sofia
        double coffeeSofia = 0.50;
        double waterSofia = 0.80;
        double beerSofia = 1.20;
        double sweetsSofia = 1.45;
        double peanutsSofia = 1.60;

        //price in Plovdiv
        double coffeePlovdiv = 0.40;
        double waterPlovdiv = 0.70;
        double beerPlovdiv = 1.15;
        double sweetsPlovdiv = 1.30;
        double peanutsPlovdiv = 1.50;

        //price in Varna
        double coffeeVarna = 0.45;
        double waterVarna = 0.70;
        double beerVarna = 1.10;
        double sweetsVarna = 1.35;
        double peanutsVarna = 1.55;

        String product = scanner.nextLine();
        String city = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());

        double totalPrice = 0;

        if (city.equals("Sofia")) {
            if (product.equals("coffee")) {
                totalPrice = coffeeSofia * quantity;
            } else if (product.equals("water")) {
                totalPrice = waterSofia * quantity;
            } else if (product.equals("beer")) {
                totalPrice = beerSofia * quantity;
            } else if (product.equals("sweets")) {
                totalPrice = sweetsSofia * quantity;
            } else if (product.equals("peanuts")) {
                totalPrice = peanutsSofia * quantity;
            }
        }
        if (city.equals("Plovdiv")) {
            if (product.equals("coffee")) {
                totalPrice = coffeePlovdiv * quantity;
            } else if (product.equals("water")) {
                totalPrice = waterPlovdiv * quantity;
            } else if (product.equals("beer")) {
                totalPrice = beerPlovdiv * quantity;
            } else if (product.equals("sweets")) {
                totalPrice = sweetsPlovdiv * quantity;
            } else if (product.equals("peanuts")) {
                totalPrice = peanutsPlovdiv * quantity;
            }
        }
        if (city.equals("Varna")) {
            if (product.equals("coffee")) {
                totalPrice = coffeeVarna * quantity;
            } else if (product.equals("water")) {
                totalPrice = waterVarna * quantity;
            } else if (product.equals("beer")) {
                totalPrice = beerVarna * quantity;
            } else if (product.equals("sweets")) {
                totalPrice = sweetsVarna * quantity;
            } else if (product.equals("peanuts")) {
                totalPrice = peanutsVarna * quantity;
            }
        }
        System.out.println(totalPrice);
    }
}
import java.util.Scanner;

public class The_Hunting_Games_P01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int days = Integer.parseInt(scanner.nextLine());
        int players = Integer.parseInt(scanner.nextLine());
        double energy = Double.parseDouble(scanner.nextLine());

        double onePersonWater = Double.parseDouble(scanner.nextLine());
        double onePersonFood = Double.parseDouble(scanner.nextLine());

        double water = 0;
        double food = 0;

        if (players == 0 && onePersonWater == 0 && onePersonFood == 0) {
            water = days;
            food = days;
        } else if (players == 0 && onePersonWater == 0) {
            water = days;
            food = days * onePersonFood;
        } else if (players == 0 && onePersonFood == 0) {
            water = days * onePersonWater;
            food = days;
        } else {
            water = days * players * onePersonWater;
            food = days * players * onePersonFood;
        }

        int secondDay = 0;
        int thirdDay = 0;

        for (
                int i = 0;
                i < days; i++) {

            secondDay++;
            thirdDay++;

            if (energy < 1) {
                break;
            } else {
                double woodChopping = Double.parseDouble(scanner.nextLine());
                energy -= woodChopping;
            }

            if (secondDay == 2) {

                water = water - ((water * 30) / 100);
                energy = energy + ((energy * 5) / 100);

                secondDay = 0;
            }

            if (thirdDay == 3) {

                food = food - (food / players);
                energy = energy + ((energy * 10) / 100);

                thirdDay = 0;
            }

        }
        if (energy < 1) {
            System.out.printf("You will run out of energy. You will be left with %.2f food and %.2f water.", food, water);
        } else {
            System.out.printf("You are ready for the quest. You will be left with - %.2f energy!", energy);
        }
    }
}


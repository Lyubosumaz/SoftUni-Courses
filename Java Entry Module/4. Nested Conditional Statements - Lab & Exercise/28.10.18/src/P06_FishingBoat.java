//-60/100-
import java.util.Scanner;

public class P06_FishingBoat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int lvSpring = 3000;
        int lvSummer = 4200;
        int lvAutumn = 4200;
        int lvWinter = 2600;

        int budget = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        int fishers = Integer.parseInt(scanner.nextLine());

        double discount = -1;
        double oddEven = fishers % 2;
        //Spring = 3000lv
        //(1/6 is +10%)(7/11 is +15%)(>12 is +25%)(even num is +5%)
        if (season.equals("Spring") && oddEven == 0) {
            if (fishers >= 1 && fishers <= 6) {
                discount = lvSpring - (lvSpring * 0.15);
            } else if (fishers >= 7 && fishers <= 11) {
                discount = lvSpring - (lvSpring * 0.20);
            } else if (fishers >= 12) {
                discount = lvSpring - (lvSpring * 0.30);
            }
        } else if (season.equals("Spring") && oddEven > 0) {
            if (fishers >= 1 && fishers <= 6) {
                discount = lvSpring - (lvSpring * 0.10);
            } else if (fishers >= 7 && fishers <= 11) {
                discount = lvSpring - (lvSpring * 0.15);
            } else if (fishers >= 12) {
                discount = lvSpring - (lvSpring * 0.25);
            }
        }
        //Summer = 4200lv
        //(1/6 is +10%)(7/11 is +15%)(>12 is +25%)(even num is +5%)
        if (season.equals("Summer") && oddEven == 0) {
            if (fishers >= 1 && fishers <= 6) {
                discount = lvSummer - (lvSummer * 0.15);
            } else if (fishers >= 7 && fishers <= 11) {
                discount = lvSummer - (lvSummer * 0.20);
            } else if (fishers >= 12) {
                discount = lvSummer - (lvSummer * 0.30);
            }
        } else if (season.equals("Summer") && oddEven > 0) {
            if (fishers >= 1 && fishers <= 6) {
                discount = lvSummer - (lvSummer * 0.10);
            } else if (fishers >= 7 && fishers <= 11) {
                discount = lvSummer - (lvSummer * 0.15);
            } else if (fishers >= 12) {
                discount = lvSummer - (lvSummer * 0.25);
            }
        }
        //Autumn = 4200lv
        // (1/6 is +10%)(7/11 is +15%)(>12 is +25%)(odd/even num is +0%)!
        if (season.equals("Autumn")) {
            if (fishers >= 1 && fishers <= 6) {
                discount = lvAutumn - (lvAutumn * 0.10);
            } else if (fishers >= 7 && fishers <= 11) {
                discount = lvAutumn - (lvAutumn * 0.15);
            } else if (fishers >= 12) {
                discount = lvAutumn - (lvAutumn * 0.25);
            }
        }
        //Winter = 2600lv
        //(1/6 is +10%)(7/11 is +15%)(>12 is +25%)(even num is +5%)
        if (season.equals("Winter") && oddEven == 0) {
            if (fishers >= 1 && fishers <= 6) {
                discount = lvWinter - (lvWinter * 0.15);
            } else if (fishers >= 7 && fishers <= 11) {
                discount = lvWinter - (lvWinter * 0.20);
            } else if (fishers >= 12) {
                discount = lvWinter - (lvWinter * 0.30);
            }
        } else if (season.equals("Winter") && oddEven > 0) {
            if (fishers >= 1 && fishers <= 6) {
                discount = lvWinter - (lvWinter * 0.10);
            } else if (fishers >= 7 && fishers <= 11) {
                discount = lvWinter - (lvWinter * 0.15);
            } else if (fishers >= 12) {
                discount = lvWinter - (lvWinter * 0.25);
            }

        }
        if (budget>=discount){
            System.out.printf("Yes! You have %.2f leva left.", Math.abs(budget-discount));
        }else if (budget<discount){
            System.out.printf("Not enough money! You need %.2f leva.", Math.abs(discount-budget));
        }
    }
}
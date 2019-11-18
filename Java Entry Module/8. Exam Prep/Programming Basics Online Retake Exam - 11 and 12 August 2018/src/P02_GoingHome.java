import java.util.Scanner;

public class P02_GoingHome {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int kilometers = Integer.parseInt(scanner.nextLine());
        int gasolineConsumption = Integer.parseInt(scanner.nextLine());
        double gasolinePrice = Double.parseDouble(scanner.nextLine());
        int tournamentMoney = Integer.parseInt(scanner.nextLine());

        double carFuel = ((double) kilometers * (double) gasolineConsumption) / 100;
        double totalConsumption = carFuel * gasolinePrice;
        double diffWonCost = tournamentMoney - totalConsumption;
        double splitMoney = (double) tournamentMoney / 5;

        if (diffWonCost >= 0) {
            System.out.printf("You can go home. %.2f money left.", Math.abs(diffWonCost));
        } else {
            System.out.printf("Sorry, you cannot go home. Each will receive %.2f money.", splitMoney);
        }
    }
}

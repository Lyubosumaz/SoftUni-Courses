import java.util.Scanner;
//80/100

public class P04_WeddingDecoration {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        int allBalloons = 0;
        int allFlowers = 0;
        int allCandles = 0;
        int allRibbon = 0;

        double sumAll = 0;
        while (budget >= sumAll) {
            String typeDecoration = scanner.nextLine();
            if (typeDecoration.equalsIgnoreCase("stop")) {
                break;
            }
            int numberOfDecoration = Integer.parseInt(scanner.nextLine());
            switch (typeDecoration) {
                case "balloons":
                    allBalloons += numberOfDecoration;
                    sumAll += numberOfDecoration * 0.10;
                    break;
                case "flowers":
                    allFlowers += numberOfDecoration;
                    sumAll += numberOfDecoration * 1.50;
                    break;
                case "candles":
                    allCandles += numberOfDecoration;
                    sumAll += numberOfDecoration * 0.50;
                    break;
                case "ribbon":
                    allRibbon += numberOfDecoration;
                    sumAll += numberOfDecoration * 2;
                    break;
            }
        }
        double diff = Math.abs(budget - sumAll);
        if (budget < sumAll) {
            System.out.println("All money is spent!");
        } else {
            System.out.printf("Spend money: %.2f\nMoney left: %.2f\n", sumAll, diff);
        }
        System.out.printf("Purchased decoration is %d balloons, %d m ribbon, %d flowers and %d candles.", allBalloons, allRibbon, allFlowers, allCandles);
    }
}
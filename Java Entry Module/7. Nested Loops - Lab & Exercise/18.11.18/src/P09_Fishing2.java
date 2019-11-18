import java.util.Scanner;

public class P09_Fishing2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        int countToThree = 0;
        int countStop = 0;
        double profit = 0;

        int quota = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= quota; i++) {
            int charsSum = 0;
            double fishPrice = 0;
            String typeOfFish = scanner.nextLine();

            if (typeOfFish.equalsIgnoreCase("STOP")) {
                break;
            } else {
                double weightOfFish = Double.parseDouble(scanner.nextLine());

                for (int j = 0; j < typeOfFish.length(); j++) {
                    char fishInChars = typeOfFish.charAt(j);
                    charsSum += fishInChars;
                    fishPrice = charsSum / weightOfFish;

                    if (countToThree == 3) {
                        profit += fishPrice;
                        countToThree = 1;
                    } else {
                        profit -= fishPrice;
                    }
                    countStop++;
                    countToThree++;
                    if (countStop == quota) {
                        System.out.println("Lyubo fulfilled the quota!");
                        break;
                    }
                }
            }
        }
            if (profit > 0) {
                System.out.printf("Lyubo's profit from %d fishes is %.2f leva.", countStop, profit);
            }
            if (profit < 0) {
                System.out.printf("Lyubo lost %.2f leva today.", Math.abs(profit));
            }
    }
}
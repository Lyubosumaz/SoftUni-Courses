import java.util.Scanner;

public class P09_Fishing {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double receivesMoney = 0;
        double paysMoneyFish = 0;

        int countToThree = 1;
        int countStop = 0;

        int quota = Integer.parseInt(scanner.nextLine());
        while (countStop < quota) {
            String typeOfFish = scanner.nextLine();
            if (typeOfFish.equalsIgnoreCase("STOP")) {
                break;
            }

            double weightOfFish = Double.parseDouble(scanner.nextLine());

            int totalCharThree = 0;
            double currentFishTree = 0;
            int totalChar = 0;
            double currentFish = 0;

            if (countToThree == 3) {
                for (int i = 0; i < typeOfFish.length(); i++) {
                    char fishInChars = typeOfFish.charAt(i);
                    totalCharThree += fishInChars;
                    // inside loop for optimized memory usage
                    currentFishTree = totalCharThree / weightOfFish;
                    countToThree = 0;
                }
            } else {
                for (int j = 0; j < typeOfFish.length(); j++) {
                    char fishInChars = typeOfFish.charAt(j);
                    totalChar += fishInChars;
                    // inside loop for optimized memory usage
                    currentFish = totalChar / weightOfFish;
                }
            }
            receivesMoney += currentFishTree;
            paysMoneyFish += currentFish;
            countStop++;
            countToThree++;
            if (countStop == quota) {
                System.out.println("Lyubo fulfilled the quota!");
                break;
            }
        }
        double profit = 0;
        profit = Math.abs(receivesMoney - paysMoneyFish);

        if (receivesMoney > paysMoneyFish) {
            System.out.printf("Lyubo's profit from %d fishes is %.2f leva.", countStop, profit);
        }
        if (receivesMoney < paysMoneyFish) {
            System.out.printf("Lyubo lost %.2f leva today.", profit);
        }
    }
}

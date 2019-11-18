import java.util.Scanner;

public class Christmas_Spirit_P01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int ornamentSet = 2;
        int treeSkirt = 5;
        int treeGarlands = 3;
        int treeLights = 15;

        int quantity = Integer.parseInt(scanner.nextLine());
        int days = Integer.parseInt(scanner.nextLine());

        int totalCost = 0;
        int totalSpirit = 0;

        int secondDay = 0;
        int thirdDay = 0;
        int fifthDay = 0;
        int tenthDay = 0;
        int eleventhDay = 0;

        while (days-- > 0) {
            secondDay++;
            thirdDay++;
            fifthDay++;
            tenthDay++;
            eleventhDay++;


            if (eleventhDay == 11) {
                quantity += 2;
                eleventhDay = 0;
            }
            if (secondDay == 2) {
                totalCost += quantity * ornamentSet;
                totalSpirit += 5;
                secondDay = 0;
            }
            if (thirdDay == 3 && fifthDay == 5) {
                totalCost += quantity * treeSkirt;
                totalCost += quantity * treeGarlands;
                totalCost += quantity * treeLights;
                totalSpirit += 13;
                totalSpirit += 17;
                totalSpirit += 30;
                thirdDay = 0;
                fifthDay = 0;
            }
            if (thirdDay == 3 && fifthDay != 5) {
                totalCost += quantity * treeSkirt;
                totalCost += quantity * treeGarlands;
                totalSpirit += 13;
                thirdDay = 0;
            }
            if (fifthDay == 5 && thirdDay != 3) {
                totalCost += quantity * treeLights;
                totalSpirit += 17;
                fifthDay = 0;
            }
            if (tenthDay == 10) {
                if (days == 0) {
                    totalSpirit -= 30;
                }
                totalSpirit -= 20;
                totalCost += treeSkirt + treeGarlands + treeLights;
                tenthDay = 0;
            }
        }
        System.out.printf("Total cost: %d\n", totalCost);
        System.out.printf("Total spirit: %d", totalSpirit);
    }
}
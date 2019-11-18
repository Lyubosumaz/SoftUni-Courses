import java.util.Scanner;

public class P07_NameWars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String addName = scanner.nextLine();
        String currentName = "";
        int currentCharSum = 0;
        while (!addName.equalsIgnoreCase("stop")) {
            int allCharSum = 0;
            for (int i = 0; i < addName.length(); i++) {
                char charactersIn = addName.charAt(i);
                if (Character.isAlphabetic(charactersIn)) {
                    allCharSum += charactersIn;
                }
                if (allCharSum > currentCharSum) {
                    currentCharSum = allCharSum;
                    currentName = addName;
                }
            }
            addName = scanner.nextLine();
        }
        System.out.printf("Winner is %s - %d!", currentName, currentCharSum);
    }
}

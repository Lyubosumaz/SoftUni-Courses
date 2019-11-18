import java.util.Scanner;

public class P04_BestPlayer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String playerName = scanner.nextLine();
        int scoredGoals = Integer.parseInt(scanner.nextLine());

        String bestPlayer = "";
        int topScored = 0;

        while (true) {
            if (scoredGoals > topScored) {
                topScored = scoredGoals;
                bestPlayer = playerName;
            }
            if (topScored >= 10) {
                break;
            }
            playerName = scanner.nextLine();
            if (playerName.equalsIgnoreCase("END")){
                break;
            }
            scoredGoals = Integer.parseInt(scanner.nextLine());
        }
        System.out.printf("%s is the best player!\n", bestPlayer);
        if (topScored >= 3) {
            System.out.printf("He has scored %d goals and made a hat-trick !!!", topScored);
        } else {
            System.out.printf("He has scored %d goals.", topScored);
        }
    }
}
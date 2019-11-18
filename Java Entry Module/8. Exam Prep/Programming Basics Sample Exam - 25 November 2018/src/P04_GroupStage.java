import java.util.Scanner;

public class P04_GroupStage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String teamName = scanner.nextLine();
        int gamesPlayed = Integer.parseInt(scanner.nextLine());

        int gameCounter = 0;
        int totalPoints = 0;

        int goalDifference = 0;
        int totalGoalsScored = 0;
        int totalReceivedGoals = 0;

        while (gamesPlayed > gameCounter) {
            int goalsScored = Integer.parseInt(scanner.nextLine());
            totalGoalsScored += goalsScored;
            int receivedGoals = Integer.parseInt(scanner.nextLine());
            totalReceivedGoals += receivedGoals;

            if (goalsScored > receivedGoals) {
                totalPoints += 3;
            } else if (goalsScored == receivedGoals) {
                totalPoints += 1;
            } else {
                totalPoints += 0;
            }
            gameCounter++;
        }
        goalDifference = totalGoalsScored - totalReceivedGoals;
        if (goalDifference >= 0) {
            System.out.printf("%s has finished the group phase with %d points.\nGoal difference: %d.",
                    teamName, totalPoints, Math.abs(goalDifference));
        } else {
            System.out.printf("%s has been eliminated from the group phase.\nGoal difference: %d.",
                    teamName, goalDifference);
        }
    }
}
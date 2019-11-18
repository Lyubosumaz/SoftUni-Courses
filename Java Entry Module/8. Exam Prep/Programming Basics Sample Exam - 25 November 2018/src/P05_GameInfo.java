import java.util.Scanner;

public class P05_GameInfo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int totalMinutes = 0;
        double averageMinutes = 0;
        int penalties = 0;
        int additionalTime = 0;

        String teamName = scanner.nextLine();
        int numberOfMatches = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < numberOfMatches; i++) {
            int playedMinutes = Integer.parseInt(scanner.nextLine());
            if (playedMinutes > 120) {
                penalties++;
            }
            if (playedMinutes > 90 && playedMinutes <= 120) {
                additionalTime++;
            }
            totalMinutes += playedMinutes;
        }
        averageMinutes = (double) totalMinutes / numberOfMatches;
        System.out.printf("%s has played %d minutes. Average minutes per game: %.2f\n",
                teamName, totalMinutes, averageMinutes);
        System.out.printf("Games with penalties: %d\nGames with additional time: %d", penalties, additionalTime);
    }
}

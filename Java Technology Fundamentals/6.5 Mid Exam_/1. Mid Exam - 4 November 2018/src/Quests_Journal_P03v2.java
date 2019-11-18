import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Quests_Journal_P03v2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<String> journal = Arrays.stream(scanner.nextLine().split(", ")).collect(Collectors.toCollection(ArrayList::new));

        String input = scanner.nextLine();
        while (!input.equals("Retire!")) {

            String[] tokens = input.split(" - ");
            String command = tokens[0];

            if (command.equals("Start")) {
                if (!journal.contains(tokens[1])) {
                    journal.add(tokens[1]);
                }
            } else if (command.equals("Complete")) {
                journal.remove(tokens[1]);
            } else if (command.equals("Side Quest")) {
                String[] questData = tokens[1].split(":");
                String questName = questData[0];
                String sideQuest = questData[1];

                int index = journal.indexOf(questName);
                if (index != -1 && !journal.contains(sideQuest)) {
                    journal.add(index + 1, sideQuest);
                }
            } else if (command.equals("Renew")) {
                if (journal.contains(tokens[1])) {
                    journal.remove(tokens[1]);
                    journal.add(tokens[1]);
                }
            }
            input = scanner.nextLine();
        }
        for (int i = 0; i < journal.size(); i++) {
            if (i == journal.size() - 1) {
                System.out.println(journal.get(i));
            } else {
                System.out.print(journal.get(i) + ", ");
            }
        }
    }
}

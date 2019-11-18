import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Quests_Journal_P03 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        List<String> inputList = Arrays.stream(reader.readLine().split(", ")).collect(Collectors.toList());

        String commands = "";
        while (!"Retire!".equalsIgnoreCase(commands = reader.readLine())) {
            String[] keyCommands = commands.split(" - ");
            switch (keyCommands[0]) {
                case "Start":
                    String addQuest = keyCommands[1];
                    if (!inputList.contains(addQuest)) {
                        inputList.add(addQuest);
                    }
                    break;
                case "Complete":
                    String removeQuest = keyCommands[1];
                    if (inputList.contains(removeQuest)) {
                        inputList.remove(removeQuest);
                    }
                    break;
                case "Side Quest":
                    String[] splitNames = keyCommands[1].split("\\:");
                    String quest = splitNames[0];
                    String sideQuest = splitNames[1];
                    int questIndex = inputList.indexOf(quest);

                    if (!inputList.contains(quest) && !inputList.contains(sideQuest)) {
                        break;
                    }
                    if (inputList.contains(quest) && !inputList.contains(sideQuest)) {
                        inputList.add(questIndex + 1, sideQuest);
                    }
                    if (inputList.contains(quest) && inputList.contains(sideQuest)) {
                        break;
                    }
                    break;
                case "Renew":
                    String switchQuest = keyCommands[1];
                    int switchQuestIndex = inputList.indexOf(switchQuest);
                    String lastQuest = String.valueOf(inputList.get(inputList.size() - 1));

                    if (inputList.contains(switchQuest) && switchQuestIndex != inputList.size() - 1) {
                        inputList.remove(switchQuest);
                        inputList.add(switchQuest);
                    }
                    break;
            }
        }
        System.out.println(inputList.toString().replaceAll("[\\[\\]]", ""));
    }
}
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Santa_List_P02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> kidsList = Arrays.stream(scanner.nextLine().split("[\\&]")).collect(Collectors.toList());

        String input = "";
        while (!"Finished!".equals(input = scanner.nextLine())) {
            String[] data = input.split("\\s+");
            switch (data[0]) {
                case "Bad":
                    String addKid = data[1];
                    if (kidsList.contains(addKid)) {
                        break;
                    } else {
                        kidsList.add(0, addKid);
                    }
                    break;
                case "Good":
                    String removeKid = data[1];
                    if (kidsList.contains(removeKid)) {
                        kidsList.remove(removeKid);
                    }
                    break;
                case "Rename":
                    String oldName = data[1];
                    String newName = data[2];

                    int oldNameIndex = 0;
                    if (kidsList.contains(oldName)) {
                        oldNameIndex = kidsList.indexOf(oldName);
                        kidsList.remove(oldName);
                        kidsList.add(oldNameIndex, newName);
                    }
                    break;
                case "Rearrange":
                    String rearrangeKid = data[1];
                    if (kidsList.contains(rearrangeKid)) {
                        kidsList.remove(rearrangeKid);
                        kidsList.add(rearrangeKid);
                    }
                    break;
            }
        }
        System.out.println(kidsList.toString().replaceAll("[\\[\\]]", ""));
    }
}
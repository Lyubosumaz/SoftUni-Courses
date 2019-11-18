import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class The_Final_Quest_P03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<String> inputList = Arrays.stream(scanner.nextLine().split("\\s+")).collect(Collectors.toCollection(ArrayList::new));

        String command = "";

        while (!"Stop".equals(command = scanner.nextLine())) {

            String[] data = command.split("\\s+");

            switch (data[0]) {
                case "Delete":
                    int deleteIndex = Integer.parseInt(data[1]) + 1;
                    if (deleteIndex >= 0 && deleteIndex <= inputList.size() - 1) {

                        inputList.remove(deleteIndex);
                    }
                    break;
                case "Swap":
                    String word1 = data[1];
                    String word2 = data[2];

                    if (inputList.contains(word1) && inputList.contains(word2)) {

                        int indexWord1 = inputList.indexOf(word1);
                        int indexWord2 = inputList.indexOf(word2);

                        inputList.set(indexWord1, word2);
                        inputList.set(indexWord2, word1);
                    }
                    break;
                case "Put":
                    String addWord = data[1];
                    int addIndex = Integer.parseInt(data[2]) - 1;
                    if (addIndex >= 0 && addIndex <= inputList.size() ) {

                        inputList.add(addIndex, addWord);
                    }
                    break;
                case "Sort":
//                    List<String> reverseList = new ArrayList<>();
//                    for (int i = inputList.size() - 1; i >= 0; i--) {
//                        reverseList.add(inputList.get(i));
//                    }
//                    inputList.clear();
//                    inputList = reverseList;
                    inputList.sort((o1, o2) -> o2.compareTo(o1));
                    break;
                case "Replace":
                    String replace = data[1];
                    String word = data[2];

                    if (inputList.contains(word)) {

                        int indexWord = inputList.indexOf(word);

                        inputList.set(indexWord, replace);
                    }
                    break;
            }
        }
        System.out.println(inputList.toString().replaceAll("[\\[\\]\\,]", ""));
    }
}
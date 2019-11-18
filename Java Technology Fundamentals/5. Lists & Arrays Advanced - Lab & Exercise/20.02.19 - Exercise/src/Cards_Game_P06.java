import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Cards_Game_P06 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Integer> firstPlayer = Arrays.stream(scanner.nextLine().split("\\s+")).map(e -> Integer.parseInt(e)).collect(Collectors.toList());
        List<Integer> secondPlayer = Arrays.stream(scanner.nextLine().split("\\s+")).map(e -> Integer.parseInt(e)).collect(Collectors.toList());

        while (true) {
            if (firstPlayer.size() == 0 || secondPlayer.size() == 0) {
                break;
            } else {
                if (firstPlayer.get(0).equals(secondPlayer.get(0))) {
                    firstPlayer.remove(0);
                    secondPlayer.remove(0);
                } else if (firstPlayer.get(0) > secondPlayer.get(0)) {
                    firstPlayer.add(firstPlayer.get(0));
                    firstPlayer.add(secondPlayer.get(0));
                    firstPlayer.remove(0);
                    secondPlayer.remove(0);
                } else if (firstPlayer.get(0) < secondPlayer.get(0)) {
                    secondPlayer.add(secondPlayer.get(0));
                    secondPlayer.add(firstPlayer.get(0));
                    firstPlayer.remove(0);
                    secondPlayer.remove(0);
                }
            }
        }
        int sum = 0;
        if (firstPlayer.size() > secondPlayer.size()) {
            for (int i = 0; i < firstPlayer.size(); i++) {
                sum += firstPlayer.get(i);
            }
            System.out.printf("First player wins! Sum: %d", sum);
        } else {
            for (int i = 0; i < secondPlayer.size(); i++) {
                sum += secondPlayer.get(i);
            }
            System.out.printf("Second player wins! Sum: %d", sum);
        }
    }
}
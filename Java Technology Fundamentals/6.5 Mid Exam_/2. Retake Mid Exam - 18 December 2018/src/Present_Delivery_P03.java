import java.util.Arrays;
import java.util.Scanner;

public class Present_Delivery_P03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] fieldArray = Arrays.stream(scanner.nextLine().split("[\\@]")).mapToInt(e -> Integer.parseInt(e)).toArray();
        String command = "";

        int currentIndex = 0;
        while (!"Merry Xmas!".equals(command = scanner.nextLine())) {
            int countJumps = 0;
            int jumpLength = 0;

            String[] data = command.split("\\s+");
            jumpLength += Integer.parseInt(data[1]);

            for (int i = 0; i < jumpLength; i++) {
                if (currentIndex >= fieldArray.length - 1) {
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }
                countJumps++;

                if (countJumps == jumpLength) {
                    if (fieldArray[currentIndex] == 0) {
                        System.out.printf("House %d will have a Merry Christmas.\n", currentIndex);

                    } else {
                        fieldArray[currentIndex] -= 2;
                    }
                }
            }
        }
        int failedHouses = 0;
        for (int i = 0; i < fieldArray.length; i++) {
            if (fieldArray[i] != 0) {
                failedHouses++;
            }
        }
        if (failedHouses == 0) {
            System.out.printf("Santa's last position was %d.\nMission was successful.", currentIndex);
        } else {
            System.out.printf("Santa's last position was %d.\nSanta has failed %d houses.", currentIndex, failedHouses);
        }
    }
}
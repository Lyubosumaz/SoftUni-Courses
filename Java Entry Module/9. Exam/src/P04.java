import java.util.Scanner;

public class P04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int startCamp = 5364;
        int counter = 1;
        while (true) {
            String command = scanner.nextLine();
            if (command.equalsIgnoreCase("END")) {
                break;
            }
            if (command.equalsIgnoreCase("YES")) {
                counter++;
            }
            if (counter > 5) {
                break;
            }
            int climbedMeters = Integer.parseInt(scanner.nextLine());
            startCamp += climbedMeters;
            if (startCamp >= 8848) {
                break;
            }
        }
        if (startCamp >= 8848) {
            System.out.printf("Goal reached for %d days!", counter);
        } else {
            System.out.printf("Failed!\n%d", startCamp);
        }
    }
}
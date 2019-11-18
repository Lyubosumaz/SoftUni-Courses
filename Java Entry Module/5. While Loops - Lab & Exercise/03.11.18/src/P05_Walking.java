import java.util.Scanner;

public class P05_Walking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int total = 0;
        int countSteps = 0;

        while (true) {
            String command = scanner.nextLine();
            if (command.equals("Going home")) {
                int lastSteps = Integer.parseInt(scanner.nextLine());
                total = countSteps + lastSteps;
                if (total >= 10000) {
                    System.out.println("Goal reached! Good job!");
                    break;
                } else {
                    System.out.printf("%d more steps to reach goal.", Math.abs(total - 10000));
                    break;
                }
            }

            int steps = Integer.parseInt(command);
            countSteps += steps;
            if (countSteps >= 10000) {
                System.out.println("Goal reached! Good job!");
                break;
            }
        }
    }
}
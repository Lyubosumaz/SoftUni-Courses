import java.util.Scanner;

public class P04_OwnBussiness {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());
        int freeSpace = width * length * height;

        int takenSpace = 0;
        while (takenSpace < freeSpace) {
            String command = scanner.nextLine();
            if (command.equalsIgnoreCase("DONE")) {
                break;
            }
            int computer = Integer.parseInt(command);
            takenSpace += computer;
        }
        int diff = Math.abs(freeSpace - takenSpace);
        if (takenSpace > freeSpace) {
            System.out.printf("No more free space! You need %d Cubic meters more.", diff);
        } else {
            System.out.printf("%d Cubic meters left.", diff);
        }
    }
}

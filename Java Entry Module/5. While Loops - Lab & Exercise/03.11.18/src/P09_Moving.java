import java.util.Scanner;

public class P09_Moving {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());

        int freeSpace = width * length * height;
        int myStuff = 0;

        while (myStuff < freeSpace) {
            String command = scanner.nextLine();
            if (command.equals("Done")) {
                break;
            }
            int boxes = Integer.parseInt(command);
            myStuff += boxes;
        }

        int result = Math.abs(freeSpace - myStuff);
        if (myStuff > freeSpace) {
            System.out.printf("No more free space! You need %d Cubic meters more.", result);
        } else {
            System.out.printf("%d Cubic meters left.", result);
        }
    }
}
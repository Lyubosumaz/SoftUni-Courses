import java.util.Scanner;

public class P04_NumberSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int smallest = Integer.MAX_VALUE;
        int biggest = Integer.MIN_VALUE;

        while (true) {
            String command = scanner.nextLine();
            if (command.equals("END"))
                break;
            int num = Integer.parseInt(command);
            if (num > biggest) {
                biggest = num;
            }
            if (num < smallest) {
                smallest = num;
            }
        }
        System.out.printf("Max number: %d\nMin number: %d", biggest, smallest);
    }
}
import java.util.Scanner;

public class P06_Cake {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());

        int cake = width * length;
        int pieces = 0;

        while (cake >= pieces) {
            String command = scanner.nextLine();
            if (command.equals("STOP")) {
                break;
            }
            int treat = Integer.parseInt(command);
            pieces += treat;
        }
        int result = Math.abs(cake - pieces);
        if (cake >= pieces) {
            System.out.printf("%d pieces are left.", result);
        } else {
            System.out.printf("No more cake left! You need %d pieces more.", result);
        }

    }
}
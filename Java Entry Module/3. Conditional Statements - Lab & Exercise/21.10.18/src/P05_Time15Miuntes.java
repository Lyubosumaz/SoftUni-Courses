import java.util.Scanner;

class P05_Time15Minutes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int hours = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());

        if (minutes <= 44) {
            System.out.printf("%d" + ":" + "%02d", hours, minutes + 15);
        } else if (hours <= 22 && minutes > 44) {
            System.out.printf("%d" + ":" + "%02d", hours + 1, (minutes + 15) % 60);
        } else if (hours >= 23 && minutes > 44) {
            System.out.printf("%d" + ":" + "%02d", ((hours + 1) % 24), ((minutes + 15) % 60));
        }
    }
}
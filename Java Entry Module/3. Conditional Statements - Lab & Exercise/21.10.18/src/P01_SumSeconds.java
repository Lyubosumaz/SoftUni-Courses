import java.util.Scanner;

public class P01_SumSeconds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());
        int num3 = Integer.parseInt(scanner.nextLine());

        int totalSeconds = num1 + num2 + num3;
        int minutesSeconds = totalSeconds % 60;

        if (totalSeconds < 10) {
            System.out.printf("0:%02d", minutesSeconds);//wrong
        } else if (totalSeconds <= 59) {
            System.out.printf("0:%02d", minutesSeconds);
        } else if (totalSeconds <= 119) {
            System.out.printf("1:%02d", minutesSeconds);
        } else if (totalSeconds <= 179) {
            System.out.printf("2:%02d", minutesSeconds);
        }
    }
}
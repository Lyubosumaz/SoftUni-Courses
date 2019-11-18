import java.util.Scanner;

public class P07_WaterDispenser {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int easy = 50;
        int medium = 100;
        int hard = 200;
        int total = 0;

        int glass = Integer.parseInt(scanner.nextLine());
        int counter = 0;

        while (total < glass) {
            String amount = scanner.nextLine();
            if (amount.equals("Easy")) {
                total += easy;
            }
            if (amount.equals("Medium")) {
                total += medium;
            }
            if (amount.equals("Hard")) {
                total += hard;
            }
            counter++;
        }

        if (total > glass) {
            System.out.printf("%dml has been spilled.", total - glass);
        } else {
            System.out.printf("The dispenser has been tapped %d times.", counter);
        }
    }
}
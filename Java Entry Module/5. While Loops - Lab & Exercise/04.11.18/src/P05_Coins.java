import java.util.Scanner;

public class P05_Coins {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double change = Double.parseDouble(scanner.nextLine());
        int counter = 0;

        change *= 100;
        while (change >= 200) {
            change -= 200;
            counter++;
        }

        while (change >= 100) {
            change -= 100;
            counter++;
        }

        while (change >= 50) {
            change -= 50;
            counter++;
        }

        while (change >= 20) {
            change -= 20;
            counter++;
        }

        while (change >= 10) {
            change -= 10;
            counter++;
        }

        while (change >= 5) {
            change -= 5;
            counter++;
        }

        while (change >= 2) {
            change -= 2;
            counter++;
        }

        while (change >= 1) {
            change -= 1;
            counter++;
        }
        System.out.println(counter);
    }
}
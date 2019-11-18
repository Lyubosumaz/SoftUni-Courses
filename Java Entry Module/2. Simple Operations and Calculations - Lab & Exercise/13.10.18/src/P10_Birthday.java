import java.util.Scanner;

public class P10_Birthday {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sideA = Integer.parseInt(scanner.nextLine());
        int sideB = Integer.parseInt(scanner.nextLine());
        int sideH = Integer.parseInt(scanner.nextLine());
        double percentage = Double.parseDouble(scanner.nextLine());

        int area = sideA * sideB * sideH;
        double volume = area * 0.001;

        double total = volume - (volume * percentage / 100);
        System.out.printf("%.3f",total);
    }
}
import java.util.Scanner;

public class P05_DanceHall {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //в метри
        double length = Double.parseDouble(scanner.nextLine());
        double width = Double.parseDouble(scanner.nextLine());
        double object = Double.parseDouble(scanner.nextLine());
        //в сантиметри
        double hall = (length * 100) * (width * 100);
        double wardrobe = (object * 100) * (object * 100);
        double bench = hall / 10;
        double space = hall - wardrobe - bench;
        double dancers = Math.floor(space / (40 + 7000));

        System.out.printf("%.0f", dancers);
    }
}
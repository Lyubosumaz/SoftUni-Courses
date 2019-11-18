import java.util.Scanner;

public class P01_PointOnRectangleBorder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //A
        double x1 = Double.parseDouble(scanner.nextLine());
        double y1 = Double.parseDouble(scanner.nextLine());
        //B
        double x2 = Double.parseDouble(scanner.nextLine());
        double y2 = Double.parseDouble(scanner.nextLine());
        //C
        double x = Double.parseDouble(scanner.nextLine());
        double y = Double.parseDouble(scanner.nextLine());

        if (x1 <= x && x <= x2 && y1 <= y && y <= y2) {
            if (x1 == x || x == x2 || y == y1 || y == y2) {
                System.out.println("Border");
            } else {
                System.out.println("Inside / Outside");
            }
        } else {
            System.out.println("Inside / Outside");
        }
    }
}
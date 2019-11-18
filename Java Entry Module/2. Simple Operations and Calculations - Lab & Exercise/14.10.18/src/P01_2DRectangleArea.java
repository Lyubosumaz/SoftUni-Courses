import java.util.Scanner;

public class P01_2DRectangleArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double x1 = Double.parseDouble(scanner.nextLine());
        double y1 = Double.parseDouble(scanner.nextLine());
        double x2 = Double.parseDouble(scanner.nextLine());
        double y2 = Double.parseDouble(scanner.nextLine());


        double greaterX = Math.max(x1, x2);
        double lesserX = Math.min(x1, x2);
        double greaterY = Math.max(y1, y2);
        double lesserY = Math.min(y1, y2);

        double sideA = greaterX - lesserX;
        double sideB = greaterY - lesserY;

        double area = (sideA * sideB);
        double perimeter = 2 * (sideA + sideB);

        System.out.println(area);
        System.out.println(perimeter);
    }
}
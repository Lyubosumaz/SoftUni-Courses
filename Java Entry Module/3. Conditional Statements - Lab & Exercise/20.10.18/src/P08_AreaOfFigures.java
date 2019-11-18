import java.util.Scanner;

public class P08_AreaOfFigures {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String figureIs = scanner.nextLine();

        if (figureIs.equals("square")) {
            double sideA = Double.parseDouble(scanner.nextLine());
            double area = sideA * sideA;
            System.out.printf("%.3f", area);
        } else if (figureIs.equals("rectangle")) {
            double sideA = Double.parseDouble(scanner.nextLine());
            double sideB = Double.parseDouble(scanner.nextLine());
            double area = sideA * sideB;
            System.out.printf("%.3f", area);
        } else if (figureIs.equals("circle")) {
            double radius = Double.parseDouble(scanner.nextLine());
            double area = Math.PI * radius * radius;
            System.out.printf("%.3f", area);
        } else if (figureIs.equals("triangle")) {
            double sideA = Double.parseDouble(scanner.nextLine());
            double sideH = Double.parseDouble(scanner.nextLine());
            double area = (sideA * sideH) / 2;
            System.out.printf("%.3f", area);
        }
    }
}
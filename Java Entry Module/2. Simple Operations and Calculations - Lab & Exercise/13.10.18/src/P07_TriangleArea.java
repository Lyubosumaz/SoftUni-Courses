import java.util.Scanner;

public class P07_TriangleArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double sideA = Double.parseDouble(scanner.nextLine());
        double h = Double.parseDouble(scanner.nextLine());

        double area = sideA * h / 2;
        System.out.printf("%.2f", area);
    }
}
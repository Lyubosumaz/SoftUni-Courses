import java.util.Scanner;

public class P03_PointRectangle {
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

        String outPut = "";

        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
            outPut = "Inside";
        } else {
            outPut = "Outside";
        }
        System.out.println(outPut);
    }
}
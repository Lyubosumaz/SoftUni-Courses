import java.util.Scanner;

public class P02_InchesToCenti {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double incees = Double.parseDouble(scanner.nextLine());
        double centimeters = incees * 2.54;

        System.out.println(centimeters);
    }
}
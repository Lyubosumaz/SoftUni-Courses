import java.util.Scanner;

public class P02_USDtoBGN {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double USD = Double.parseDouble(scanner.nextLine());
        double BGN = 1.79549; // курс USD
        double to = USD * BGN;

        System.out.printf("% .2f", to);
    }
}
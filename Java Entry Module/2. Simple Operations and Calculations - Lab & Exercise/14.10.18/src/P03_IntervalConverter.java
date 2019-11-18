import java.util.Scanner;

public class P03_IntervalConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double courseUSD = 1.79549;
        double courseEUR = 1.95583;
        double courseGBP = 2.53405;
        double courseBGN = 1;

        double num = Double.parseDouble(scanner.nextLine());
        String fromA = scanner.nextLine();
        String toB = scanner.nextLine();

        if (fromA.equals("USD")) {
            if (toB.equals("USD"))
                System.out.printf("%.2f" + " USD", num * 1);
            if (toB.equals("EUR"))
                System.out.printf("%.2f" + " EUR", (num * courseUSD) / courseEUR);
            if (toB.equals("GBP"))
                System.out.printf("%.2f" + " GBP", (num * courseUSD) / courseGBP);
            if (toB.equals("BGN"))
                System.out.printf("%.2f" + " BGN", num * courseUSD);

        }
        if (fromA.equals("EUR")) {
            if (toB.equals("USD"))
                System.out.printf("%.2f" + " USD", (num * courseEUR) / courseUSD);
            if (toB.equals("EUR"))
                System.out.printf("%.2f" + " EUR", num * 1);
            if (toB.equals("GBP"))
                System.out.printf("%.2f" + " GBP", (num * courseEUR) / courseGBP);
            if (toB.equals("BGN"))
                System.out.printf("%.2f" + " BGN", num * courseEUR);
        }
        if (fromA.equals("GBP")) {
            if (toB.equals("USD"))
                System.out.printf("%.2f" + " USD", (num * courseGBP) / courseUSD);
            if (toB.equals("EUR"))
                System.out.printf("%.2f" + " EUR", (num * courseGBP) / courseEUR);
            if (toB.equals("GBP"))
                System.out.printf("%.2f" + " GBP", num * 1);
            if (toB.equals("BGN"))
                System.out.printf("%.2f" + " BGN", num * courseGBP);
        }
        if (fromA.equals("BGN")) {
            if (toB.equals("USD"))
                System.out.printf("%.2f" + " USD", num / courseUSD);
            if (toB.equals("EUR"))
                System.out.printf("%.2f" + " EUR", num / courseEUR);
            if (toB.equals("GBP"))
                System.out.printf("%.2f" + " GBP", num / courseGBP);
            if (toB.equals("BGN"))
                System.out.printf("%.2f" + " BGN", num / courseBGN);
        }
    }
}
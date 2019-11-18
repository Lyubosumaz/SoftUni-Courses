import java.util.Scanner;

public class P02_BonusScore {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double num = Integer.parseInt(scanner.nextLine());
        double evenNum = num % 2;
        double fiveNum = num % 5;

        if (num <= 100) {
            double under100 = 5;
            double total = num + under100;
            if (evenNum == 0) {
                System.out.printf("%.1f\n", under100 + 1);
                System.out.printf("%.1f", total + 1);
            } else if (fiveNum == 0) {
                System.out.printf("%.1f\n", under100 + 2);
                System.out.printf("%.1f", total + 2);
            } else {
                System.out.printf("%.1f\n", under100);
                System.out.printf("%.1f", total);
            }
        } else if (num < 1000) {
            double above100 = (num * 20) / 100;
            double total = num + above100;
            if (evenNum == 0) {
                System.out.printf("%.1f\n", above100 + 1);
                System.out.printf("%.1f", total + 1);
            } else if (fiveNum == 0) {
                System.out.printf("%.1f\n", above100 + 2);
                System.out.printf("%.1f", total + 2);
            } else {
                System.out.printf("%.1f\n", above100);
                System.out.printf("%.1f", total);
            }
        } else if (num >= 1000) {
            double above1000 = (num * 10) / 100;
            double total = num + above1000;
            if (evenNum == 0) {
                System.out.printf("%.1f\n", above1000 + 1);
                System.out.printf("%.1f", total + 1);
            } else if (fiveNum == 0) {
                System.out.printf("%.1f\n", above1000 + 2);
                System.out.printf("%.1f", total + 2);
            } else {
                System.out.printf("%.1f\n", above1000);
                System.out.printf("%.1f", total);
            }
        }
    }
}
import java.text.DecimalFormat;
import java.util.Scanner;

public class P03_OddEvenPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        double oddSum = 0;
        double oddMin = 1000000000.0;
        double oddMax = -1000000000.0;

        double evenSum = 0;
        double evenMin = 1000000000.0;
        double evenMax = -1000000000.0;
        DecimalFormat df = new DecimalFormat("#.##");

        for (int i = 1; i <= num; i++) {
            double numeral = Double.parseDouble(scanner.nextLine());
            if (i % 2 > 0) {
                oddSum += numeral;
                if (oddMin > numeral) {
                    oddMin = numeral;
                }
                if (oddMax < numeral) {
                    oddMax = numeral;
                }
            } else if (i % 2 == 0) {
                evenSum += numeral;
                if (evenMin > numeral) {
                    evenMin = numeral;
                }
                if (evenMax < numeral) {
                    evenMax = numeral;
                }
            }
        }
        if (num == 0) {
            System.out.printf("OddSum=%s,\nOddMin=No,\nOddMax=No,\nEvenSum=%s,\nEvenMin=No,\nEvenMax=No",
                    df.format(oddSum), df.format(evenSum));
        } else if (num == 1) {
            System.out.printf("OddSum=%s,\nOddMin=%s,\nOddMax=%s,\nEvenSum=%s,\nEvenMin=No,\nEvenMax=No",
                    df.format(oddSum), df.format(oddMin), df.format(oddMax), df.format(evenSum));
        } else {
            System.out.printf("OddSum=%s,\nOddMin=%s,\nOddMax=%s,\nEvenSum=%s,\nEvenMin=%s,\nEvenMax=%s",
                    df.format(oddSum), df.format(oddMin), df.format(oddMax), df.format(evenSum), df.format(evenMin), df.format(evenMax));
        }
    }
}
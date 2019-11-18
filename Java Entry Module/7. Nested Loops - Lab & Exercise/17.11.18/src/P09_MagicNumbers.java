import java.util.Scanner;

public class P09_MagicNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        short magical = Short.parseShort(scanner.nextLine());
        short d1 = 0;
        short d2;
        short d3;
        short d4;
        short d5;
        short d6;
        while (d1 <= 9) {
            d2 = 0;
            while (d2 <= 9) {
                d3 = 0;
                while (d3 <= 9) {
                    d4 = 0;
                    while (d4 <= 9) {
                        d5 = 0;
                        while (d5 <= 9) {
                            d6 = 0;
                            while (d6 <= 9) {
                                if (d1 * d2 * d3 * d4 * d5 * d6 == magical) {
                                    System.out.printf("%d%d%d%d%d%d ", d1, d2, d3, d4, d5, d6);
                                }
                                d6++;
                            }
                            d5++;
                        }
                        d4++;
                    }
                    d3++;
                }
                d2++;
            }
            d1++;
        }
    }
}
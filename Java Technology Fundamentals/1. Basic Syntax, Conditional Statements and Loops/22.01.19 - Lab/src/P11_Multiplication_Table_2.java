import java.util.Scanner;

public class P11_Multiplication_Table_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int times = Integer.parseInt(scanner.nextLine());

        if (times > 10) {
            System.out.printf("%d X %d = %d\n", num, times, num * times);
        } else {
            while (times <= 10) {
                System.out.printf("%d X %d = %d\n", num, times, num * times);
                times++;
            }
        }
    }
}
import java.util.Scanner;

public class P12_Refactor_Special_Numbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int times = Integer.parseInt(scanner.nextLine());
        int sum = 0;
        int temp = 0;
        for (int i = 1; i <= times; i++) {
            temp = i;
            while (i > 0) {
                sum += i % 10;
                i = i / 10;
            }
            if ((sum == 5) || (sum == 7) || (sum == 11)) {
                System.out.printf("%d -> True\n", temp);
            } else {
                System.out.printf("%d -> False\n", temp);
            }
            sum = 0;
            i = temp;
        }
    }
}

import java.util.Scanner;

public class P02_Sum_Digits_v2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int input = Integer.parseInt(scanner.nextLine());
        int sum = 0;
        while (input > 0) {
            sum += input % 10;
            input /= 10;
        }

        System.out.println(sum);
    }
}

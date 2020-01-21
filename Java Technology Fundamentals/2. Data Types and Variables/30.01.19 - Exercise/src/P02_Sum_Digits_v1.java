import java.util.Scanner;

public class P02_Sum_Digits_v1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int sum = 0;
        for (int i = 0; i < input.length(); i++) {
            sum += Integer.parseInt(String.valueOf(input.charAt(i)));
        }

        System.out.println(sum);
    }
}

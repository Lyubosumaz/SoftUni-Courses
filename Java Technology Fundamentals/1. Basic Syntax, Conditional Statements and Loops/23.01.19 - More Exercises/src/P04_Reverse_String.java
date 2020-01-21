import java.util.Scanner;

public class P04_Reverse_String {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        String reverse = "";
        for (int i = 0; i < input.length(); i++) {
            reverse += input.charAt(input.length() - i - 1);
        }
        System.out.println(reverse);
    }
}

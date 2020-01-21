import java.util.Scanner;

public class P06_Chars_to_String {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String connection = "";
        for (int i = 0; i < 3; i++) {
            char input = scanner.nextLine().charAt(0);
            connection = connection + input;
        }

        System.out.println(connection);
    }
}

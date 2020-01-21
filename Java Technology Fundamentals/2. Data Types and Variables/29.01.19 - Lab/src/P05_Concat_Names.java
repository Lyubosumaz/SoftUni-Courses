import java.util.Scanner;

public class P05_Concat_Names {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String nameOne = scanner.nextLine();
        String nameTwo = scanner.nextLine();
        String connection = scanner.nextLine();

        System.out.printf("%s%s%s", nameOne, connection, nameTwo);
    }
}
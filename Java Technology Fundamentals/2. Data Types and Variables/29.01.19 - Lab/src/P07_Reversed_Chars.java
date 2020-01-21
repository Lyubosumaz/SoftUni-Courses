import java.util.Scanner;

public class P07_Reversed_Chars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char lineOne = scanner.nextLine().charAt(0);
        char lineTwo = scanner.nextLine().charAt(0);
        char lineThree = scanner.nextLine().charAt(0);

        System.out.printf("%c %c %c", lineThree, lineTwo, lineOne);
    }
}
import java.util.Scanner;

public class P08_Lower_or_Upper {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char input = scanner.nextLine().charAt(0);
        if (input >= 97 && input <= 122) {
            System.out.println("lower-case");
        } else {
            System.out.println("upper-case");
        }
    }
}

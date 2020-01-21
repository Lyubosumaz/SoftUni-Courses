import java.util.Scanner;

public class P01_Integer_Operations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int lineOne = Integer.parseInt(scanner.nextLine());
        int lineTwo = Integer.parseInt(scanner.nextLine());
        int lineThree = Integer.parseInt(scanner.nextLine());
        int lineFour = Integer.parseInt(scanner.nextLine());

        int sum = ((lineOne + lineTwo) / lineThree) * lineFour;

        System.out.println(sum);
    }
}

import java.util.Scanner;

public class P03_NumberTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int current = 1;

        for (int i = 0; i < num; i++) {
            for (int j = 0; j < num; j++) {

                current = i + j + 1;
                if (current > num) {
                    current = 2 * num - current;
                }
                System.out.printf("%d ", current);
            }
            System.out.println();
        }

    }
}

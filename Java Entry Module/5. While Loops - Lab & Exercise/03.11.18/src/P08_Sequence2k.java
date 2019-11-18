import java.util.Scanner;

public class P08_Sequence2k {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int start = 1;

        while (true) {
            System.out.println(start);
            start *= 2;
            start++;
            if (start > num) {
                break;
            }
        }
    }
}
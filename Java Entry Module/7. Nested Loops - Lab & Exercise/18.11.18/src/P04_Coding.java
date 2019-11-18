import java.util.Scanner;

public class P04_Coding {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int currentNum = 0;
        int wordNum = 0;

        while (num > 0) {
            currentNum = num % 10;
            if (currentNum == 0) {
                System.out.println("ZERO");
            } else {
                wordNum = currentNum + 33;
                char symbol = (char) wordNum;
                for (int i = 0; i < currentNum; i++) {
                    System.out.print(symbol);
                }
                System.out.println();
            }
            num /= 10;
        }
    }
}

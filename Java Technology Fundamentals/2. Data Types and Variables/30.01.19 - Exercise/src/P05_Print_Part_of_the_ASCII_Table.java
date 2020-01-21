import java.util.Scanner;

public class P05_Print_Part_of_the_ASCII_Table {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int startNum = Integer.parseInt(scanner.nextLine());
        int endNum = Integer.parseInt(scanner.nextLine());
        for (; startNum <= endNum; startNum++) {
            System.out.printf("%c ",(char)startNum);
        }
    }
}

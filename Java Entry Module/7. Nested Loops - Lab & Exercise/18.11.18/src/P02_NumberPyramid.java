import java.util.Scanner;

public class P02_NumberPyramid {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int counter = 1;
        boolean isBigger = false;
        int num = Integer.parseInt(scanner.nextLine());
        for (int rows = 1; rows <= num; rows++) {
            for (int columns = 1; columns <= rows; columns++) {
                if (counter > num) {
                    isBigger = true;
                    break;
                }
                System.out.printf("%d ", counter);
                counter++;
            }
            if (isBigger){
                break;
            }
            System.out.println();
        }
    }
}
import java.util.Scanner;

public class P01_ExcellentResult {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double grade = Double.parseDouble(scanner.nextLine());


        if (grade == 5.49) {
            System.out.println();
        } else if (grade >= 5.30) {
            System.out.println("Excellent!");
        }
    }
}
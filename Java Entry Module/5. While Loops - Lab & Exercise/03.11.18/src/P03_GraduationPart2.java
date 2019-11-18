import java.util.Scanner;

public class P03_GraduationPart2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        int counter = 1;
        int excluded = 0;
        double average = 0;

        while (counter <= 12) {
            double grade = Double.parseDouble(scanner.nextLine());
            if (grade >= 4.0) {
                average += grade;
                counter++;
            } else if (grade < 4.0) {
                excluded++;
                if (excluded == 2) {
                    break;
                }
            }
        }

        average /= 12;
        if (excluded < 2) {
            System.out.printf("%s graduated. Average grade: %.2f", name, average);
        } else {
            System.out.printf("%s has been excluded at %d grade", name, counter);
        }
    }
}
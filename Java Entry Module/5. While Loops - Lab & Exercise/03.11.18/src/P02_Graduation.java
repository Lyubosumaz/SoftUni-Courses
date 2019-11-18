import java.util.Scanner;

public class P02_Graduation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String studentName = scanner.nextLine();
        int counter = 1;
        double averageGrades = 0;

        while (counter <= 12){
            double grades = Double.parseDouble(scanner.nextLine());
            if (grades>=4.0){
                averageGrades += grades;
                counter++;
            }
        }
        averageGrades /=12;
        System.out.printf("%s graduated. Average grade: %.2f",studentName,averageGrades);
    }
}
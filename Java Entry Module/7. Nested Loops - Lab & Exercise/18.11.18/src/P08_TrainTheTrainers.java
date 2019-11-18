import java.util.Scanner;

public class P08_TrainTheTrainers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int jury = Integer.parseInt(scanner.nextLine());
        String presentationName = scanner.nextLine();

        double totalGrades = 0;
        int counter = 0;
        while (!presentationName.equalsIgnoreCase("FINISH")) {
            double sumGrades = 0;

            for (int i = 0; i < jury; i++) {
                double grades = Double.parseDouble(scanner.nextLine());
                sumGrades += grades;
                totalGrades += grades;
                counter++;
            }
            sumGrades /= jury;
            System.out.printf("%s - %.2f.\n", presentationName, sumGrades);

            presentationName = scanner.nextLine();
        }
        totalGrades /= counter;
        System.out.printf("Student's final assessment is %.2f.", totalGrades);
    }
}

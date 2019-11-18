import java.util.Scanner;

public class P03_ExamPreparation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int failedProblems = Integer.parseInt(scanner.nextLine());
        int counterFails = 0;

        String nameProblem = "";
        int ratingProblem = 0;

        int counterTotal = 0;
        double totalGrades = 0.0;
        String lastProblem = "";

        while (counterFails < failedProblems) {
            nameProblem = scanner.nextLine();
            if (nameProblem.equals("Enough")) {
                break;
            }
            ratingProblem = Integer.parseInt(scanner.nextLine());
            if (ratingProblem <= 4) {
                totalGrades += ratingProblem;
                counterFails++;
            }
            if (ratingProblem > 4) {
                totalGrades += ratingProblem;
            }
            lastProblem = nameProblem;
            counterTotal++;
        }
        double averageGrades = totalGrades / counterTotal;
        if (counterFails == failedProblems) {
            System.out.printf("You need a break, %d poor grades.", counterFails);
        } else {
            System.out.printf("Average score: %.2f\nNumber of problems: %d\nLast problem: %s", averageGrades, counterTotal, lastProblem);
        }
    }
}
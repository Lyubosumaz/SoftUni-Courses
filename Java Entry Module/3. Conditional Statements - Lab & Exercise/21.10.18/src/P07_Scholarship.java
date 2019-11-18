import java.util.Scanner;

public class P07_Scholarship {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        double familyWage = Double.parseDouble(scanner.nextLine());
        double averageGrades = Double.parseDouble(scanner.nextLine());
        double minWage = Double.parseDouble(scanner.nextLine());

        double familyScholarship = Math.floor((minWage * 35) / 100);
        double gradeScholarship = Math.floor(averageGrades * 25);

        if (averageGrades < 4.50) {
            System.out.println("You cannot get a scholarship!");
        }
        if (averageGrades > 4.50 && averageGrades < 5.50) {
            if (familyWage > minWage) {
                System.out.println("You cannot get a scholarship!");
            } else {
                System.out.printf("You get a Social scholarship %.0f BGN", (familyScholarship));
            }
        }
        if (averageGrades >= 5.50) {

            if (familyWage < minWage) {
                double maxScholarship = Math.max(familyScholarship, gradeScholarship);

                if (maxScholarship == gradeScholarship) {
                    System.out.printf("You get a scholarship for excellent results %.0f BGN", (gradeScholarship));
                } else if (maxScholarship == familyScholarship) {
                    System.out.printf("You get a Social scholarship %.0f BGN", familyScholarship);
                }
            } else {
                System.out.printf("You get a scholarship for excellent results %.0f BGN", (gradeScholarship));
            }
        }
    }
}
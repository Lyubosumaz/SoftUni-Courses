import java.util.Scanner;

public class P07_Salary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        int salary = Integer.parseInt(scanner.nextLine());
        int salaryFine = salary;

        for (int i = 0; i < num; i++) {
            String websiteName = scanner.nextLine();

            switch (websiteName) {
                case "Facebook":
                    salaryFine -= 150;
                    break;
                case "Instagram":
                    salaryFine -= 100;
                    break;
                case "Reddit":
                    salaryFine -= 50;
                    break;
            }
            if (salaryFine <= 0) {
                break;
            }
        }
        if (salaryFine <= 0) {
            System.out.println("You have lost your salary.");
        } else {
            System.out.println(salaryFine);
        }
    }
}
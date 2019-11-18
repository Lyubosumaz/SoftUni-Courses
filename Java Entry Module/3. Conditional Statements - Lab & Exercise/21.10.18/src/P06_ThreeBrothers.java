import java.util.Scanner;

public class P06_ThreeBrothers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double brotherOne = Double.parseDouble(scanner.nextLine());
        double brotherTwo = Double.parseDouble(scanner.nextLine());
        double brotherThree = Double.parseDouble(scanner.nextLine());
        double timeWeHave = Double.parseDouble(scanner.nextLine());

        double totalTimeSpend = 1 / (1 / brotherOne + 1 / brotherTwo + 1 / brotherThree);
        double totalCleanTime = totalTimeSpend + ((totalTimeSpend * 15) / 100);

        double canWeDoIt = timeWeHave - totalCleanTime;

        if (canWeDoIt >= 0) {
            System.out.printf("Cleaning time: %.2f\n", totalCleanTime);
            System.out.printf("Yes, there is a surprise - time left -> %.0f hours.", Math.floor(canWeDoIt));
        } else if (canWeDoIt < 0) {
            System.out.printf("Cleaning time: %.2f\n", totalCleanTime);
            System.out.printf("No, there isn't a surprise - shortage of time -> %.0f hours.", Math.ceil(Math.abs(canWeDoIt)));
        }
    }
}
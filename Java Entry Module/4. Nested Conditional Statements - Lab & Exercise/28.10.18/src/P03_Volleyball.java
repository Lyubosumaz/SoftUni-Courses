import java.util.Scanner;

public class P03_Volleyball {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String year = scanner.nextLine();
        int holidays = Integer.parseInt(scanner.nextLine());
        int homeWeekends = Integer.parseInt(scanner.nextLine());

        double freeHolidays = holidays * (2.0 / 3.0);
        double freeWeekends = (48 - homeWeekends) * (3.0 / 4.0);
        double freeTimeGames = freeHolidays + freeWeekends + homeWeekends;
        double result = -1;

        if (year.equals("leap")) {
            result = Math.floor(freeTimeGames + (freeTimeGames * 15.0) / 100.0);
        } else if (year.equals("normal")) {
            result = Math.floor(freeTimeGames);
        }
        System.out.printf("%.0f", result);
    }
}
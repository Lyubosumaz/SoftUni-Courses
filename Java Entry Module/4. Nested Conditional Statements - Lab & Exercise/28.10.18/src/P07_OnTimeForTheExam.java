import java.util.Scanner;

public class P07_OnTimeForTheExam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int hourOfExam = Integer.parseInt(scanner.nextLine());
        int minuteOfExam = Integer.parseInt(scanner.nextLine());
        int hourOfArrive = Integer.parseInt(scanner.nextLine());
        int minuteOfArrive = Integer.parseInt(scanner.nextLine());

        int examStart = (hourOfExam * 60) + minuteOfExam;
        int studentTime = (hourOfArrive * 60) + minuteOfArrive;
        int result = Math.max(examStart, studentTime) - Math.min(examStart, studentTime);
        int hour = result / 60;
        int minutes = result % 60;

        if (examStart == studentTime && result == 0) {
            System.out.println("On time");
        } else if (examStart > studentTime && result <= 30) {
            System.out.printf("On time\n%d minutes before the start", result);
        } else if (examStart > studentTime && result <= 59) {
            System.out.printf("Early\n%d minutes before the start", result);
        } else if (examStart > studentTime && result > 59) {
            System.out.printf("Early\n%d:%02d hours before the start", hour, minutes);
        } else if (examStart < studentTime && result <= 59) {
            System.out.printf("Late\n%d minutes after the start", result);
        } else if (examStart < studentTime && result > 59) {
            System.out.printf("Late\n%d:%02d hours after the start", hour, minutes);
        }
    }
}
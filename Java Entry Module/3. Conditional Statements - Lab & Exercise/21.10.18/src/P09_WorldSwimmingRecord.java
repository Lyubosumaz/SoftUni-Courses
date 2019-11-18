import java.util.Scanner;

public class P09_WorldSwimmingRecord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double worldRecord = Double.parseDouble(scanner.nextLine());
        //in meters:
        double distance = Double.parseDouble(scanner.nextLine());
        double timePerMeter = Double.parseDouble(scanner.nextLine());

        double myTimeIs = distance * timePerMeter;
        double myDelayIs = Math.floor(distance / 15) * 12.5;
        double totalTime = myTimeIs + myDelayIs;

        if (worldRecord <= totalTime) {
            System.out.printf("No, he failed! He was %.2f seconds slower.", (totalTime - worldRecord));
        } else if (worldRecord > totalTime) {
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", totalTime);
        }
    }
}
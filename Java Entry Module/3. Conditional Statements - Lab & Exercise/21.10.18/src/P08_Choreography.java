import java.util.Scanner;

public class P08_Choreography {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double numSteps = Double.parseDouble(scanner.nextLine());
        double numDancers = Double.parseDouble(scanner.nextLine());
        double numDays = Double.parseDouble(scanner.nextLine());

        double dayTraining = Math.ceil(((numSteps / numDays) / numSteps) * 100);
        double dancerTrain = dayTraining / numDancers;

        if (dayTraining <= 13) {
            System.out.printf("Yes, they will succeed in that goal! %.2f%%.", dancerTrain);
        } else if (dayTraining > 13) {
            System.out.printf("No, They will not succeed in that goal! Required %.2f%% steps to be learned per day.", dancerTrain);


        }
    }
}
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Seize_the_Fire_P02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] inputLineArray = scanner.nextLine().split("\\#");

        int water = Integer.parseInt(scanner.nextLine());

        List<String> output = new ArrayList<>();
        double effort = 0;
        int totalFire = 0;

        output.add("Cells:");
        for (int i = 0; i < inputLineArray.length; i++) {
            String[] inputCommand = inputLineArray[i].split(" = ");

            String typeOfFire = inputCommand[0];
            int valueOfCell = Integer.parseInt(inputCommand[1]);

            if (typeOfFire.equals("High") && valueOfCell >= 81 && valueOfCell <= 125) {
                if (water >= valueOfCell) {
                    water -= valueOfCell;
                    output.add(" - " + valueOfCell);
                    effort += (double) (valueOfCell * 25) / 100;
                    totalFire += valueOfCell;
                }

            } else if (typeOfFire.equals("Medium") && valueOfCell >= 51 && valueOfCell <= 80) {
                if (water >= valueOfCell) {
                    water -= valueOfCell;
                    output.add(" - " + valueOfCell);
                    effort += (double) (valueOfCell * 25) / 100;
                    totalFire += valueOfCell;
                }

            } else if (typeOfFire.equals("Low") && valueOfCell >= 1 && valueOfCell <= 50) {
                if (water >= valueOfCell) {
                    water -= valueOfCell;
                    output.add(" - " + valueOfCell);
                    effort += (double) (valueOfCell * 25) / 100;
                    totalFire += valueOfCell;
                }
            }
        }
        String[] outputArray = new String[output.size()];
        for (int i = 0; i < output.size(); i++) {
            outputArray[i] = output.get(i);
        }
        for (int i = 0; i < outputArray.length; i++) {
            System.out.println(outputArray[i]);
        }
        System.out.printf("Effort: %.2f\nTotal Fire: %d\n", effort, totalFire);
    }
}

import java.util.Scanner;

public class P05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int musala = 0;
        int montmlanc = 0;
        int kilimanjaro = 0;
        int K2 = 0;
        int everest = 0;

        int totalPeople = 0;
        int groups = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < groups; i++) {
            int people = Integer.parseInt(scanner.nextLine());
            if (people >= 1 && people <= 5) {
                musala += people;
            }
            if (people >= 6 && people <= 12) {
                montmlanc += people;
            }
            if (people >= 13 && people <= 25) {
                kilimanjaro += people;
            }
            if (people >= 26 && people <= 40) {
                K2 += people;
            }
            if (people >= 41) {
                everest += people;
            }
            totalPeople += people;
        }
        double percentagesMusala = ((double) musala / totalPeople) * 100;
        double percentagesMontmlanc = ((double) montmlanc / totalPeople)* 100;
        double percentagesKilimanjaro = ((double) kilimanjaro / totalPeople)* 100;
        double percentagesK2 = ((double) K2 / totalPeople) * 100;
        double percentagesEverest = ((double) everest / totalPeople) * 100;

        System.out.printf("%.2f%%\n%.2f%%\n%.2f%%\n%.2f%%\n%.2f%%", percentagesMusala, percentagesMontmlanc,
                percentagesKilimanjaro, percentagesK2, percentagesEverest);
    }
}

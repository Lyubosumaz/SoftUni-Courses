import java.util.Scanner;

public class P04_BachelorParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int moneyForArtist = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();

        int guestsCounter = 0;
        int allReservations = 0;
        while (!command.equalsIgnoreCase("The restaurant is full")) {
            int numberOfGuests = Integer.parseInt(command);
            guestsCounter += numberOfGuests;
            if (numberOfGuests >= 1 && numberOfGuests <= 4) {
                allReservations += (numberOfGuests * 100);
            } else if (numberOfGuests >= 5) {
                allReservations += (numberOfGuests * 70);
            }
            command = scanner.nextLine();
        }
        int diff = allReservations - moneyForArtist;
        if (allReservations >= moneyForArtist) {
            System.out.printf("You have %d guests and %d leva left.", guestsCounter, diff);
        } else {
            System.out.printf("You have %d guests and %d leva income, but no singer.", guestsCounter, allReservations);
        }
    }
}
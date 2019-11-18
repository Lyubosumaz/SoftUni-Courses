import java.util.Scanner;

public class P06_WeddingSeats {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        char sector = scanner.nextLine().charAt(0);
        int rowNumbers = Integer.parseInt(scanner.nextLine());
        int seatNumbers = Integer.parseInt(scanner.nextLine());

        int counter = 0;
        int oddSeats = 0;
        for (int i = 'A'; i <= sector; i++) {
            for (int rows = 1; rows <= rowNumbers; rows++) {
                if (rows % 2 == 0) {
                    oddSeats = seatNumbers + 2;
                } else {
                    oddSeats = seatNumbers;
                }
                for (int seats = 'a'; seats <= 'a' + oddSeats - 1; seats++) {
                    System.out.printf("%c%d%c\n", i, rows, seats);
                    counter++;
                }
            }
            rowNumbers++;
        }
        System.out.println(counter);
    }
}

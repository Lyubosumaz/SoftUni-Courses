import java.util.Scanner;

public class P10_Rage_Expenses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double lostGamesPrice = Double.parseDouble(scanner.nextLine());
        double headsetPrice = Double.parseDouble(scanner.nextLine());
        double mousePrice = Double.parseDouble(scanner.nextLine());
        double keyboardPrice = Double.parseDouble(scanner.nextLine());
        double displayPrice = Double.parseDouble(scanner.nextLine());

        double expenses = Math.floor(lostGamesPrice / 2) * headsetPrice + Math.floor(lostGamesPrice / 3) * mousePrice + Math.floor(lostGamesPrice / 6) * keyboardPrice + Math.floor(lostGamesPrice / 12) * displayPrice;
        System.out.printf("Rage expenses: %.2f lv.", expenses);
    }
}
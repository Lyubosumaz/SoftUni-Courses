import java.util.Scanner;

public class P02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int days = Integer.parseInt(scanner.nextLine());
        int food = Integer.parseInt(scanner.nextLine());
        double dogOne = Double.parseDouble(scanner.nextLine());
        double dogTwo = Double.parseDouble(scanner.nextLine());
        double dogThree = Double.parseDouble(scanner.nextLine());

        double dayFood = (dogOne + dogTwo + dogThree) * days;

        if (food >= dayFood) {
            System.out.printf("%.0f kilos of food left.", Math.floor(food - dayFood));
        } else {
            System.out.printf("%.0f more kilos of food are needed.", Math.ceil(dayFood - food));
        }
    }
}
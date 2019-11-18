import java.util.Scanner;

public class P04_SummerOutfit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int degrees = Integer.parseInt(scanner.nextLine());
        String dayIs = scanner.nextLine();

        if (dayIs.equals("Morning")) {
            if (degrees >= 10 && degrees <= 18) {
                System.out.printf("It's %d degrees, get your Sweatshirt and Sneakers.", degrees);
            } else if (degrees > 18 && degrees <= 24) {
                System.out.printf("It's %d degrees, get your Shirt and Moccasins.", degrees);
            } else if (degrees >= 25) {
                System.out.printf("It's %d degrees, get your T-Shirt and Sandals.", degrees);
            }
        } else if (dayIs.equals("Afternoon")) {
            if (degrees >= 10 && degrees <= 18) {
                System.out.printf("It's %d degrees, get your Shirt and Moccasins.", degrees);
            } else if (degrees > 18 && degrees <= 24) {
                System.out.printf("It's %d degrees, get your T-Shirt and Sandals.", degrees);
            } else if (degrees >= 25) {
                System.out.printf("It's %d degrees, get your Swim Suit and Barefoot.", degrees);
            }
        } else if (dayIs.equals("Evening")) {
            System.out.printf("It's %d degrees, get your Shirt and Moccasins.", degrees);
        }
    }
}
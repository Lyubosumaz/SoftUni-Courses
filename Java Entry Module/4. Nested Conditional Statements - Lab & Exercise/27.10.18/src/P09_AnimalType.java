import java.util.Scanner;

public class P09_AnimalType {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String userAnimal = scanner.nextLine();

        switch (userAnimal) {
            case "dog":
                System.out.println("mammal");
                break;
            case "crocodile":
            case "tortoise":
            case "snake":
                System.out.println("reptile");
                break;
            default:
                System.out.println("unknown");
                break;
        }
    }
}
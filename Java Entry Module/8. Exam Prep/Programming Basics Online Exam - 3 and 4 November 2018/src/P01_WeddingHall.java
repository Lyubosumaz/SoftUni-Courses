import java.util.Scanner;

public class P01_WeddingHall {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double length = Double.parseDouble(scanner.nextLine());
        double width = Double.parseDouble(scanner.nextLine());
        double bar = Double.parseDouble(scanner.nextLine());

        double totalHall = length * width;
        double totalBar = bar * bar;
        double totalDanceFloor = totalHall * 0.19;

        double totalSpace = totalHall - totalBar - totalDanceFloor;
        double numberOfGuests = Math.ceil(totalSpace / 3.2);

        System.out.println((int)numberOfGuests);
    }
}
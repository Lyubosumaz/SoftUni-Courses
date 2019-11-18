import java.util.Scanner;

public class P10_HotelRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String month = scanner.nextLine();
        int overnight = Integer.parseInt(scanner.nextLine());

        double totalStudio = -1;
        double studioCost = -1;

        double totalRoom = -1;
        double roomCost = -1;
        switch (month) {
            case "May":
            case "October":
                studioCost = 50.00;
                roomCost = 65.00;
                totalStudio = overnight * studioCost;
                totalRoom = overnight * roomCost;
                if (overnight > 7 && overnight <= 14) {
                    totalStudio = (overnight * studioCost) - ((overnight * studioCost) * 0.05);
                } else if (overnight > 14) {
                    totalStudio = (overnight * studioCost) - ((overnight * studioCost) * 0.30);
                }
                break;
            case "June":
            case "September":
                studioCost = 75.20;
                roomCost = 68.70;
                totalStudio = overnight * studioCost;
                totalRoom = overnight * roomCost;
                if (overnight > 14) {
                    totalStudio = (overnight * studioCost) - ((overnight * studioCost) * 0.20);
                }
                break;
            case "July":
            case "August":
                studioCost = 76.00;
                roomCost = 77.00;
                totalStudio = overnight * studioCost;
                totalRoom = overnight * roomCost;
                break;
            default:
                break;
        }
        if (overnight > 14) {
            totalRoom = (overnight * roomCost) - ((overnight * roomCost) * 0.10);
        }
        System.out.printf("Apartment: %.2f lv.\nStudio: %.2f lv.", totalRoom, totalStudio);
    }
}
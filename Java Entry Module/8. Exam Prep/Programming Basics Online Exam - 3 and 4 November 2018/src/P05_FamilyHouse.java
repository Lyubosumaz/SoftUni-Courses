import java.util.Scanner;

public class P05_FamilyHouse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double totalElectricity = 0;
        double totalWater = 0;
        double totalInternet = 0;
        double totalOther = 0;
        int month = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < month; i++) {
            double electricityBill = Double.parseDouble(scanner.nextLine());
            totalElectricity += electricityBill;
            totalWater += 20;
            totalInternet += 15;
            totalOther += (electricityBill + 20 + 15) + ((electricityBill + 20 + 15) * 20) / 100;

        }
        double average = (totalElectricity + totalWater + totalInternet + totalOther) / month;
        System.out.printf("Electricity: %.2f lv\nWater: %.2f lv\nInternet: %.2f lv\nOther: %.2f lv\nAverage: %.2f lv",
                totalElectricity, totalWater, totalInternet, totalOther, average);
    }
}
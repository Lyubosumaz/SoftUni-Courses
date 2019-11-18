import java.util.Scanner;

public class P03_FootballSouvenirs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String country = scanner.nextLine();
        String souvenirs = scanner.nextLine();
        int purchasedSouvenirs = Integer.parseInt(scanner.nextLine());

        boolean invalid = false;
        if (!(country.equals("Argentina") || country.equals("Brazil") ||
                country.equals("Croatia") || country.equals("Denmark"))) {
            System.out.println("Invalid country!");
            invalid = true;
        }
        if (!(souvenirs.equals("flags") || souvenirs.equals("caps") ||
                souvenirs.equals("posters") || souvenirs.equals("stickers"))) {
            System.out.println("Invalid stock!");
            invalid = true;
        }

        double total = 0;
        switch (country) {
            case "Argentina":
                switch (souvenirs) {
                    case "flags":
                        total += 3.25;
                        break;
                    case "caps":
                        total += 7.20;
                        break;
                    case "posters":
                        total += 5.10;
                        break;
                    case "stickers":
                        total += 1.25;
                        break;
                }
                break;
            case "Brazil":
                switch (souvenirs) {
                    case "flags":
                        total += 4.20;
                        break;
                    case "caps":
                        total += 8.50;
                        break;
                    case "posters":
                        total += 5.35;
                        break;
                    case "stickers":
                        total += 1.20;
                        break;
                }
                break;
            case "Croatia":
                switch (souvenirs) {
                    case "flags":
                        total += 2.75;
                        break;
                    case "caps":
                        total += 6.90;
                        break;
                    case "posters":
                        total += 4.95;
                        break;
                    case "stickers":
                        total += 1.10;
                        break;
                }
                break;
            case "Denmark":
                switch (souvenirs) {
                    case "flags":
                        total += 3.10;
                        break;
                    case "caps":
                        total += 6.50;
                        break;
                    case "posters":
                        total += 4.80;
                        break;
                    case "stickers":
                        total += 0.90;
                        break;
                }
                break;
        }
        if (!invalid) {
            total *= purchasedSouvenirs;
            System.out.printf("Pepi bought %d %s of %s for %.2f lv.", purchasedSouvenirs, souvenirs, country, total);
        }
    }
}
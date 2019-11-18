import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Party_Profit_P01 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int partySize = Integer.parseInt(reader.readLine());
        int days = Integer.parseInt(reader.readLine());

        int totalCoins = 0;

        int everyThird = 0;
        int everyFifth = 0;
        int everyTenth = 0;
        int everyFifteenth = 0;

        if (partySize == 0 && days == 0) {
            System.out.println("0 companions received 0 coins each.");
            return;
        } else {
            while (days-- > 0) {
                everyThird++;
                everyFifth++;
                everyTenth++;
                everyFifteenth++;

                totalCoins += 50;

                if (everyTenth == 10) {
                    partySize -= 2;
                    everyTenth = 0;
                }
                if (everyFifteenth == 15) {
                    partySize += 5;
                    everyFifteenth = 0;
                }

                if (everyFifth == 5 && everyThird == 3) {
                    int perPersonLoot = partySize * 20;
                    totalCoins += perPersonLoot;
                    int perPersonWater = partySize * 5;
                    totalCoins -= perPersonWater;

                    everyFifth = 0;
                    everyThird = 0;
                }

                if (everyThird == 3 && everyFifth != 5) {
                    int perPersonWater = partySize * 3;
                    totalCoins -= perPersonWater;
                    everyThird = 0;
                }

                if (everyFifth == 5 && everyThird != 3) {
                    int perPersonLoot = partySize * 20;
                    totalCoins += perPersonLoot;
                    everyFifth = 0;
                }
                int perPersonFood = partySize * 2;
                totalCoins -= perPersonFood;
            }
        }
        double result = Math.ceil(totalCoins / partySize);
        System.out.printf("%d companions received %.0f coins each.", partySize, result);
    }
}
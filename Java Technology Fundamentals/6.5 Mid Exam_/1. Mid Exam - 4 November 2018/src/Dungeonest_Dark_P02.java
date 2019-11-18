import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Dungeonest_Dark_P02 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String[] rooms = reader.readLine().split("\\|");
        int health = 100;
        int loot = 0;
        int best = 1;

        for (int i = 0; i < rooms.length; i++) {
            String[] roomIs = rooms[i].split("\\s+");
            String romeName = roomIs[0];
            int romeHave = Integer.parseInt(roomIs[1]);

            switch (romeName) {
                case "potion":
                    int healAmount = romeHave;
                    if (healAmount + health >= 100) {
                        System.out.printf("You healed for %s hp.\n", 100 - health);
                        health = 100;
                        System.out.printf("Current health: %d hp.\n", health);
                    }
                    if ((health != 100 && (healAmount + health < 100))) {
                        System.out.printf("You healed for %s hp.\n", romeHave);
                        health += healAmount;
                        System.out.printf("Current health: %d hp.\n", health);
                    }
                    break;
                case "chest":
                    int coins = romeHave;
                    loot += coins;
                    System.out.printf("You found %d coins.\n", coins);
                    break;
                default:
                    String monsterName = romeName;
                    int damage = romeHave;
                    if (health - damage > 0) {
                        health -= damage;
                        System.out.printf("You slayed %s.\n", monsterName);
                    }
                    if (health - damage <= 0) {
                        health = 0;
                        System.out.printf("You died! Killed by %s.\n", monsterName);
                        System.out.printf("Best room: %d\n", best);
                        return;
                    }
                    break;
            }
            best++;
        }
        if (health>0){
            System.out.printf("You've made it!\nCoins: %d\nHealth: %d", loot, health);
        }
    }
}
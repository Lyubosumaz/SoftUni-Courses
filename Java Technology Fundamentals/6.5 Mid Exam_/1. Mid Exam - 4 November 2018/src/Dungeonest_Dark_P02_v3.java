import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Dungeonest_Dark_P02_v3 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String[] rooms = reader.readLine().split("\\|");
        int health = 100;
        int loot = 0;
        int best = 0;

        for (int i = 0; i < rooms.length; i++) {
            best++;

            String[] roomIs = rooms[i].split("\\s+");
            String roomName = roomIs[0];
            int roomHave = Integer.parseInt(roomIs[1]);

            switch (roomName) {
                case "potion":
                    if (roomHave + health > 100) {
                        roomHave = 100 - health;
                    }
                    health += roomHave;
                    System.out.printf("You healed for %s hp.\n", roomHave);
                    System.out.printf("Current health: %d hp.\n", health);
                    break;
                case "chest":
                    System.out.printf("You found %d coins.\n", roomHave);
                    loot += roomHave;
                    break;
                default:
                    String monsterName = roomName;
                    int monsterDamage = roomHave;
                    health -= monsterDamage;
                    if (health > 0) {
                        System.out.printf("You slayed %s.\n", monsterName);
                    } else {
                        System.out.printf("You died! Killed by %s.\n", monsterName);
                        System.out.printf("Best room: %d\n", best);
                        return;
                    }
                    break;
            }
        }
        if (health > 0) {
            System.out.printf("You've made it!\nCoins: %d\nHealth: %d", loot, health);
        }
    }
}
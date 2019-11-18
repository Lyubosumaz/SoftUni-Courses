import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Nether_Realms_P13v02 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String[] input = reader.readLine().split(",'\\s*");

        Pattern patternAlphabet = Pattern.compile("[^\\d\\-+*\\/.]");
        Pattern patternDigits = Pattern.compile("[-+]?\\d*\\.?\\d+");

        List<Demon> demons = new ArrayList<>();
        String[] array = new String[input.length];

        for (String text : input) {

            text = text.trim();

            Matcher matcherAlphabet = patternAlphabet.matcher(text);
            Matcher matcherDigits = patternDigits.matcher(text);

            int health = 0;
            double damage = 0.0;
            Demon demon = new Demon(text, health, damage);

            while (matcherAlphabet.find()) {
                health += matcherAlphabet.group(0).charAt(0);
                demon.setHealth(health);
            }
            while (matcherDigits.find()) {
                damage += Double.parseDouble(matcherDigits.group());
            }

            for (int i = 0; i < text.length(); i++) {
                if (text.charAt(i) == '*') {
                    damage *= 2;
                } else if (text.charAt(i) == '/') {
                    if (damage != 0) {
                        damage /= 2;
                    }
                }
                demon.setDamage(damage);
            }
            for (int i = 0; i < input.length; i++) {
                demons.add(i, demon);
            }
        }
        demons.stream().sorted(Comparator.comparing(Demon::getName)).forEach(System.out::println);
    }

    public static class Demon {
        private String name;
        private Integer health;
        private Double damage;

        public Demon(String name, Integer health, Double damage) {
            this.name = name;
            this.health = health;
            this.damage = damage;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getHealth() {
            return health;
        }

        public void setHealth(Integer health) {
            this.health = health;
        }

        public Double getDamage() {
            return damage;
        }

        public void setDamage(Double damage) {
            this.damage = damage;
        }

        @Override
        public String toString() {
            return String.format("%s - %d health, %.2f damage", getName(), getHealth(), getDamage());
        }
    }
}
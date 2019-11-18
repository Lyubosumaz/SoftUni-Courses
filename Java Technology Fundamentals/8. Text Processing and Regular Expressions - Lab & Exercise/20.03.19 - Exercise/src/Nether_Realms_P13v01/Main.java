package Nether_Realms_P13v01;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String[] input = reader.readLine().split(",'\\s*");

        Pattern patternAlphabet = Pattern.compile("[^\\d\\-+*\\/.]");
        Pattern patternDigits = Pattern.compile("[-+]?\\d*\\.?\\d+");

        List<Demon> demons = new ArrayList<>();

        for (String text : input) {

            text = text.trim();

            Matcher matcherAlphabet = patternAlphabet.matcher(text);
            Matcher matcherDigits = patternDigits.matcher(text);

            int health = 0;
            double damage = 0.0;

            while (matcherAlphabet.find()) {
                health += matcherAlphabet.group(0).charAt(0);
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
            }
            Demon demon = new Demon(text, health, damage);
        }
        demons.stream().sorted(Comparator.comparing(Demon::getName)).forEach(System.out::println);
    }
}
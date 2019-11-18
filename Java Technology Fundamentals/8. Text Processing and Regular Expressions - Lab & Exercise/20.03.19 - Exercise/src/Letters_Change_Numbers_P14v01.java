import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Letters_Change_Numbers_P14v01 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String[] input = reader.readLine().split("\\s+");

        Pattern pattern = Pattern.compile("([A-Za-z])(\\d+)([A-Za-z])");

        String alphabet = " abcdefghijklmnopqrstuvwxyz";

        double sum = 0.0;

        for (String text : input) {
            Matcher matcher = pattern.matcher(text);

            while (matcher.find()) {
                String lestSymbol = matcher.group(1);
                double number = Double.parseDouble(matcher.group(2));
                String rightSymbol = matcher.group(3);

                if (lestSymbol.equals(lestSymbol.toLowerCase())) {
                    number *= alphabet.indexOf(lestSymbol.toLowerCase());
                } else {
                    if (number != 0) {
                        number /= alphabet.indexOf(lestSymbol.toLowerCase());
                    }
                }
                if (rightSymbol.equals(rightSymbol.toLowerCase())) {
                    number += alphabet.indexOf(rightSymbol.toLowerCase());
                } else {
                    number -= alphabet.indexOf(rightSymbol.toLowerCase());
                }
                sum += number;
            }
        }
        System.out.println(String.format("%.2f", sum));
    }
}
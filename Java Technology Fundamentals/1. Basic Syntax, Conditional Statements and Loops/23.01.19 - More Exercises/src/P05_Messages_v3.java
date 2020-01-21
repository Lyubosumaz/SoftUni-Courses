import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P05_Messages_v3 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String alphabet = "abcdefghijklmnopqrstuvwxyz";
        int wordLength = Integer.parseInt(reader.readLine());
        StringBuilder message = new StringBuilder();

        for (int i = 0; i < wordLength; i++) {
            String number = reader.readLine();

            int digit = Integer.parseInt(String.valueOf(number.charAt(0)));
            int offset = ((digit - 2) * 3) + number.length();

            if (digit < 8) {
                offset--;
            }

            if (digit == 0) {
                message.append(" ");
            } else {
                message.append(alphabet.charAt(offset));
            }
        }

        System.out.println(message);
    }
}

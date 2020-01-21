import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P05_Messages_v4 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int wordLength = Integer.parseInt(reader.readLine());
        StringBuilder message = new StringBuilder();

        for (int i = 0; i < wordLength; i++) {
            String number = reader.readLine();

            int digit = Integer.parseInt(String.valueOf(number.charAt(0)));
            int offset = ((digit - 2) * 3);

            if (digit < 8) {
                offset--;
            }

            if (digit == 0) {
                message.append(Character.toChars(32));
            } else {
                message.append(Character.toChars((offset + 97) + number.length()));
            }
        }

        System.out.println(message);
    }
}

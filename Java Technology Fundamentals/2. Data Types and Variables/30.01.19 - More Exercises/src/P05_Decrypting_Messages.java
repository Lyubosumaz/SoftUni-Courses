import java.io.BufferedReader;
        import java.io.IOException;
        import java.io.InputStreamReader;

public class P05_Decrypting_Messages {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int key = Integer.parseInt(reader.readLine());
        int inputLines = Integer.parseInt(reader.readLine());
        String output = "";
        for (int i = 0; i < inputLines; i++) {
            char message = reader.readLine().charAt(0);
            output += (char) (message + key);
        }

        System.out.println(output);
    }
}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P01_Ages_v2 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int age = Integer.parseInt(reader.readLine());
        StringBuilder output = new StringBuilder();

        if (age >= 0 && age <= 2) {
            output.append("baby");
        } else if (age >= 3 && age <= 13) {
            output.append("child");
        } else if (age >= 14 && age <= 19) {
            output.append("teenager");
        } else if (age >= 20 && age <= 65) {
            output.append("adult");
        } else if (age >= 66) {
            output.append("elder");
        }

        System.out.println(output);
    }
}

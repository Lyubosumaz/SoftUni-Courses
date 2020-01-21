import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P03_Passed_Failed_v2 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        if (Double.parseDouble(reader.readLine()) >= 3) {
            System.out.print("Passed!");
        } else {
            System.out.print("Failed!");
        }
    }
}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;

public class P01_Sort_Numbers_v2 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        Integer[] inputNumbers = new Integer[3];
        for (int i = 0; i < 3; i++) {
            inputNumbers[i] = Integer.parseInt(reader.readLine());
        }

        Arrays.sort(inputNumbers, Collections.reverseOrder());

        for (Integer inputNumber : inputNumbers) {
            System.out.println(inputNumber);
        }
    }
}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P09_Sum_of_Odd_Numbers_v2 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int num = Integer.parseInt(reader.readLine());
        int oddNumber = -1;
        int sum = 0;
        for (int i = num; i > 0; i--) {
            System.out.printf("%d\n", oddNumber += 2);
            sum += oddNumber;
        }

        System.out.printf("Sum: %d", sum);
    }
}

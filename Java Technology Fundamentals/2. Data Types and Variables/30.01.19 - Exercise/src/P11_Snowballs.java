import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P11_Snowballs {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        int inputNum = Integer.parseInt(reader.readLine());
        double snowPlaceholder = 0;
        double timePlaceholder = 0;
        double qualityPlaceholder = 0;
        double valuePlaceholder = 0;

        while (inputNum-- > 0) {
            int snowballSnow = Integer.parseInt(reader.readLine());
            int snowballTime = Integer.parseInt(reader.readLine());
            int snowballQuality = Integer.parseInt(reader.readLine());
            double snowballValue = Math.pow((double) snowballSnow / snowballTime, snowballQuality);

            if (!(valuePlaceholder > snowballValue)) {
                snowPlaceholder = snowballSnow;
                timePlaceholder = snowballTime;
                valuePlaceholder = snowballValue;
                qualityPlaceholder = snowballQuality;
            }
        }

        System.out.printf("%.0f : %.0f = %.0f (%.0f)", snowPlaceholder, timePlaceholder, valuePlaceholder, qualityPlaceholder);
    }
}

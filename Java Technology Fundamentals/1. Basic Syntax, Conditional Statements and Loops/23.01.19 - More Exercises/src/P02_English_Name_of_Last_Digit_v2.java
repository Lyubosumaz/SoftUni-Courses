import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P02_English_Name_of_Last_Digit_v2 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String num = reader.readLine();
        String lastDigit = num.substring(num.length() - 1);
        StringBuilder output = new StringBuilder();

        switch (lastDigit) {
            case "0":
                output.append("zero");
                break;
            case "1":
                output.append("one");
                break;
            case "2":
                output.append("two");
                break;
            case "3":
                output.append("three");
                break;
            case "4":
                output.append("four");
                break;
            case "5":
                output.append("five");
                break;
            case "6":
                output.append("six");
                break;
            case "7":
                output.append("seven");
                break;
            case "8":
                output.append("eight");
                break;
            case "9":
                output.append("nine");
                break;
            default:
                break;
        }

        System.out.println(output);
    }
}

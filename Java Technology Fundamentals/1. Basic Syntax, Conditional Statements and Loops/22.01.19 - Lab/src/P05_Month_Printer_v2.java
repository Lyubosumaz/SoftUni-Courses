import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class P05_Month_Printer_v2 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        StringBuilder month = new StringBuilder();
        switch (Integer.parseInt(reader.readLine())) {
            case 1:
                month.append("January");
                break;
            case 2:
                month.append("February");
                break;
            case 3:
                month.append("March");
                break;
            case 4:
                month.append("April");
                break;
            case 5:
                month.append("May");
                break;
            case 6:
                month.append("June");
                break;
            case 7:
                month.append("July");
                break;
            case 8:
                month.append("August");
                break;
            case 9:
                month.append("September");
                break;
            case 10:
                month.append("October");
                break;
            case 11:
                month.append("November");
                break;
            case 12:
                month.append("December");
                break;
            default:
                month.append("Error!");
                break;
        }

        System.out.println(month);
    }
}

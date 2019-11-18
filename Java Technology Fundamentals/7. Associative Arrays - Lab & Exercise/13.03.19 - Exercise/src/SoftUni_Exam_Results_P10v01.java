import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedHashMap;

public class SoftUni_Exam_Results_P10v01 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        LinkedHashMap<String, Integer> results = new LinkedHashMap<>();
        LinkedHashMap<String, Integer> submissions = new LinkedHashMap<>();

        String input = "";

        while (!"exam finished".equals(input = reader.readLine())) {
            String[] data = input.split("\\s*-\\s*");

            if (data.length == 3) {
                String username = data[0];
                String language = data[1];
                int points = Integer.parseInt(data[2]);

                if (!results.containsKey(username)) {
                    results.put(username, points);
                }
                if (results.get(username) < points) {
                    results.put(username, points);
                }
                if (!submissions.containsKey(language)) {
                    submissions.put(language, 0);
                }
                submissions.put(language, submissions.get(language) + 1);
            } else {
                results.remove(data[0]);
            }
        }
        System.out.println("Results:");
        results.entrySet().stream().sorted((e1, e2) -> {
            int sort = Integer.compare(e2.getValue(), e1.getValue());
            if (sort == 0) {
                sort = e1.getKey().compareTo(e2.getKey());
            }
            return sort;
        }).forEach(e -> {
            System.out.println(String.format("%s | %d", e.getKey(), e.getValue()));
        });

        System.out.println("Submissions:");
        submissions.entrySet().stream().sorted((e1, e2) -> {
            int sort = Integer.compare(e2.getValue(), e1.getValue());
            if (sort == 0) {
                sort = e1.getKey().compareTo(e2.getKey());
            }
            return sort;
        }).forEach(e -> {
            System.out.println(String.format("%s - %d", e.getKey(), e.getValue()));
        });
    }
}

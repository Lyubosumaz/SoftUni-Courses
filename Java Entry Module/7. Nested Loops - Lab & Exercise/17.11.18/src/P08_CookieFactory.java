import java.util.Scanner;

public class P08_CookieFactory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        boolean flour = false;
        boolean eggs = false;
        boolean sugar = false;
        int batches = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= batches; i++) {
            String components = scanner.nextLine();
            while (!components.equalsIgnoreCase("Bake!")) {
                if (components.equalsIgnoreCase("flour")) {
                    flour = true;
                } else if (components.equalsIgnoreCase("eggs")) {
                    eggs = true;
                } else if (components.equalsIgnoreCase("sugar")) {
                    sugar = true;
                }
                components = scanner.nextLine();
            }
            if (flour && eggs && sugar) {
                System.out.printf("Baking batch number %d...\n", i);
                flour = false;
                eggs = false;
                sugar = false;
            } else {
                System.out.println("The batter should contain flour, eggs and sugar!");
                i--;
            }
        }
    }
}

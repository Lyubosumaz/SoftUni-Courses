import java.util.Scanner;

class P03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String unknown = scanner.nextLine();

        if (unknown.equals("banana") || unknown.equals("apple") || unknown.equals("kiwi") || unknown.equals("cherry") || unknown.equals("lemon") || unknown.equals("grapes")) {
            System.out.println("fruit");
        } else if (unknown.equals("tomato") || unknown.equals("cucumber") || unknown.equals("pepper") || unknown.equals("carrot")) {
            System.out.println("vegetable");
        } else {
            System.out.println("unknown");
        }
    }
}
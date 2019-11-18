import java.util.Scanner;

public class P02_OldBooks {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String bookName = scanner.nextLine();
        int libraryCapacity = Integer.parseInt(scanner.nextLine());

        String currentBook = "";
        int count = 0;
        boolean found = false;

        while (!found && libraryCapacity > count) {
            currentBook = scanner.nextLine();
            if (currentBook.equals(bookName)) {
                found = true;
            } else {
                count++;
            }
        }
        if (found == true) {
            System.out.printf("You checked %d books and found it.", count);
        } else {
            System.out.printf("The book you search is not here!\nYou checked %d books.", count);
        }
    }
}
import java.util.Scanner;

public class P07_SumPrimeNonPrime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int prime = 0;
        int nonPrime = 0;


        String input = scanner.nextLine();
        while (!input.equalsIgnoreCase("STOP")) {
            int num = Integer.parseInt(input);
            if (num < 0) {
                System.out.println("Number is negative.");
                input = scanner.nextLine();
                continue;
            }
            int current;
            boolean isPrime = true;
            for (int i = 2; i < num; i++) {
                current = num % i;
                if (current == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime && num > 1) {
                prime += num;
            }  else {
                nonPrime += num;
            }
            input = scanner.nextLine();
        }
        System.out.printf("Sum of all prime numbers is: %d\n", prime);
        System.out.printf("Sum of all non prime numbers is: %d", nonPrime);
    }
}

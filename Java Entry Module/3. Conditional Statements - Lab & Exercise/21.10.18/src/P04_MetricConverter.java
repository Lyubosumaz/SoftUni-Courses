import java.util.Scanner;

public class P04_MetricConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //One Meter
        double m = 1;               //meter to meter
        double mm = 1000;           //meter to millimeter
        double cm = 100;            //meter to centimeter
        double mi = 0.000621371192; //meter to miles
        double in = 39.3700787;     //meter to inches
        double km = 0.001;          //meter to kilometers
        double ft = 3.2808399;      //meter to feet
        double yd = 1.0936133;      //meters to yards

        double num = Double.parseDouble(scanner.nextLine());
        String fromThis = scanner.nextLine().toLowerCase();
        String convertTo = scanner.nextLine().toLowerCase();

        //m
        if (fromThis.equals("m") && convertTo.equals("km")) {
            System.out.printf("%.8f", (num * km) / m);
        } else if (fromThis.equals("m") && convertTo.equals("mm")) {
            System.out.printf("%.8f", (num * mm) / m);
        } else if (fromThis.equals("m") && convertTo.equals("cm")) {
            System.out.printf("%.8f", (num * cm) / m);
        } else if (fromThis.equals("m") && convertTo.equals("mi")) {
            System.out.printf("%.8f", (num * mi) / m);
        } else if (fromThis.equals("m") && convertTo.equals("in")) {
            System.out.printf("%.8f", (num * in) / m);
        } else if (fromThis.equals("m") && convertTo.equals("ft")) {
            System.out.printf("%.8f", (num * ft) / m);
        } else if (fromThis.equals("m") && convertTo.equals("yd")) {
            System.out.printf("%.8f", (num * yd) / m);
        } else if (fromThis.equals("m") && convertTo.equals("m")) {
            System.out.printf("%.8f", (num * m) / m);
        }
        //mm
        if (fromThis.equals("mm") && convertTo.equals("m")) {
            System.out.printf("%.8f", (num * m) / mm);
        } else if (fromThis.equals("mm") && convertTo.equals("km")) {
            System.out.printf("%.8f", (num * km) / mm);
        } else if (fromThis.equals("mm") && convertTo.equals("cm")) {
            System.out.printf("%.8f", (num * cm) / mm);
        } else if (fromThis.equals("mm") && convertTo.equals("mi")) {
            System.out.printf("%.8f", (num * mi) / mm);
        } else if (fromThis.equals("mm") && convertTo.equals("in")) {
            System.out.printf("%.8f", (num * in) / mm);
        } else if (fromThis.equals("mm") && convertTo.equals("ft")) {
            System.out.printf("%.8f", (num * ft) / mm);
        } else if (fromThis.equals("mm") && convertTo.equals("yd")) {
            System.out.printf("%.8f", (num * yd) / mm);
        } else if (fromThis.equals("mm") && convertTo.equals("mm")) {
            System.out.printf("%.8f", (num * mm) / mm);
        }
        //cm
        if (fromThis.equals("cm") && convertTo.equals("m")) {
            System.out.printf("%.8f", (num * m) / cm);
        } else if (fromThis.equals("cm") && convertTo.equals("mm")) {
            System.out.printf("%.8f", (num * mm) / cm);
        } else if (fromThis.equals("cm") && convertTo.equals("km")) {
            System.out.printf("%.8f", (num * km) / cm);
        } else if (fromThis.equals("cm") && convertTo.equals("mi")) {
            System.out.printf("%.8f", (num * mi) / cm);
        } else if (fromThis.equals("cm") && convertTo.equals("in")) {
            System.out.printf("%.8f", (num * in) / cm);
        } else if (fromThis.equals("cm") && convertTo.equals("ft")) {
            System.out.printf("%.8f", (num * ft) / cm);
        } else if (fromThis.equals("cm") && convertTo.equals("yd")) {
            System.out.printf("%.8f", (num * yd) / cm);
        } else if (fromThis.equals("cm") && convertTo.equals("cm")) {
            System.out.printf("%.8f", (num * cm) / cm);
        }
        //mi
        if (fromThis.equals("mi") && convertTo.equals("m")) {
            System.out.printf("%.8f", (num * m) / mi);
        } else if (fromThis.equals("mi") && convertTo.equals("mm")) {
            System.out.printf("%.8f", (num * mm) / mi);
        } else if (fromThis.equals("mi") && convertTo.equals("cm")) {
            System.out.printf("%.8f", (num * cm) / mi);
        } else if (fromThis.equals("mi") && convertTo.equals("km")) {
            System.out.printf("%.8f", (num * km) / mi);
        } else if (fromThis.equals("mi") && convertTo.equals("in")) {
            System.out.printf("%.8f", (num * in) / mi);
        } else if (fromThis.equals("mi") && convertTo.equals("ft")) {
            System.out.printf("%.8f", (num * ft) / mi);
        } else if (fromThis.equals("mi") && convertTo.equals("yd")) {
            System.out.printf("%.8f", (num * yd) / mi);
        } else if (fromThis.equals("mi") && convertTo.equals("mi")) {
            System.out.printf("%.8f", (num * mi) / mi);
        }
        //in
        if (fromThis.equals("in") && convertTo.equals("m")) {
            System.out.printf("%.8f", (num * m) / in);
        } else if (fromThis.equals("in") && convertTo.equals("mm")) {
            System.out.printf("%.8f", (num * mm) / in);
        } else if (fromThis.equals("in") && convertTo.equals("cm")) {
            System.out.printf("%.8f", (num * cm) / in);
        } else if (fromThis.equals("in") && convertTo.equals("mi")) {
            System.out.printf("%.8f", (num * mi) / in);
        } else if (fromThis.equals("in") && convertTo.equals("km")) {
            System.out.printf("%.8f", (num * km) / in);
        } else if (fromThis.equals("in") && convertTo.equals("ft")) {
            System.out.printf("%.8f", (num * ft) / in);
        } else if (fromThis.equals("in") && convertTo.equals("yd")) {
            System.out.printf("%.8f", (num * yd) / in);
        } else if (fromThis.equals("in") && convertTo.equals("in")) {
            System.out.printf("%.8f", (num * in) / in);
        }
        //km
        if (fromThis.equals("km") && convertTo.equals("m")) {
            System.out.printf("%.8f", (num * m) / km);
        } else if (fromThis.equals("km") && convertTo.equals("mm")) {
            System.out.printf("%.8f", (num * mm) / km);
        } else if (fromThis.equals("km") && convertTo.equals("cm")) {
            System.out.printf("%.8f", (num * cm) / km);
        } else if (fromThis.equals("km") && convertTo.equals("mi")) {
            System.out.printf("%.8f", (num * mi) / km);
        } else if (fromThis.equals("km") && convertTo.equals("in")) {
            System.out.printf("%.8f", (num * in) / km);
        } else if (fromThis.equals("km") && convertTo.equals("ft")) {
            System.out.printf("%.8f", (num * ft) / km);
        } else if (fromThis.equals("km") && convertTo.equals("yd")) {
            System.out.printf("%.8f", (num * yd) / km);
        } else if (fromThis.equals("km") && convertTo.equals("km")) {
            System.out.printf("%.8f", (num * km) / km);
        }
        //ft
        if (fromThis.equals("ft") && convertTo.equals("m")) {
            System.out.printf("%.8f", (num * m) / ft);
        } else if (fromThis.equals("ft") && convertTo.equals("mm")) {
            System.out.printf("%.8f", (num * mm) / ft);
        } else if (fromThis.equals("ft") && convertTo.equals("cm")) {
            System.out.printf("%.8f", (num * cm) / ft);
        } else if (fromThis.equals("ft") && convertTo.equals("mi")) {
            System.out.printf("%.8f", (num * mi) / ft);
        } else if (fromThis.equals("ft") && convertTo.equals("in")) {
            System.out.printf("%.8f", (num * in) / ft);
        } else if (fromThis.equals("ft") && convertTo.equals("km")) {
            System.out.printf("%.8f", (num * km) / ft);
        } else if (fromThis.equals("ft") && convertTo.equals("yd")) {
            System.out.printf("%.8f", (num * yd) / ft);
        } else if (fromThis.equals("ft") && convertTo.equals("ft")) {
            System.out.printf("%.8f", (num * ft) / ft);
        }
        //yd
        if (fromThis.equals("yd") && convertTo.equals("m")) {
            System.out.printf("%.8f", (num * m) / yd);
        } else if (fromThis.equals("yd") && convertTo.equals("mm")) {
            System.out.printf("%.8f", (num * mm) / yd);
        } else if (fromThis.equals("yd") && convertTo.equals("cm")) {
            System.out.printf("%.8f", (num * cm) / yd);
        } else if (fromThis.equals("yd") && convertTo.equals("mi")) {
            System.out.printf("%.8f", (num * mi) / yd);
        } else if (fromThis.equals("yd") && convertTo.equals("in")) {
            System.out.printf("%.8f", (num * in) / yd);
        } else if (fromThis.equals("yd") && convertTo.equals("ft")) {
            System.out.printf("%.8f", (num * ft) / yd);
        } else if (fromThis.equals("yd") && convertTo.equals("km")) {
            System.out.printf("%.8f", (num * km) / yd);
        } else if (fromThis.equals("yd") && convertTo.equals("yd")) {
            System.out.printf("%.8f", (num * yd) / yd);
        }
    }
}
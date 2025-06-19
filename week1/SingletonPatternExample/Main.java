package week1.SingletonPatternExample;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First log message.");
        logger2.log("Second log message.");

        if (logger1 == logger2) {
            System.out.println("Both references point to the same instance.");
        } else {
            System.out.println("Different instances exist.");
        }
    }
}

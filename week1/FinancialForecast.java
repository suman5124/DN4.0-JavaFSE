package week1;
public class FinancialForecast {

    
    public static double forecast(double pv, double rate, int years) {
        if (years == 0) {
            return pv;
        } else {
            return forecast(pv, rate, years - 1) * (1 + rate);
        }
    }

    public static void main(String[] args) {
        double presentValue = 10000;
        double annualGrowthRate = 0.08; // 8%
        int years = 5;

        double futureValue = forecast(presentValue, annualGrowthRate, years);

        System.out.printf("Future Value after %d years: ₹%.2f\n", years, futureValue);
    }
}

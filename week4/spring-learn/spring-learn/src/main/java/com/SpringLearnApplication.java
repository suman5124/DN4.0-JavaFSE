package com;

import com.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class SpringLearnApplication {
    public static void main(String[] args) {
        System.out.println("START");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        displayCountries(context);

        System.out.println("END");
    }

    public static void displayCountries(ApplicationContext context) {
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        for (Country country : countryList) {
            System.out.println(country.getName());
        }
    }
}

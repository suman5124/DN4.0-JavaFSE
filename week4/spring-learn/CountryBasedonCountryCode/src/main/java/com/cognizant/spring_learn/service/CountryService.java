package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    public Country getCountry(String code) {
        // Load the Spring context from the XML file
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {

            // Retrieve the bean named "countryList" from the XML
            List<Country> countryList = (List<Country>) context.getBean("countryList");

            // Search for a country matching the given code (case-insensitive)
            return countryList.stream()
                    .filter(c -> c.getCode().equalsIgnoreCase(code))
                    .findFirst()
                    .orElse(null);
        }
    }
}

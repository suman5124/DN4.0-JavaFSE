package org.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggerExample.class);

    public static void main(String[] args) {

        logger.warn("This is a WARNING message. Something might go wrong.");

        try {
            int x = 10 / 0; // Will cause ArithmeticException
        } catch (Exception e) {
            logger.error("An ERROR occurred: Division by zero", e);
        }
    }
}

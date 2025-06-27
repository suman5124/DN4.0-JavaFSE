package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class MathUtillAAAtest {

    MathUtils mathUtils;


    @Before
    public void setUp() {
        mathUtils = new MathUtils();
        System.out.println("Setup complete");
    }


    @After
    public void tearDown() {
        mathUtils = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testMultiply() {

        int result = mathUtils.multiply(3, 4);


        assertEquals(12, result);
    }

    @Test
    public void testIsEven() {

        boolean result = mathUtils.isEven(6);

        assertTrue(result);
    }

    @Test
    public void testGreet() {
        String message = mathUtils.greet("Suman");

        assertEquals("Hello, Suman", message);
    }
}

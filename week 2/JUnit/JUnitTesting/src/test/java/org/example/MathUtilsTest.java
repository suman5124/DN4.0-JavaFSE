package org.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class MathUtilsTest {

    @Test
    public void testMultiply() {
        MathUtils math = new MathUtils();
        int result = math.multiply(3, 4);

        assertEquals(13, result);
    }

    @Test
    public void testIsEven() {
        MathUtils math = new MathUtils();

        assertTrue(math.isEven(6));

        assertFalse(math.isEven(7));
    }

    @Test
    public void testGreet() {
        MathUtils math = new MathUtils();
        String message = math.greet("Suman");


        assertEquals("Hello, Suman", message);


        assertNotNull(message);
    }
}

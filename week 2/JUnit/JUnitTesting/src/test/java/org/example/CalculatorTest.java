package org.example;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class CalculatorTest {

    @Test
    public void addTest() {
        int a=10;
        int b=20;
        Calculator obj=new Calculator();
        int c=obj.add(a,b);
        assertEquals(30,c);
    }
    @Test
    public void addTest1() {
        int a=20;
        int b=20;
        Calculator obj=new Calculator();
        int c=obj.add(a,b);
        assertEquals(30,c);
    }
    @Test
    public void isEvenTest(){
        int a=9;
        Calculator b=new Calculator();
        boolean ans = b.isEven(a);
        assertTrue(ans);
    }


















}

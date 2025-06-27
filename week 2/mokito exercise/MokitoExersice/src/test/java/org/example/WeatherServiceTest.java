
package org.example;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class WeatherServiceTest {

    @Test
    public void testIsHot() {
        // Step 1: Create a mock object
        WeatherApiClient mockApiClient = mock(WeatherApiClient.class);

        // Step 2: Stub the method
        when(mockApiClient.getCurrentTemperature("Delhi")).thenReturn(35);

        // Step 3: Use the mock in your service
        WeatherService weatherService = new WeatherService(mockApiClient);

        // Call the method and assert the result
        boolean result = weatherService.isHot("Delhi");
        assertTrue(result);  // Because 35 > 30
    }
}

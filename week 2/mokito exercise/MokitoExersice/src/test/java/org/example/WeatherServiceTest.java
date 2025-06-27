
package org.example;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class WeatherServiceTest {

    @Test
    public void testIsHot() {

        WeatherApiClient mockApiClient = mock(WeatherApiClient.class);

        when(mockApiClient.getCurrentTemperature("Delhi")).thenReturn(35);

        WeatherService weatherService = new WeatherService(mockApiClient);

        boolean result = weatherService.isHot("Delhi");
        assertTrue(result);  // Because 35 > 30
    }
}

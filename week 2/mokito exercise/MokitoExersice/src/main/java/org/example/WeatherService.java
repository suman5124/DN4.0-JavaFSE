package org.example;

public class WeatherService {

    private WeatherApiClient apiClient;

    public WeatherService(WeatherApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public boolean isHot(String city) {
        int temp = apiClient.getCurrentTemperature(city);
        return temp > 30;
    }
}

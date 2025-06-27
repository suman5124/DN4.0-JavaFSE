
package org.example;

import org.junit.Test;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Test
    public void testWelcomeUser_SendsCorrectMessage() {

        NotificationSender mockSender = mock(NotificationSender.class);


        UserService userService = new UserService(mockSender);
        userService.welcomeUser("Suman");

        verify(mockSender).send("Suman", "Welcome, Suman!");
    }
}

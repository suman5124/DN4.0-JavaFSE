package org.example;

public class UserService {

    private NotificationSender sender;

    public UserService(NotificationSender sender) {
        this.sender = sender;
    }

    public void welcomeUser(String user) {
        String msg = "Welcome, " + user + "!";
        sender.send(user, msg);
    }
}

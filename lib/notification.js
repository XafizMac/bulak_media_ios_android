import * as Notification from "expo-notifications";

export const initializeNotifications = () => {
    Notification.setNotificationHandler(({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
        })
    }))
}
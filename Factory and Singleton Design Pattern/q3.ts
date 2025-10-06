class AppNotification{
    send(message:string){
        throw new Error("Send() must Be implemented");
    }
}

class EmailNotification extends AppNotification{
    send(message:string){
        console.log(`Sending Email : ${message}`)
    }
}

class MessageNofification extends AppNotification{
    send(message:string){
        console.log(`Sending Message : ${message}`);
    }
}

class PushNotification extends AppNotification{
    send(message:string){
        console.log(`Sending Push : ${message}`);
        
    }
}

class NotificationFactory{
    static createNotification(type:string){
        switch(type){
            case "Email":
                return new EmailNotification();
            case "SMS" :
                return new MessageNofification();
            case "PUSH":
                return new PushNotification();
            default:
                throw new Error("Unknown Notification Type");
        }
    }
}

// Usage

const notify = NotificationFactory.createNotification("Email");
notify.send("WellCome!!");

const smsNotifier = NotificationFactory.createNotification("SMS");
notify.send("Your OTP 123456");

const pushNofification = NotificationFactory.createNotification("PUSH");
notify.send("You have a new Message");


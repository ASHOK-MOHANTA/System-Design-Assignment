// Handles only task-related logic
class TaskService {
  createTask(name: string) {
    console.log(`Creating task: ${name}`);
  }
}

// Handles only email-related logic
class EmailService {
  sendEmail(to: string) {
    console.log(`Sending email to ${to}`);
  }
}

// High-level manager class using composition
class TaskManager {
  private taskService: TaskService;
  private emailService: EmailService;

  constructor(taskService: TaskService, emailService: EmailService) {
    this.taskService = taskService;
    this.emailService = emailService;
  }

  createTaskAndNotify(name: string, email: string) {
    this.taskService.createTask(name);
    this.emailService.sendEmail(email);
  }
}

// Usage
const taskService = new TaskService();
const emailService = new EmailService();
const manager = new TaskManager(taskService, emailService);

manager.createTaskAndNotify("Design UI", "user@example.com");

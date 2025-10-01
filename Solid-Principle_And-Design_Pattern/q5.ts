// Step 1: Define the abstraction (high-level module depends on interface, not concrete class)
interface Database {
  save(data: string): void;
}

// Step 2: Implement concrete databases
class MySQLService implements Database {
  save(data: string): void {
    console.log("Saving to MySQL:", data);
  }
}

class MongoDBService implements Database {
  save(data: string): void {
    console.log("Saving to MongoDB:", data);
  }
}

// Step 3: UserService depends on abstraction, not implementation
class UserService {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  register(user: string): void {
    this.db.save(user);
  }
}

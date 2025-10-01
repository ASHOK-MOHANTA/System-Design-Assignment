// Split into smaller, focused interfaces
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}

// Class that only supports printing
class OldPrinter implements Printer {
  print(): void {
    console.log("Printing document...");
  }
}

// Class that supports print, scan, and fax
class SmartPrinter implements Printer, Scanner, Fax {
  print(): void {
    console.log("SmartPrinter printing document...");
  }

  scan(): void {
    console.log("SmartPrinter scanning document...");
  }

  fax(): void {
    console.log("SmartPrinter sending fax...");
  }
}

interface Book{
    title:String;
    price:number;
    getCategory(): string;
}

class PremiumBook implements Book{
    title: String;
    price: number;

    constructor(title:string,price:number){
        this.title = title;
        this.price = price;
    }
    getCategory(): string {
        return "Premium Book";
    }
}

// Regular Book
class RegularBook implements Book{
    title: String;
    price: number;

    constructor(title:string,price:number){
        this.title = title;
        this.price = price;
    }
    getCategory(): string {
        return "Regular Book";
    }
}

//Book Factory

class BookFactory{
    static createBook(title:string,price:number){
        if(price > 1000){
            return new PremiumBook(title,price);
        }else{
            return new RegularBook(title,price);
        }
    }
}

// Usage
const b1 = BookFactory.createBook("Design Pattern",1500);
console.log(b1.getCategory());

const b2 = BookFactory.createBook("JavaScript",500);
console.log(b2.getCategory());
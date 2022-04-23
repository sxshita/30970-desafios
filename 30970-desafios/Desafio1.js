class User {
    constructor(name, surname, books, pets){
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    };

    getFullName(){
        return console.log(`${this.name} ${this.surname}`);
    };

    addPet(pet){
        this.pets.push(pet);
    };

    countPets(){
        return console.log(this.pets.length);
    };

    addBook(name, author){
        const book = {
            name: name,
            author: author
        };

        this.books.push(book);
    };

    getBookNames(){
        const bookNames = this.books.map(book => book.name);
        return bookNames;
    };
 };

const books = [
    {
        name: 'Ikigai',
        author: 'Francesc Miralles'
    },
    {
        name: 'Atomic Habits',
        author: 'James Clear'
    }
];

 const user = new User('Sasha', 'Racagni', books, ['perro', 'gato']);

 user.getFullName();
 user.addPet('conejo');
 user.countPets();
 user.addBook('El dia que Nietzsche lloro', 'Irvin D. Yalom');
 console.log(user.getBookNames());
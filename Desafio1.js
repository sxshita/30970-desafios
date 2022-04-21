class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    };

    getfullName(){
        return console.log(`${this.nombre} ${this.apellido}`);
    };

    addMascota(mascota){
        this.mascotas.push(mascota);
    };

    countMascotas(){
        return console.log(this.mascotas.length);
    };

    addBook(nombre, autor){
        const libro = {
            nombre: nombre,
            autor: autor
        };

        this.libros.push(libro);
    };

    getBookNames(){
        const bookNames = this.libros.map(libro => libro.nombre);
        return bookNames;
    };
 };

const libros = [
    {
        nombre: 'Ikigai',
        autor: 'Francesc Miralles'
    },
    {
        nombre: 'Atomic Habits',
        autor: 'James Clear'
    }
];

 const usuario = new Usuario('Sasha', 'Racagni', libros, ['perro', 'gato']);

 usuario.getfullName();
 usuario.addMascota('conejo');
 usuario.countMascotas();
 usuario.addBook('El dia que Nietzsche lloro', 'Irvin D. Yalom');
 console.log(usuario.getBookNames());
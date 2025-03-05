//Ejemplo de clases, sirve como plantilla para crear más variable que contenga las necesidades que se detallaron en el constructor. 
    class Libro {
        #autor; // utilizando el símbolo de numeral para indicar que la propiedad es privada en JavaScript.
        constructor(title, autor, pages, read) {
            this.title = title;
            this.#autor = autor;
            this.pages = pages;
            this.read = read;
        }
        info() {
            console.log(`el nombre del libro es ${this.title}, su autor es: ${this.autor}, contiene un total de ${this.pages} y lo has leido ${this.read}`);
        }
        //Acceso a las propiedades privadas con getter y setter
        get autor() {
            return this.#autor;
        }
        //para editar las propiedades privadas 
        set autor(newAutor) {
            this.#autor = newAutor;
        }
    }

    let libro1 = new Libro('El señor de los anillos', 'J.R.R. Tolkien', 1000, 'si');
    console.log(libro1); 

 //Acceso a las propiedades 
    console.log(libro1.title);
    console.log(libro1.autor);
    //editar los valores de la clase en especifica 
    libro1.autor = "yo soy tu padre";
    console.log(libro1.pages);
    console.log(libro1.read);
    libro1.info();

console.log(libro1.getAutor());
console.log(libro1.setAutor('soy tu hijo'));
console.log(libro1.getAutor());

//La herencia en javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} hace un ruido.`);
    }
}
//la palabra extend de la clase Dog indica que la clase Dog hereda de la clase Animal
class Dog extends Animal {
    constructor(name, raza) {
        super(name); //llama al constructor de la clase padre
        this.raza = raza;
    }
    speak() {
        console.log(`${this.name} ladra y es de raza ${this.raza}.`);
    }
}

let perro = new Dog('Buddy');
perro.speak(); // Buddy ladra.

//Metodos estaticos 

    class MathUtils {
        static sum(a, b) {
            return a + b;
        }
        static multiply(a, b) {
            return a * b;
        }
    }
    //Al tener metodos estaticos poemos llamarlos sin necesidad de guardarlos en otra variable 
    console.log(MathUtils.sum(2, 3)); // 5
    console.log(MathUtils.multiply(2, 3)); // 6
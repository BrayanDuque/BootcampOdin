//Ejemplo de clases, sirve como plantilla para crear más variable que contenga las necesidades que se detallaron en el constructor. 
    class Libro {
        constructor(title, autor, pages, read) {
            this.title = title;
            this.autor = autor;
            this.pages = pages;
            this.read = read;
        }
        info() {
            console.log(`el nombre del libro es ${this.title}, su autor es: ${this.autor}, contiene un total de ${this.pages} y lo has leido ${this.read}`);
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


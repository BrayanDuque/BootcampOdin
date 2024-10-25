//Creando constructores 
function Libro(title, autor, pages, read) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
    this.info = function() {console.log(`el nombre del libro es ${title}, su autor es: ${autor}, contiene un total de ${pages} y lo has leido ${read}`);}
}

// se utiliza la palabra reservada new para crear una instancia del contructor 
const hobbit = new Libro ('the hobbit', 'Tolkien', '295 pages', 'no read');
console.log(hobbit.info()); 

export {hobbit};


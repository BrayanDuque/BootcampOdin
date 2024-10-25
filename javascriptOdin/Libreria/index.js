const myLibrary = [];

// Constructor de libros
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Función para añadir libros a la biblioteca
function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayLibrary(); // Muestra la biblioteca cada vez que se agrega un libro
}

// Función para mostrar todos los libros en una tabla en la página
function displayLibrary() {
  const libraryTable = document.getElementById('libraryTable');
  libraryTable.innerHTML = ''; // Limpiar la tabla antes de mostrarla

  myLibrary.forEach((book, index) => {
    const row = document.createElement('tr');

    // Crear celdas para cada propiedad del libro
    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const isReadCell = document.createElement('td');
    isReadCell.textContent = book.isRead ? 'Read' : 'Not Read';
    row.appendChild(isReadCell);

    // Agregar la fila a la tabla
    libraryTable.appendChild(row);
  });
}

// Ejemplo de uso, agregar manualmente algunos libros
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 324, false);
addBookToLibrary('1984', 'George Orwell', 268, true);

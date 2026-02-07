// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.

// 1. Create an enum called BookGenre with at least 5 book genres.
enum BookGenre {
  Fantasy,
  Horror,
  Adventure,
  Romance,
  Thriller,
  // add 4 more
}

// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
type Book = {
  bookId: number;
  title: string;
  author: string;
  genre: BookGenre;
  isAvailable: boolean;
};

let library: Book[] = [];

// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
function addBook(
  bookId: number,
  title: string,
  author: string,
  genre: BookGenre,
) {
  const book = {
    bookId,
    title,
    author,
    genre,
    isAvailable: true,
  };

  library.push(book);
  return book;
}

// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
function borrowBook(bookId: number): string {
  const foundBook = library.find((book) => book.bookId === bookId);
  if (foundBook?.isAvailable) {
    foundBook.isAvailable = false;
  }

  return `${foundBook?.title} has been borrowed`;
}

// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
function returnBook(bookId: number): string {
  const foundBook = library.find((book) => book.bookId === bookId);
  if (!foundBook) {
    return "Book not found";
  }
  foundBook.isAvailable = true;

  return `${foundBook?.title} has been returned`;
}

// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.

function checkAvailability(bookId: number): boolean | string {
  const foundBook = library.find((book) => book.bookId === bookId);
  if (!foundBook) {
    return "Book not found";
  }

  return foundBook.isAvailable;
}

// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
function removeBook(bookId: number): string {
  const foundIndex = library.findIndex((book) => book.bookId === bookId);
  if (!foundIndex) {
    return "Book not found";
  }

  library.splice(foundIndex, 1);
  return `${library[foundIndex].title} has been removed from the library`;
}

// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"

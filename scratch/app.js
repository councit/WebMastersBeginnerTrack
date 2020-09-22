var favoriteBooks = [];

function addFavoriteBook(bookTitle) {
  if (!bookTitle.includes('Great')) {
    favoriteBooks.push(bookTitle);
  }
}

function printBooks() {
  console.log(favoriteBooks);
}

addFavoriteBook('A Song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime & Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You Don't Know JS");

printBooks();

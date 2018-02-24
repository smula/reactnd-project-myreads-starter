import React from 'react'
import Book from './Book'
const BookShelf = ({ books, category, changeBookCategory }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{category.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.filter((book) => book.shelf === category.value).map((book, index) => (
            <Book
              key={index}
              book={book}
              changeBookCategory={changeBookCategory}
            />
          ))
        }
      </ol>
    </div>
  </div>
)

export default BookShelf

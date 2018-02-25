import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import sortBy from 'sort-by';

const BookShelf = ({ books, category, changeBookCategory }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{category.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.sort(sortBy('title')).filter((book) => book.shelf === category.value).map((book, index) => (
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

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
  changeBookCategory: PropTypes.func.isRequired,
}
export default BookShelf

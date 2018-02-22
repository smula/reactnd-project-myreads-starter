import React from 'react'

const BookShelf = ({ books, category }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{category.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.filter((book) => book.value === category.value).map((book) => (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.image}")` }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li>
          ))
        }
      </ol>
    </div>
  </div>
)

export default BookShelf

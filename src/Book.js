import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book, changeBookCategory }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ backgroundImage: `url("${ book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : null}")` }}></div>
        <div className="book-shelf-changer">
            <select onChange={changeBookCategory} name={book.id} value="nothing">
              <option value="nothing" disabled defaultValue>Move to...</option>
              <option value="currentlyReading">Currently Reading {
                  (book.shelf && book.shelf === 'currentlyReading') && '✔'
              }</option>
              <option value="wantToRead">Want to Read {
                  (book.shelf && book.shelf === 'wantToRead') && '✔'
              }</option>
              <option value="read">Read {
                  (book.shelf && book.shelf === 'read') && '✔'
              }</option>
              <option value="none">None {
                  (!book.shelf || book.shelf === 'none') && '✔'
              }</option>
            </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeBookCategory: PropTypes.func.isRequired,
}
export default Book

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import books from './books'

export default class ReadsPage extends Component {
  constructor() {
    super();
    this.handleBookCategoryChange = this.handleBookCategoryChange.bind(this);
  }
  state = {
    books: books,
    categories: [
      { title: 'Currently Reading', value: 'currentlyReading' },
      { title: 'Want to Read', value: 'wantToRead' },
      { title: 'Read', value: 'read' }
    ]
  }

  handleBookCategoryChange(e) {
    e.preventDefault();
    const bookValue = e.target.value;
    const bookName = e.target.name;

    this.setState((state) => {
      books: state.books.map((book) => {
        if (book.name === bookName) {
          book.value = bookValue;
        }
        return book;
      })
    });
  }

  render() {
    return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {
            this.state.categories.map((category, index) => (
              <BookShelf
                key={index}
                books={this.state.books}
                category={category}
                changeBookCategory={this.handleBookCategoryChange}
              />
            ))
          }
        </div>
      </div>

      <div className="open-search">
        <Link
          to="/search"
        >
          Add a book
        </Link>
      </div>
    </div>

    )
  }
}

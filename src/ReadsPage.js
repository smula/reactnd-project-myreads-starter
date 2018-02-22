import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import books from './books'

export default class ReadsPage extends Component {
  state = {
    books: books,
    categories: [
      { title: 'Currently Reading', value: 'currentlyReading' },
      { title: 'Want to Read', value: 'wantToRead' },
      { title: 'Read', value: 'read' }
    ]
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
            this.state.categories.map((category) => (
              <BookShelf
                books={this.state.books}
                category={category}
              />
            ))
          }
        </div>
      </div>

      <div className="open-search">
        <Link
          exact
          to="/search"
        >
          Add a book
        </Link>
      </div>
    </div>

    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery(query) {
    this.search(query);
    this.setState({
      query,
    })
  }

  search(query) {
    if (query !== '') {
      BooksAPI.search(query)
        .then((results) => {
          if (!results || results.error) {
            this.setState({ books: [] })
          } else if(Array.isArray(results)) {
            console.log(results);
            if (this.state.query !== '') {
              this.setState({
                books: results,
              })
            }
          }
        })
        .catch((error) => {
          console.log('something went wrong with the search');
        })
      ;
    } else {
      this.setState({
        books: [],
      })
    }
  }

  addBook(e) {
    e.preventDefault();
    const bookValue = e.target.value;
    const bookName = e.target.name;

    console.log(bookName);
  }

  render() {
    const { query, books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.books.map((book, index) => (
                <Book
                  key={index}
                  book={book}
                  changeBookCategory={this.addBook}
                />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage

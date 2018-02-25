import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  constructor() {
    super();
    this.addBook = this.addBook.bind(this);
  }
  state = {
    query: '',
    books: [],
    booksWithShelevs: [],
  }

  componentDidMount() {
    this.updateBooksInList();
  }

  updateBooksInList() {
    BooksAPI.getAll().then((booksWithShelevs) => {
      this.setState({
        booksWithShelevs,
      });
    })
  }

  updateQuery(query) {
    this.search(query);
    this.setState({
      query,
    });
  }

  getBooksWithShelevs(books) {
    books.map((book) => {
      return this.state.booksWithShelevs.map((bookInShelf) => {
        if (bookInShelf.id === book.id) {
          book.shelf = bookInShelf.shelf;
        }
        return bookInShelf;
      });
    });
  }

  search(query) {
    if (query !== '') {
      BooksAPI.search(query)
        .then((results) => {
          if (!results || results.error) {
            this.setState({
              books: [],
            });
          } else if(Array.isArray(results)) {
            if (this.state.query !== '') {
              this.setState({
                books: results,
              });
            }
          }
        })
        .catch((error) => {
          console.log(error, 'something went wrong with the search');
        });
    } else {
      this.setState({
        books: [],
      });
    }
  }

  addBook(e) {
    e.preventDefault();
    const bookValue = e.target.value;
    const bookId = e.target.name;
    this.state.books.map((book, index) => {
      if (book.id === bookId) {

      BooksAPI.get(book.id).then((myBook) => {
        let booksWithShelevs = this.state.booksWithShelevs;
        let bookExist = false;
        booksWithShelevs = booksWithShelevs.filter((bookWithShelef) => {
          if (bookWithShelef.id !== myBook.id) {
            return bookWithShelef;
          }
          bookExist = true;
          return bookWithShelef.shelf = bookValue;
        });

        if (!bookExist) {
          myBook.shelf = bookValue;
          booksWithShelevs.push(myBook);
        } else {
          myBook.shelf = bookValue;
        }
        this.setState({
          booksWithShelevs,
        });
      });

        BooksAPI.update(book, bookValue).then(() => {
          this.search(this.state.query);
        });
      }
      return book;
    });
  };

  render() {
    const { query, books } = this.state;
    this.getBooksWithShelevs(books);

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
              books.map((book, index) => (
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
};

export default SearchPage

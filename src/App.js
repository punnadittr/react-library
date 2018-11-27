import React, { Component } from 'react';
import './App.css';
import BookListTable from './Table';
import Navbar from './Navbar';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const bookList = [
  {
    title: 'The Lord of the Rings',
    description: 'A very good book',
    author: 'JRR Tolkien',
    rating: 5,
    read: false,
    objectID: 0
  },
  {
    title: 'Harry Potter',
    description: 'A magical Book',
    author: 'J K Rowling',
    rating: 5,
    read: false,
    objectID: 1
  },
  {
    title: 'Inkheart',
    description: 'Very good book sir',
    author: 'Someone',
    rating: 3,
    read: false,
    objectID: 2
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList
    };

    this.changeReadStatus = this.changeReadStatus.bind(this);
    this.onDissmiss = this.onDissmiss.bind(this);
    this.handleSubmitBook = this.handleSubmitBook.bind(this);
  }

  changeReadStatus(elemID) {
    // Create a copy of booklist array
    const bookList = this.state.bookList.slice();
    // Find the book that we will change its read value
    const changingBook = bookList.find(book => book.objectID === elemID);
    changingBook.read = !changingBook.read;
    this.setState({ bookList });
  }

  onDissmiss(elemID) {
    const { bookList } = this.state;
    const updatedBookList = bookList.filter(book => book.objectID !== elemID);
    this.setState({ bookList: updatedBookList });
  }

  // Find the highest ID to apply in creating new books
  highestBookID() {
    const { bookList } = this.state;
    const result = Math.max(...bookList.map(book => book.objectID));
    if (result === -Infinity) {
      return 0;
    }
    return result;
  }

  handleSubmitBook(book) {
    const bookList = this.state.bookList.slice();
    const newBook = {
      title: book.title,
      description: book.description,
      author: book.author,
      rating: book.rating,
      read: false,
      // To avoid duplicate ID, it will find the highest book ID then plus one
      objectID: this.highestBookID() + 1
    };
    bookList.push(newBook);
    this.setState({ bookList });
  }

  render() {
    const { bookList } = this.state;
    return (
      <div className="library container">
        <Navbar appName="Library" onBookCreate={this.handleSubmitBook} />
        <div className="book-table">
          <BookListTable
            bookList={bookList}
            changeReadStatus={this.changeReadStatus}
            onDissmiss={this.onDissmiss}
          />
        </div>
      </div>
    );
  }
}

export default App;

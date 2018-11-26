import React, { Component } from 'react';
import './App.css';
import BookList from './Table';
import { ReadButton } from './Button';
import Rating from './Rating';
import { TableRow, TableCell, TableHead } from '@material-ui/core';

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

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(elemID) {
    // Create a copy of booklist array
    const bookList = this.state.bookList.slice();
    // find the book that we will change its read value
    const changingBook = bookList.find(book => book.objectID === elemID);
    changingBook.read = !changingBook.read;
    this.setState({ bookList });
  }

  render() {
    const { bookList } = this.state;
    return (
      <div className="library container">
        <h1 className="text-center display-2">Library</h1>
        <div className="mt-5 book-table">
          <BookList>
            {bookList.map((book, index) => (
              <TableRow key={book.objectID}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.description}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>
                  <Rating rating={book.rating} />
                </TableCell>
                <TableCell>
                  <ReadButton
                    onClick={() => this.clickHandler(book.objectID)}
                    isRead={book.read}
                  />
                </TableCell>
              </TableRow>
            ))}
          </BookList>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ReadButton, DeleteButton } from './Button';
import Rating from './Rating';

const BookListTable = props => {
  const { bookList, changeReadStatus, onDissmiss } = props;
  const googleSearchUrl = 'https://www.google.com/search?q=';
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Read?</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {bookList.map((book, index) => (
          <TableRow key={book.objectID}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell>
              <a
                href={`${googleSearchUrl}${book.title
                  .toLowerCase()
                  .split(' ')
                  .join('+')}`}
              >
                {book.title}
              </a>
            </TableCell>
            <TableCell>{book.description}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>
              <Rating rating={book.rating} />
            </TableCell>
            <TableCell>
              <ReadButton
                onClick={() => changeReadStatus(book.objectID)}
                isRead={book.read}
              />
            </TableCell>
            <TableCell>
              <DeleteButton onClick={() => onDissmiss(book.objectID)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookListTable;

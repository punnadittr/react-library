import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { AddNewBookButton } from './Button';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AddNewBookDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      book: {
        title: '',
        description: '',
        author: '',
        rating: ''
      }
    };
  }

  handleChange = e => {
    const book = { ...this.state.book };
    book[e.target.id] = e.target.value;
    this.setState({ book });
  };

  handleRating = e => {
    const book = { ...this.state.book };
    const inputRating = parseInt(e.target.value);
    if (inputRating > 5) {
      book.rating = 5;
    } else if (inputRating < 1) {
      book.rating = 1;
    } else if (!inputRating) {
      book.rating = '';
    } else {
      book.rating = inputRating;
    }
    this.setState({ book });
  };

  handleToggle = () => {
    this.setState(state => {
      return { open: !state.open };
    });
  };

  handleSubmit = () => {
    const { book } = this.state;
    this.props.onCreate(book);
    this.setState({
      open: false,
      book: {
        title: '',
        description: '',
        author: '',
        rating: ''
      }
    });
  };

  render() {
    const {
      open,
      book: { title, description, author, rating }
    } = this.state;
    return (
      <Fragment>
        <AddNewBookButton onClick={this.handleToggle} />
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Book</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              onChange={this.handleChange}
              value={title}
              margin="dense"
              id="title"
              label="Book Title"
              type="text"
              fullWidth
            />
            <TextField
              value={description}
              onChange={this.handleChange}
              margin="dense"
              id="description"
              label="Book Description"
              type="text"
              fullWidth
            />
            <TextField
              value={author}
              onChange={this.handleChange}
              margin="dense"
              id="author"
              label="Book Author"
              type="text"
              fullWidth
            />
            <TextField
              value={rating}
              onChange={this.handleRating}
              margin="dense"
              id="rating"
              label="Book Rating"
              type="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

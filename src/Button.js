import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ReadButton = props => {
  const { isRead, onClick } = props;
  let selectedColor = '';
  let content = '';

  if (isRead) {
    selectedColor = 'primary';
    content = 'Yes';
  } else {
    selectedColor = 'secondary';
    content = 'No';
  }
  return (
    <Button onClick={onClick} variant="contained" color={selectedColor}>
      {content}
    </Button>
  );
};

const DeleteButton = props => {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};

const AddNewBookButton = props => {
  const { onClick } = props;
  return (
    <Button mini onClick={onClick} variant="fab" color="primary">
      <AddIcon />
    </Button>
  );
};
export { ReadButton, DeleteButton, AddNewBookButton };

import React from 'react';
import Button from '@material-ui/core/Button';

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

export { ReadButton };

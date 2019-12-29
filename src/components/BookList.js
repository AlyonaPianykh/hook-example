import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BaseList from '../components/BaseList';
import bookThumb from '../book.png';

const BookList = () => {
  const { books, deleteBook } = useContext(BookContext);

  return (
    <BaseList books={books} deleteBook={deleteBook} />
  );
};

export default BookList;

import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookCard from '../components/BookCard';
import bookThumb from '../book.png';

const BaseList = (props) => {

  const { books, deleteBook } = props;

  return (
    <div className='section section-books'>
      <div className='container'>
        <h6>Books</h6>
        <ul>
          {books.map(book => (
            <BookCard book={book} deleteBook={deleteBook}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BaseList;

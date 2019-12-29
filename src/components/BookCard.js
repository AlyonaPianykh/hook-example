import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import bookThumb from '../book.png';
import { useCounter } from '../custom-hooks/useCounter';

const BookCard = ({ book, deleteBook } /* <- props here*/) => {

  // own counter for each useCounter hook usage!
  const { counter, incCounter } = useCounter(); // here would be counter for likes separate for each card!

  return (
    <li key={book.id}>
      <div className='card book'>
        <div className='book-image'>
          <img src={bookThumb} alt='book thumb'/>
        </div>
        <div className='book-details'>
          <div className='book-title'>{book.title}</div>
          <div className='book-author'>{book.author}</div>
        </div>

        <div className="book-actions">
          <div className="book-like" onClick={incCounter}>Likes: {counter}
            <i className='material-icons'>favorite</i>
          </div>
          {
            deleteBook && (
              <div
                onClick={() => deleteBook(book.id)}
                className='book-delete'
              >
                <i className='material-icons'>delete</i>
              </div>
            )
          }
        </div>
      </div>
    </li>

  );
};

export default BookCard;

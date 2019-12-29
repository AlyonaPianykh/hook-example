import React, { createContext, useState, useEffect } from 'react';
import { useCounter } from '../custom-hooks/useCounter';

import uniqid from 'uniqid';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Goodnight Moon',
      author: 'Margaret Brown'
    },
    {
      id: 2,
      title: 'The Very Hungry Caterpillar',
      author: 'Eric Carle'
    }
  ]);

  // not here
  /*
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=gsTG1FmP9CoIkMCGJ5j3y09RYFTrA8jM`
          );
          const json = await res.json();

          formatBooks(json);
          // setData(json);
        } catch (error) {
          setError(error);
        }

      };

      fetchData();
    }, []);

    const formatBooks = ({ results }) => {
      const formattedBooks = results.map(({ title, description, author }) => ({
        id: uniqid(),
        title,
        author,
        description
      }));

      setBooks(formattedBooks);
    };
  */

  const addBook = book => {
    setBooks([...books, { ...book, id: uniqid() }]);
  };

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

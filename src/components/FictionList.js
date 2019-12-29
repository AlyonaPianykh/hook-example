import React, { useContext } from 'react';
import bookThumb from '../book.png';
import { useBooksFetch } from '../custom-hooks/useBooksFetch';
import BaseList from '../components/BaseList';
import uniqid from 'uniqid';

const FICTION_URL = 'https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=gsTG1FmP9CoIkMCGJ5j3y09RYFTrA8jM';

const FictionList = () => {
  const formatter = (data) => {
    if (!data) return [];
    const { results } = data;

    debugger;
    return results.map(({ book_details }) => {
      const { title, description, author } = book_details[0];
      return {
        id: uniqid(),
        title,
        author,
        description
      };
    });
  };

  const { books, isLoading, error } = useBooksFetch(FICTION_URL, formatter);

  debugger;
  if (isLoading) return (<div className='book-title'>Loading ...</div>);

  if (error) return (<div className='book-title'>Smth went wrong ...</div>);

  return (
   <BaseList books={books}/>
  );
};

export default FictionList;

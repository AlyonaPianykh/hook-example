import React, { useContext } from 'react';
import bookThumb from '../book.png';
import { useBooksFetch } from '../custom-hooks/useBooksFetch';
import BaseList from '../components/BaseList';
import { bestSellerFormatter } from '../utils/formatters';


const BEST_SELLERS_URL = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=gsTG1FmP9CoIkMCGJ5j3y09RYFTrA8jM';

const CN = 'best-sellers-list';
const BestSellersList = () => {
  const { books, isLoading, error } = useBooksFetch(BEST_SELLERS_URL, bestSellerFormatter);

  if (isLoading) return (<div className='book-title'>Loading ...</div>);

  console.log('error', error);
  if (error) return (<div className='book-title'>Smth went wrong ...</div>);

  return (
    <div className={CN}>
      <div>Best Sellers</div>
      <BaseList books={books}/>
    </div>
  );
};

export default BestSellersList;

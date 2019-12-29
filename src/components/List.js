import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookListFetch from '../components/BestSellersList';
import BookList from '../components/BookList';
import BookListCollection from '../components/FictionList';


import bookThumb from '../book.png';

export const TYPES = {
  WITH_CONTEXT: 'WITH_CONTEXT',
  BEST_SELLERS: 'BEST_SELLERS',
  FICTION: 'FICTION'
};

const List = ({ type }) => {
  switch (type) {
    case TYPES.WITH_CONTEXT:
      return <BookList/>;

    case TYPES.BEST_SELLERS:
      return <BookListFetch/>;

    case TYPES.FICTION:
      return <BookListCollection/>;

    default:
      return null;
  }
};

export default List;

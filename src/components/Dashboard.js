import React, { Fragment } from 'react';
import List, {TYPES} from './List';
import BookForm from './BookForm';
import { useCounter } from '../custom-hooks/useCounter';

const Dashboard = () => {
  const { counter, incCounter} = useCounter(); // Dashboard's  own counter for books

  return (
    <Fragment>
      <div>Own books: {counter}</div>
      <List type={TYPES.WITH_CONTEXT}/>
      <BookForm onBookAdd={incCounter}/>
    </Fragment>
  );
};

export default Dashboard;

import { useEffect } from 'react';
import uniqid from 'uniqid';

// solution 1
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



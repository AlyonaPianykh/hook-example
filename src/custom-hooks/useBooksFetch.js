//  https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=gsTG1FmP9CoIkMCGJ5j3y09RYFTrA8jM

import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

export const useBooksFetch = (baseUrl, formatter) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(baseUrl);

  const formatBooks = formatter;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        debugger
        setResponse(formatBooks(json));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { books: response, isLoading, error, setUrl };
};
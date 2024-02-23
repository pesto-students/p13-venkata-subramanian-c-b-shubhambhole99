import { useMemo } from 'react';

const useBookSorter = (books, sortingCriteria) => {
  const sortedBooks = useMemo(() => {
    switch (sortingCriteria) {
      case 'title':
        return [...books].sort((a, b) => a.title.localeCompare(b.title));
      case 'author':
        return [...books].sort((a, b) => a.author.localeCompare(b.author));
      case 'year':
        return [...books].sort((a, b) => a.year - b.year);
      default:
        return books; // No sorting
    }
  }, [books, sortingCriteria]);

  return sortedBooks;
};

export default useBookSorter;
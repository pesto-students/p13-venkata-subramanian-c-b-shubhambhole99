import { useMemo } from 'react';

const useBookFilter = (books, searchTerm) => {
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      // Perform case-insensitive search by converting both book title and search term to lowercase
      const title = book.title.toLowerCase();
      const term = searchTerm.toLowerCase();
      return title.includes(term);
    });
  }, [books, searchTerm]); // Update filtered list when books or search term changes

  return filteredBooks;
};

export default useBookFilter;

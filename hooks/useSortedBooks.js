import { useMemo } from 'react';

export default function useSortedBooks(books) {
  return useMemo(() => {
    return [...books].sort((a, b) => a.title.localeCompare(b.title));
  }, [books]);
}

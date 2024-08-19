import useSortedBooks from '../hooks/useSortedBooks';

export default function BooksList({ books }) {
  const sortedBooks = useSortedBooks(books);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Books List</h2>
      <ul>
        {sortedBooks.map((book, index) => (
          <li key={index} className="border-b py-2">
            <strong>{book.title}</strong> by {book.author} (Genre: {book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
}

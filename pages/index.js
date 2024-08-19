import { useState } from 'react';
import Header from '../components/Header';
import BooksList from '../components/BooksList';
import Toast from '../components/Toast';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [lastBook, setLastBook] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBook = {
      title: formData.get('title'),
      author: formData.get('author'),
      genre: formData.get('genre'),
    };
    setBooks([...books, newBook]);
    setLastBook(newBook);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center p-6 space-y-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4">
          <input
            name="title"
            placeholder="Book Title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
          <input
            name="author"
            placeholder="Author"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
          <input
            name="genre"
            placeholder="Genre"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Add Book
          </button>
        </form>
        {lastBook && <Toast book={lastBook} />}
        <BooksList books={books} />
      </main>
    </div>
  );
}

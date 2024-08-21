import { useState, useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import BooksList from '../components/BooksList';
import Toast from '../components/Toast';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [lastBook, setLastBook] = useState(null);
  const { theme } = useContext(ThemeContext);

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
    <ThemeProvider>
      <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen`}>
        <Header />
        <main className="flex flex-col items-center p-6 space-y-6">
          <form
            onSubmit={handleSubmit}
            className={`w-full max-w-md p-6 rounded-lg shadow-lg space-y-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          >
            <input
              name="title"
              placeholder="Book Title"
              className={`w-full p-2 border rounded focus:outline-none focus:ring ${theme === 'dark' ? 'border-gray-700 bg-gray-700 text-white focus:ring-indigo-600' : 'border-gray-300 bg-white text-black focus:ring-indigo-200'}`}
              required
            />
            <input
              name="author"
              placeholder="Author"
              className={`w-full p-2 border rounded focus:outline-none focus:ring ${theme === 'dark' ? 'border-gray-700 bg-gray-700 text-white focus:ring-indigo-600' : 'border-gray-300 bg-white text-black focus:ring-indigo-200'}`}
              required
            />
            <input
              name="genre"
              placeholder="Genre"
              className={`w-full p-2 border rounded focus:outline-none focus:ring ${theme === 'dark' ? 'border-gray-700 bg-gray-700 text-white focus:ring-indigo-600' : 'border-gray-300 bg-white text-black focus:ring-indigo-200'}`}
              required
            />
            <button
              type="submit"
              className={`w-full p-2 rounded transition-colors ${theme === 'dark' ? 'bg-indigo-700 text-white hover:bg-indigo-800' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
              Add Book
            </button>
          </form>
          {lastBook && <Toast book={lastBook} />}
          <BooksList books={books} />
        </main>
      </div>
    </ThemeProvider>
  );
}

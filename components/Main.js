import { useState } from 'react';
import Toast from './Toast';

export default function Main() {
  const [lastBook, setLastBook] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const book = {
      title: formData.get('title'),
      author: formData.get('author'),
      genre: formData.get('genre'),
    };
    setLastBook(book);
  };

  return (
    <main className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input name="title" placeholder="Book Title" className="p-2 border" required />
        <input name="author" placeholder="Author" className="p-2 border" required />
        <input name="genre" placeholder="Genre" className="p-2 border" required />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Add Book</button>
      </form>
      {lastBook && <Toast book={lastBook} />}
    </main>
  );
}

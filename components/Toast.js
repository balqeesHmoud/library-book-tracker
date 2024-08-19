export default function Toast({ book }) {
    return (
      <div className="mt-4 p-4 bg-gray-100 border-l-4 border-green-500">
        <p><strong>Last Added Book:</strong></p>
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
      </div>
    );
  }
  
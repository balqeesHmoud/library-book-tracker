import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Link from 'next/link';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`bg-indigo-600 text-white p-4 shadow-md ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Library Book Tracker</h1>
        <nav>
          <Link href="/" className="text-white hover:text-gray-300 mx-2">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 mx-2">
            About Us
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 border rounded bg-white text-black hover:bg-gray-200"
          >
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}

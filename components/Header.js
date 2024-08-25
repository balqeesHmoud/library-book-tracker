import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import Link from 'next/link';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

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
          {user ? (
            <>
              <span className="mx-2">Welcome, {user.username}!</span>
              <button onClick={logout} className="ml-4 p-2 border rounded bg-white text-black hover:bg-gray-200">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-white hover:text-gray-300 mx-2">
              Login
            </Link>
          )}
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

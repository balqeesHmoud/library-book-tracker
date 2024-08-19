import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Library Book Tracker</h1>
        <nav>
          <Link href="/" className="text-white hover:text-gray-300 mx-2">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 mx-2">
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

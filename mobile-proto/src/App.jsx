import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="relative flex items-center px-4 py-3 bg-white shadow-md">
        {/* Menu Button */}
        <button
          className="absolute left-4"
          onClick={() => setOpen(!open)}
        >
          {/* Simple menu icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Centered Title */}
        <h1 className="top">
          My Mobile App
        </h1>
      </header>

      {/* Drawer Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg
                       transform ${open ? 'translate-x-0' : '-translate-x-full'}
                       transition-transform duration-300`}
      >
        <ul className="mt-16 space-y-4 px-4">
          <li>
            <a href="#" className="block py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Settings
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md
                           hover:bg-blue-600 transition"
        >
          Click Me
        </button>
      </main>
    </div>
  );
}

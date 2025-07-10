function Navbar() {
  return (
    <nav className="bg-green-400 p-4">
      <div className="container flex justify-between items-center">
        <div className="text-white font-bold text-2xl hover:text-3xl ">Finance App</div>
        <ul className="flex space-x-100">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

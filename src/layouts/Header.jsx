import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-md md:px-12 sm:px-6 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-2xl text-primary font-bold">Your Logo Here</h1>

        {/* Navigation */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4 text-gray-700">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Showcase
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-primary transition">
                Product
              </Link>
            </li>
            <li>
              <Link to="/offer" className="hover:text-primary transition">
                Offer
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-primary transition">
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        {/* Newsletter Subscription */}
        <div className="mt-4 md:mt-0">
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};


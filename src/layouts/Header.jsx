import { Link } from "react-router-dom";
import { NewsLetter } from "../components";

export const Header = () => {
  return (
    <header className="bg-white shadow-md md:px-12 sm:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-4">
        {/* Logo */}
        <h1 className="text-2xl text-primary font-bold">
          <img src="/images/logo.jpg" alt="Logo" className="w-20" />
        </h1>

        {/* Navigation */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4 md:space-x-8 text-gray-700">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Showcase
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary transition">
                Product
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-primary transition">
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
        <NewsLetter />
        {/* <div className="mt-4 md:mt-0">
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
        </div> */}
      </div>
    </header>
  );
};


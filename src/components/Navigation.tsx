import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Clock, Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="font-bold text-xl text-orange-500">Need to Eat</div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive
                    ? 'border-orange-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`
              }
            >
              <Home className="mr-1 h-4 w-4" />
              Home
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive
                    ? 'border-orange-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`
              }
            >
              <Clock className="mr-1 h-4 w-4" />
              History
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive
                    ? 'bg-orange-50 border-orange-500 text-orange-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`
              }
            >
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Home
              </div>
            </NavLink>
            <NavLink
              to="/history"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive
                    ? 'bg-orange-50 border-orange-500 text-orange-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`
              }
            >
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                History
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
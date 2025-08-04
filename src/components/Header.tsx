import { Search, User, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 shadow-soft">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-primary">airbnb</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-soft hover:shadow-card transition-shadow">
          <div className="flex items-center space-x-6">
            <button className="text-sm font-medium text-gray-800 hover:text-gray-600">
              Anywhere
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <button className="text-sm font-medium text-gray-800 hover:text-gray-600">
              Any week
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <button className="text-sm text-gray-600 hover:text-gray-800">
              Add guests
            </button>
          </div>
          <Button variant="default" size="sm" className="ml-4 rounded-full h-8 w-8 p-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Right Menu */}
        <div className="flex items-center space-x-4">
          <button className="hidden lg:block text-sm font-medium text-gray-800 hover:text-gray-600 px-3 py-2 rounded-full hover:bg-gray-50">
            Airbnb your home
          </button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-4 w-4" />
          </Button>
          <div className="flex items-center border border-gray-300 rounded-full py-1 px-1 pl-3 hover:shadow-card transition-shadow">
            <Menu className="h-4 w-4 text-gray-600 mr-3" />
            <div className="bg-gray-500 rounded-full h-8 w-8 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
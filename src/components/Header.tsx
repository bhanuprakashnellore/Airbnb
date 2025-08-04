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

        {/* Search Bar - Hide on mobile, show SearchBar component on larger screens */}
        <div className="hidden lg:block flex-1 max-w-2xl mx-8">
          {/* This will be replaced with SearchBar component in pages */}
        </div>

        {/* Mobile Search Button */}
        <div className="flex lg:hidden items-center border border-gray-300 rounded-full py-2 px-4 shadow-soft hover:shadow-card transition-shadow flex-1 max-w-xs mx-4">
          <Search className="h-4 w-4 text-gray-400 mr-3" />
          <span className="text-sm text-gray-600">Where to?</span>
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
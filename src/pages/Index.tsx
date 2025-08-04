import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyGrid from "@/components/PropertyGrid";
import SearchBar, { SearchFilters } from "@/components/SearchBar";
import FilterSidebar, { FilterOptions } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: "",
    guests: 1,
  });
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 1000],
    propertyTypes: [],
    amenities: [],
    bedrooms: [],
    bathrooms: [],
    instantBook: false,
    superhost: false,
  });

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  const handleSearch = (newSearchFilters: SearchFilters) => {
    setSearchFilters(newSearchFilters);
    console.log("Search filters:", newSearchFilters);
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    console.log("Filters:", newFilters);
  };

  const handleClearAllFilters = () => {
    setFilters({
      priceRange: [0, 1000],
      propertyTypes: [],
      amenities: [],
      bedrooms: [],
      bathrooms: [],
      instantBook: false,
      superhost: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Section */}
      <div className="bg-white shadow-sm border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <CategoryFilter />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {searchFilters.location ? `Stays in ${searchFilters.location}` : "Stays around the world"}
          </h2>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearAll={handleClearAllFilters}
              />
            </div>
          )}

          {/* Property Grid */}
          <div className="flex-1">
            <PropertyGrid onPropertyClick={handlePropertyClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

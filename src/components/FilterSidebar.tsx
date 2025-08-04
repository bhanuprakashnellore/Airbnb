import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export interface FilterOptions {
  priceRange: [number, number];
  propertyTypes: string[];
  amenities: string[];
  bedrooms: number[];
  bathrooms: number[];
  instantBook: boolean;
  superhost: boolean;
}

interface FilterSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onClearAll: () => void;
}

const propertyTypes = [
  "Entire villa",
  "Entire cabin",
  "Entire apartment", 
  "Entire house",
  "Entire bungalow",
  "Entire studio",
  "Entire chalet"
];

const amenities = [
  "WiFi",
  "Kitchen",
  "Parking",
  "Pool",
  "Hot tub",
  "Beach access",
  "Mountain view",
  "City view",
  "Fireplace",
  "Air conditioning"
];

const FilterSidebar = ({ filters, onFiltersChange, onClearAll }: FilterSidebarProps) => {
  const handlePropertyTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked 
      ? [...filters.propertyTypes, type]
      : filters.propertyTypes.filter(t => t !== type);
    onFiltersChange({ ...filters, propertyTypes: newTypes });
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const newAmenities = checked 
      ? [...filters.amenities, amenity]
      : filters.amenities.filter(a => a !== amenity);
    onFiltersChange({ ...filters, amenities: newAmenities });
  };

  const handleBedroomChange = (bedroom: number, checked: boolean) => {
    const newBedrooms = checked 
      ? [...filters.bedrooms, bedroom]
      : filters.bedrooms.filter(b => b !== bedroom);
    onFiltersChange({ ...filters, bedrooms: newBedrooms });
  };

  const handleBathroomChange = (bathroom: number, checked: boolean) => {
    const newBathrooms = checked 
      ? [...filters.bathrooms, bathroom]
      : filters.bathrooms.filter(b => b !== bathroom);
    onFiltersChange({ ...filters, bathrooms: newBathrooms });
  };

  const activeFiltersCount = 
    (filters.propertyTypes.length > 0 ? 1 : 0) +
    (filters.amenities.length > 0 ? 1 : 0) +
    (filters.bedrooms.length > 0 ? 1 : 0) +
    (filters.bathrooms.length > 0 ? 1 : 0) +
    (filters.instantBook ? 1 : 0) +
    (filters.superhost ? 1 : 0) +
    (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 1000 ? 1 : 0);

  return (
    <Card className="w-80 h-fit animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {activeFiltersCount > 0 && (
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{activeFiltersCount}</Badge>
              <Button variant="ghost" size="sm" onClick={onClearAll}>
                Clear all
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div className="space-y-3">
          <h3 className="font-semibold">Price range</h3>
          <div className="px-3">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value as [number, number] })}
              max={1000}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}+</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Property Type */}
        <div className="space-y-3">
          <h3 className="font-semibold">Property type</h3>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={filters.propertyTypes.includes(type)}
                  onCheckedChange={(checked) => handlePropertyTypeChange(type, checked as boolean)}
                />
                <label htmlFor={type} className="text-sm cursor-pointer">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bedrooms */}
        <div className="space-y-3">
          <h3 className="font-semibold">Bedrooms</h3>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((bedroom) => (
              <Button
                key={bedroom}
                variant={filters.bedrooms.includes(bedroom) ? "default" : "outline"}
                size="sm"
                onClick={() => handleBedroomChange(bedroom, !filters.bedrooms.includes(bedroom))}
                className="h-10 w-10 p-0"
              >
                {bedroom}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bathrooms */}
        <div className="space-y-3">
          <h3 className="font-semibold">Bathrooms</h3>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((bathroom) => (
              <Button
                key={bathroom}
                variant={filters.bathrooms.includes(bathroom) ? "default" : "outline"}
                size="sm"
                onClick={() => handleBathroomChange(bathroom, !filters.bathrooms.includes(bathroom))}
                className="h-10 w-10 p-0"
              >
                {bathroom}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Amenities */}
        <div className="space-y-3">
          <h3 className="font-semibold">Amenities</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                />
                <label htmlFor={amenity} className="text-sm cursor-pointer">
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Quick Filters */}
        <div className="space-y-3">
          <h3 className="font-semibold">Quick filters</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="instantBook"
                checked={filters.instantBook}
                onCheckedChange={(checked) => onFiltersChange({ ...filters, instantBook: checked as boolean })}
              />
              <label htmlFor="instantBook" className="text-sm cursor-pointer">
                Instant Book
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="superhost"
                checked={filters.superhost}
                onCheckedChange={(checked) => onFiltersChange({ ...filters, superhost: checked as boolean })}
              />
              <label htmlFor="superhost" className="text-sm cursor-pointer">
                Superhost
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
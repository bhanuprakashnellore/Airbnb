import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";
import property5 from "@/assets/property5.jpg";
import property6 from "@/assets/property6.jpg";
import property7 from "@/assets/property7.jpg";
import property8 from "@/assets/property8.jpg";
import property9 from "@/assets/property9.jpg";
import property10 from "@/assets/property10.jpg";
import property11 from "@/assets/property11.jpg";
import property12 from "@/assets/property12.jpg";

const properties = [
  {
    id: "1",
    image: property1,
    title: "Modern Beachfront Villa",
    type: "Entire villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 450,
    rating: 4.9,
    reviews: 127,
    location: "Malibu, California",
    isNew: true,
  },
  {
    id: "2",
    image: property2,
    title: "Cozy Mountain Cabin",
    type: "Entire cabin",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 180,
    rating: 4.8,
    reviews: 89,
    location: "Aspen, Colorado",
  },
  {
    id: "3",
    image: property3,
    title: "Downtown City Loft",
    type: "Entire apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    price: 220,
    rating: 4.7,
    reviews: 203,
    location: "New York, NY",
  },
  {
    id: "4",
    image: property4,
    title: "English Countryside Cottage",
    type: "Entire house",
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    price: 95,
    rating: 4.9,
    reviews: 156,
    location: "Cotswolds, England",
    isNew: true,
  },
  {
    id: "5",
    image: property5,
    title: "Desert Modern Retreat",
    type: "Entire house",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    price: 320,
    rating: 4.8,
    reviews: 74,
    location: "Scottsdale, Arizona",
  },
  {
    id: "6",
    image: property6,
    title: "Lakefront Log Cabin",
    type: "Entire cabin",
    guests: 8,
    bedrooms: 4,
    bathrooms: 2,
    price: 280,
    rating: 4.9,
    reviews: 98,
    location: "Lake Tahoe, California",
  },
  {
    id: "7",
    image: property7,
    title: "Luxury Downtown Penthouse",
    type: "Entire apartment",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    price: 850,
    rating: 4.9,
    reviews: 45,
    location: "Manhattan, New York",
    isNew: true,
  },
  {
    id: "8",
    image: property8,
    title: "Rustic Countryside Farmhouse",
    type: "Entire house",
    guests: 10,
    bedrooms: 5,
    bathrooms: 3,
    price: 195,
    rating: 4.8,
    reviews: 132,
    location: "Tuscany, Italy",
  },
  {
    id: "9",
    image: property9,
    title: "Tropical Beach Bungalow",
    type: "Entire bungalow",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    price: 380,
    rating: 4.9,
    reviews: 87,
    location: "Bora Bora, French Polynesia",
  },
  {
    id: "10",
    image: property10,
    title: "Industrial City Studio",
    type: "Entire studio",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 125,
    rating: 4.6,
    reviews: 213,
    location: "Brooklyn, New York",
  },
  {
    id: "11",
    image: property11,
    title: "Alpine Ski Chalet",
    type: "Entire chalet",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 520,
    rating: 4.9,
    reviews: 76,
    location: "Chamonix, France",
    isNew: true,
  },
  {
    id: "12",
    image: property12,
    title: "Historic Victorian Mansion",
    type: "Entire house",
    guests: 12,
    bedrooms: 6,
    bathrooms: 4,
    price: 680,
    rating: 4.8,
    reviews: 94,
    location: "San Francisco, California",
  },
];

interface PropertyGridProps {
  onPropertyClick?: (propertyId: string) => void;
}

const PropertyGrid = ({ onPropertyClick }: PropertyGridProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <div 
            key={property.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <PropertyCard
              {...property}
              onClick={() => onPropertyClick?.(property.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
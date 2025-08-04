import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";
import property5 from "@/assets/property5.jpg";
import property6 from "@/assets/property6.jpg";

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
];

interface PropertyGridProps {
  onPropertyClick?: (propertyId: string) => void;
}

const PropertyGrid = ({ onPropertyClick }: PropertyGridProps) => {
  return (
    <div className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onClick={() => onPropertyClick?.(property.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyGrid;
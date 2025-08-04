import { Heart, Star } from "lucide-react";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";

interface PropertyCardProps {
  id: string;
  image: string | string[];
  title: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  isNew?: boolean;
  onClick?: () => void;
}

const PropertyCard = ({ 
  image, 
  title, 
  type, 
  guests, 
  bedrooms, 
  bathrooms, 
  price, 
  rating, 
  reviews, 
  location,
  isNew = false,
  onClick 
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className="group cursor-pointer animate-fade-in hover-scale"
      onClick={onClick}
    >
      <div className="relative mb-3">
        {Array.isArray(image) ? (
          <ImageCarousel images={image} title={title} />
        ) : (
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <button
          className="absolute top-3 right-3 p-2 rounded-full hover:scale-110 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart 
            className={`h-5 w-5 ${
              isFavorite 
                ? "fill-primary text-primary" 
                : "fill-black/20 text-white stroke-2"
            }`} 
          />
        </button>
        {isNew && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-medium">
            Guest favorite
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-800 line-clamp-1">{title}</h3>
          <div className="flex items-center space-x-1 ml-2">
            <Star className="h-4 w-4 fill-current text-gray-800" />
            <span className="text-sm text-gray-800">{rating}</span>
            {reviews > 0 && (
              <span className="text-sm text-gray-600">({reviews})</span>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-1">{location}</p>
        <p className="text-gray-600 text-sm">
          {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
        </p>
        <p className="text-gray-600 text-sm">{type}</p>
        
        <div className="pt-1">
          <span className="font-semibold text-gray-800">${price}</span>
          <span className="text-gray-600 text-sm"> night</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
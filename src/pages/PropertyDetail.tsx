import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Heart, Share, Wifi, Car, Coffee, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import property1 from "@/assets/property1.jpg";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock property data - in real app this would come from API
  const property = {
    id: "1",
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    rating: 4.9,
    reviews: 127,
    images: [property1, property1, property1, property1, property1],
    host: "Sarah",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 450,
    description: "Experience luxury living in this stunning beachfront villa. With panoramic ocean views, modern amenities, and direct beach access, this property offers the perfect getaway for families and groups.",
    amenities: [
      { icon: Wifi, label: "Wifi" },
      { icon: Car, label: "Free parking" },
      { icon: Coffee, label: "Kitchen" },
      { icon: Tv, label: "TV" },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center space-x-2">
              <Share className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Save</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {property.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-current text-gray-800" />
              <span className="font-medium">{property.rating}</span>
              <span className="text-gray-600">({property.reviews} reviews)</span>
            </div>
            <span className="text-gray-600">{property.location}</span>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-96 mb-8 rounded-xl overflow-hidden">
          <div className="col-span-2 row-span-2">
            <img 
              src={property.images[0]} 
              alt="Main property image"
              className="w-full h-full object-cover"
            />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index}>
              <img 
                src={image} 
                alt={`Property image ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Property Info */}
          <div className="lg:col-span-2">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Entire villa hosted by {property.host}
              </h2>
              <p className="text-gray-600">
                {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">About this place</h3>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">{amenity.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 border border-gray-200 rounded-xl shadow-card sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-semibold">${property.price}</span>
                  <span className="text-gray-600"> night</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-gray-800" />
                  <span className="text-sm font-medium">{property.rating}</span>
                  <span className="text-sm text-gray-600">({property.reviews})</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-0 border border-gray-300 rounded-lg overflow-hidden">
                  <div className="p-3 border-r border-gray-300">
                    <div className="text-xs font-medium text-gray-800">CHECK-IN</div>
                    <div className="text-sm text-gray-600">Add date</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-medium text-gray-800">CHECKOUT</div>
                    <div className="text-sm text-gray-600">Add date</div>
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg p-3">
                  <div className="text-xs font-medium text-gray-800">GUESTS</div>
                  <div className="text-sm text-gray-600">1 guest</div>
                </div>

                <Button variant="search" className="w-full">
                  Reserve
                </Button>

                <p className="text-center text-sm text-gray-600">
                  You won't be charged yet
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-700">${property.price} × 5 nights</span>
                    <span className="text-gray-700">${property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cleaning fee</span>
                    <span className="text-gray-700">$75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Service fee</span>
                    <span className="text-gray-700">$200</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>${(property.price * 5) + 75 + 200}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
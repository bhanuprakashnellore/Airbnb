import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Waves, 
  Mountain, 
  TreePine, 
  Castle, 
  Plane, 
  Coffee,
  UtensilsCrossed 
} from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Home },
  { id: "beachfront", label: "Beachfront", icon: Waves },
  { id: "mountains", label: "Mountains", icon: Mountain },
  { id: "cabins", label: "Cabins", icon: TreePine },
  { id: "historical", label: "Historical homes", icon: Castle },
  { id: "trending", label: "Trending", icon: Plane },
  { id: "breakfast", label: "Bed & breakfasts", icon: Coffee },
  { id: "chef", label: "Chef's kitchens", icon: UtensilsCrossed },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center space-y-2 pb-3 border-b-2 transition-colors min-w-fit ${
                  activeCategory === category.id
                    ? "border-gray-800 text-gray-800"
                    : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium whitespace-nowrap">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

const ImageCarousel = ({ images, title, className }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length <= 1) {
    return (
      <div className={cn("relative aspect-square rounded-xl overflow-hidden", className)}>
        <img 
          src={images[0]} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-square rounded-xl overflow-hidden group", className)}>
      <img 
        src={images[currentIndex]} 
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      
      {/* Previous Button */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Next Button */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-200",
              index === currentIndex 
                ? "bg-white" 
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
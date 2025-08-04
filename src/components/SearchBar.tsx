import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  location: string;
  checkIn?: Date;
  checkOut?: Date;
  guests: number;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const handleSearch = () => {
    onSearch?.({
      location,
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Location */}
        <div className="flex-1 px-6 py-4 border-r border-gray-200">
          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-gray-400" />
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-700 block mb-1">
                Where
              </label>
              <Input
                placeholder="Search destinations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 p-0 h-auto text-sm focus-visible:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Check In */}
        <div className="flex-1 px-6 py-4 border-r border-gray-200">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center space-x-3 cursor-pointer">
                <Calendar className="h-4 w-4 text-gray-400" />
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">
                    Check in
                  </label>
                  <div className="text-sm text-gray-600">
                    {checkIn ? format(checkIn, "MMM d") : "Add dates"}
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                disabled={(date) => date < new Date()}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check Out */}
        <div className="flex-1 px-6 py-4 border-r border-gray-200">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center space-x-3 cursor-pointer">
                <Calendar className="h-4 w-4 text-gray-400" />
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">
                    Check out
                  </label>
                  <div className="text-sm text-gray-600">
                    {checkOut ? format(checkOut, "MMM d") : "Add dates"}
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={(date) => date < (checkIn || new Date())}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="flex-1 px-6 py-4">
          <Popover open={showGuestPicker} onOpenChange={setShowGuestPicker}>
            <PopoverTrigger asChild>
              <div className="flex items-center space-x-3 cursor-pointer">
                <Users className="h-4 w-4 text-gray-400" />
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">
                    Who
                  </label>
                  <div className="text-sm text-gray-600">
                    {guests} guest{guests !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Guests</div>
                    <div className="text-sm text-gray-500">Ages 13 or above</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      disabled={guests <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{guests}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => setGuests(guests + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <div className="px-2">
          <Button
            onClick={handleSearch}
            className="rounded-full h-12 w-12 p-0"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
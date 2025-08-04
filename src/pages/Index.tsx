import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyGrid from "@/components/PropertyGrid";

const Index = () => {
  const navigate = useNavigate();

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryFilter />
      <PropertyGrid onPropertyClick={handlePropertyClick} />
    </div>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import beefEmpanada from "@/assets/beef-empanada.jpg";
import chickenEmpanada from "@/assets/chicken-empanada.jpg";
import veggieEmpanada from "@/assets/veggie-empanada.jpg";

const Menu = () => {
  const categories = ["All", "Beef", "Chicken", "Vegetarian", "Specials"];

  const products = [
    {
      name: "Classic Beef Empanada",
      description: "Savory ground beef with traditional spices in a golden flaky crust",
      price: 4.99,
      image: beefEmpanada,
      category: "Beef",
    },
    {
      name: "Spicy Beef Empanada",
      description: "Beef with jalapeños and pepper jack cheese for a kick",
      price: 5.49,
      image: beefEmpanada,
      category: "Beef",
    },
    {
      name: "Chicken Supreme",
      description: "Tender chicken with vegetables in our signature pastry",
      price: 4.99,
      image: chickenEmpanada,
      category: "Chicken",
    },
    {
      name: "BBQ Chicken Empanada",
      description: "Smoky BBQ chicken with caramelized onions",
      price: 5.49,
      image: chickenEmpanada,
      category: "Chicken",
    },
    {
      name: "Garden Vegetarian",
      description: "Fresh spinach and cheese blend for a delightful taste",
      price: 4.49,
      image: veggieEmpanada,
      category: "Vegetarian",
    },
    {
      name: "Mediterranean Veggie",
      description: "Roasted vegetables with feta and herbs",
      price: 4.99,
      image: veggieEmpanada,
      category: "Vegetarian",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header Section */}
      <section className="py-20 gradient-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl opacity-90">
            Explore our selection of premium handcrafted empanadas
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search empanadas..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "shadow-gold" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;

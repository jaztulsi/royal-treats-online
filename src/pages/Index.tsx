import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Crown, Star, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-empanada.jpg";
import beefEmpanada from "@/assets/beef-empanada.jpg";
import chickenEmpanada from "@/assets/chicken-empanada.jpg";
import veggieEmpanada from "@/assets/veggie-empanada.jpg";

const Index = () => {
  const featuredProducts = [
    {
      name: "Classic Beef Empanada",
      description: "Savory ground beef with traditional spices in a golden flaky crust",
      price: 4.99,
      image: beefEmpanada,
    },
    {
      name: "Chicken Supreme",
      description: "Tender chicken with vegetables in our signature pastry",
      price: 4.99,
      image: chickenEmpanada,
    },
    {
      name: "Garden Vegetarian",
      description: "Fresh spinach and cheese blend for a delightful taste",
      price: 4.49,
      image: veggieEmpanada,
    },
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      rating: 5,
      comment: "The best empanadas I've ever tasted! Authentic and delicious.",
    },
    {
      name: "James Chen",
      rating: 5,
      comment: "Premium quality and exceptional service. Highly recommend!",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "These empanadas remind me of home. Pure perfection!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Empanadas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-12 h-12 text-primary" />
              <span className="text-primary text-lg font-semibold">Premium Quality</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Experience the
              <span className="block text-gradient-gold">Royal Taste</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Handcrafted empanadas made with tradition, passion, and the finest ingredients.
              Every bite tells a story of heritage and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button size="lg" className="text-lg px-8 shadow-gold">
                  Order Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Only the finest ingredients for an exceptional taste
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Traditional Recipe</h3>
                <p className="text-muted-foreground">
                  Authentic flavors passed down through generations
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Fresh empanadas delivered hot to your door
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Empanadas</h2>
            <p className="text-xl text-muted-foreground">
              Discover our most popular handcrafted delicacies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="shadow-elegant">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 gradient-royal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Crown className="w-16 h-16 mx-auto" />
            <h2 className="text-4xl font-bold">Tradition Meets Excellence</h2>
            <p className="text-lg opacity-90">
              At CTK Empanadas, we believe in honoring tradition while delivering unmatched quality.
              Each empanada is lovingly handcrafted using time-tested recipes and premium ingredients,
              bringing you an authentic taste experience that stands above the rest.
            </p>
            <Link to="/about">
              <Button size="lg" variant="secondary" className="mt-4">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

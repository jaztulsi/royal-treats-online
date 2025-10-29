import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ name, description, price, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300 border-border">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full shadow-gold group-hover:scale-105 transition-transform">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

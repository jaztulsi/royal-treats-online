import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartEmpty = true;

  if (cartEmpty) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <section className="flex-1 flex items-center justify-center py-20">
          <div className="text-center space-y-6">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto" />
            <h2 className="text-3xl font-bold">Your Cart is Empty</h2>
            <p className="text-muted-foreground text-lg">
              Add some delicious empanadas to get started!
            </p>
            <Link to="/menu">
              <Button size="lg" className="shadow-gold">
                Browse Menu
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Cart Items</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Sample cart item */}
                  <div className="flex items-center gap-4 pb-4 border-b">
                    <img
                      src="/placeholder.svg"
                      alt="Product"
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">Classic Beef Empanada</h3>
                      <p className="text-sm text-muted-foreground">
                        Savory ground beef with traditional spices
                      </p>
                      <p className="text-primary font-semibold mt-1">$4.99</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="outline">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center">1</span>
                      <Button size="icon" variant="outline">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button size="icon" variant="ghost" className="text-destructive">
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Options */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Delivery Options</h2>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="delivery">
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Delivery</div>
                        <div className="text-sm text-muted-foreground">30-45 minutes</div>
                      </Label>
                      <span className="font-semibold">$4.99</span>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg mt-3">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                        <div className="font-semibold">Pickup</div>
                        <div className="text-sm text-muted-foreground">Ready in 20 minutes</div>
                      </Label>
                      <span className="font-semibold">Free</span>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <h2 className="text-2xl font-semibold">Order Summary</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">$4.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="font-semibold">$4.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-semibold">$0.80</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">$10.78</span>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button className="w-full shadow-gold" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Link to="/menu" className="w-full">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;

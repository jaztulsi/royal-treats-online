import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-20 gradient-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <Crown className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A journey of passion, tradition, and the pursuit of perfection
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-lg">
            <p>
              CTK Empanadas was born from a simple belief: that food made with love, tradition,
              and quality ingredients can bring people together and create lasting memories.
            </p>
            <p>
              Our founder, inspired by generations of family recipes and a passion for authentic
              flavors, set out to create empanadas that honor tradition while meeting the highest
              standards of quality. Each empanada is handcrafted using time-tested techniques and
              premium ingredients sourced from trusted suppliers.
            </p>
            <p>
              What sets us apart is our unwavering commitment to excellence. From the moment we
              select our ingredients to the final golden-brown crisp of our pastry, every step
              is executed with meticulous attention to detail. We believe that our customers
              deserve nothing less than royal treatment.
            </p>
            <p>
              Today, CTK Empanadas stands as a testament to the power of tradition combined with
              modern quality standards. We continue to serve our community with the same passion
              and dedication that inspired our beginning, one delicious empanada at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on ingredients or craftsmanship
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every empanada is crafted with care and passion
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for perfection in every aspect of our business
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building connections through authentic food experiences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20 shadow-elegant">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                To deliver premium, handcrafted empanadas that honor tradition, celebrate quality,
                and create memorable experiences for our customers. We are committed to excellence
                in every bite, making the royal taste accessible to all who appreciate fine food.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

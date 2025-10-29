import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order through our website by browsing our menu, adding items to your cart, and proceeding to checkout. Alternatively, you can call us directly at +1 (555) 123-4567.",
    },
    {
      question: "What are your delivery hours?",
      answer: "We deliver Monday through Saturday from 10 AM to 9 PM, and Sunday from 11 AM to 8 PM. Delivery typically takes 30-45 minutes depending on your location.",
    },
    {
      question: "Do you offer pickup options?",
      answer: "Yes! You can choose pickup during checkout. Orders are usually ready in 20 minutes. We'll notify you when your order is ready for pickup.",
    },
    {
      question: "Are your empanadas vegetarian-friendly?",
      answer: "Absolutely! We offer several vegetarian options including our Garden Vegetarian and Mediterranean Veggie empanadas. All vegetarian items are clearly marked on our menu.",
    },
    {
      question: "Can I customize my order?",
      answer: "Yes, we offer customization options such as extra sauce, spice level adjustments, and special dietary requests. Please note your preferences in the order notes or contact us directly.",
    },
    {
      question: "What ingredients do you use?",
      answer: "We use only premium, fresh ingredients sourced from trusted suppliers. All our empanadas are handcrafted daily using traditional recipes and high-quality meats, vegetables, and spices.",
    },
    {
      question: "Do you provide nutritional information?",
      answer: "Yes, nutritional information and allergen details are available for each item on our menu page. If you have specific dietary concerns, please don't hesitate to contact us.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Orders can be cancelled within 5 minutes of placement for a full refund. After that, please contact us directly and we'll do our best to accommodate your request.",
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes! We provide catering services for events of all sizes. Please contact us at least 48 hours in advance to discuss your catering needs and get a custom quote.",
    },
    {
      question: "How do I store leftover empanadas?",
      answer: "Store leftover empanadas in an airtight container in the refrigerator for up to 3 days. To reheat, place in a preheated oven at 350°F for 10-15 minutes for best results.",
    },
    {
      question: "Do you have gluten-free options?",
      answer: "We're currently working on developing gluten-free options. Please check back soon or contact us to be notified when they become available.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and popular digital payment methods including Apple Pay and Google Pay.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-20 gradient-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90">
            Find answers to common questions about our empanadas and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Search */}
            <div className="mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still have questions */}
            <div className="mt-12 text-center p-8 bg-muted/50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Please reach out to our customer support team.
              </p>
              <a href="/contact">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 shadow-gold">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

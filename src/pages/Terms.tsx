import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-20 gradient-royal text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Terms & Privacy</h1>
          <p className="text-xl opacity-90">
            Our commitment to your privacy and service terms
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Terms of Service */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using CTK Empanadas' services, you accept and agree to be bound by the terms
                    and provision of this agreement. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Use of Service</h3>
                  <p>
                    Our service allows you to order premium empanadas for delivery or pickup. You agree to use the
                    service only for lawful purposes and in accordance with these Terms of Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Orders and Payment</h3>
                  <p>
                    All orders are subject to acceptance and availability. We reserve the right to refuse or cancel
                    any order for any reason. Payment must be made at the time of order placement through our
                    accepted payment methods.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Delivery and Pickup</h3>
                  <p>
                    Delivery times are estimates and may vary due to factors beyond our control. For pickup orders,
                    items must be collected within the specified timeframe or they may be subject to cancellation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Cancellations and Refunds</h3>
                  <p>
                    Orders may be cancelled within 5 minutes of placement for a full refund. After this period,
                    cancellations are subject to our discretion and may incur charges.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h3>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, place an
                    order, or contact us for support. This may include your name, email address, phone number,
                    delivery address, and payment information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h3>
                  <p>
                    We use the information we collect to process your orders, communicate with you about your
                    orders, improve our services, and send you marketing communications (with your consent).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Information Sharing</h3>
                  <p>
                    We do not sell your personal information. We may share your information with service providers
                    who assist us in operating our business, such as payment processors and delivery partners,
                    under strict confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Your Rights</h3>
                  <p>
                    You have the right to access, correct, or delete your personal information. You may also opt
                    out of marketing communications at any time. To exercise these rights, please contact us at
                    privacy@ctkempanadas.com.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cookies</h3>
                  <p>
                    We use cookies and similar tracking technologies to improve your browsing experience,
                    analyze site traffic, and understand where our visitors are coming from.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Changes to Privacy Policy</h3>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any changes by
                    posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service or our Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Email: legal@ctkempanadas.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Empanada Street, Foodie District, FD 12345</p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;

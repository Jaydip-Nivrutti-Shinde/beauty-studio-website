import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import hairStyling from "@/assets/hair-styling.jpg";
import facialSkincare from "@/assets/facial-skincare.jpg";
import nailArt from "@/assets/nail-art.jpg";
import mehandi from "@/assets/mehandi.jpg";
import hairTreatment from "@/assets/hair-treatment.jpg";
import sareeDraping from "@/assets/saree-draping.jpg";

const Services = () => {
  const services = [
    {
      title: "Bridal Makeup",
      image: bridalMakeup,
      price: "₹15,000 - ₹25,000",
      description:
        "Complete bridal makeup package including trial, hair styling, saree draping, and touch-up kit. We use premium products to ensure you look flawless on your special day.",
      features: [
        "Pre-bridal consultation",
        "Makeup trial session",
        "HD makeup application",
        "Hair styling",
        "Saree draping",
        "Touch-up kit",
      ],
    },
    {
      title: "Hair Styling",
      image: hairStyling,
      price: "₹800 - ₹2,500",
      description:
        "Professional hair styling for parties, weddings, and special occasions. From elegant updos to glamorous curls, we create the perfect look for you.",
      features: [
        "Consultation",
        "Hair wash & conditioning",
        "Styling",
        "Setting spray",
        "Hair accessories available",
      ],
    },
    {
      title: "Facial & Skincare",
      image: facialSkincare,
      price: "₹1,200 - ₹3,500",
      description:
        "Rejuvenating facial treatments customized for your skin type. Our facials cleanse, exfoliate, and nourish your skin for a healthy, radiant glow.",
      features: [
        "Skin analysis",
        "Deep cleansing",
        "Exfoliation",
        "Face massage",
        "Mask application",
        "Moisturizing",
      ],
    },
    {
      title: "Nail Art",
      image: nailArt,
      price: "₹500 - ₹2,000",
      description:
        "Creative nail art and professional manicure/pedicure services. Beautiful designs that complement your style and personality.",
      features: [
        "Nail shaping & filing",
        "Cuticle care",
        "Hand/foot massage",
        "Polish application",
        "Nail art designs",
        "Gel polish available",
      ],
    },
    {
      title: "Mehandi",
      image: mehandi,
      price: "₹500 - ₹5,000",
      description:
        "Traditional and contemporary mehandi designs for all occasions. From simple patterns to intricate bridal mehandi, we create stunning henna art.",
      features: [
        "Traditional designs",
        "Arabic patterns",
        "Bridal mehandi",
        "Contemporary styles",
        "Natural henna",
        "Long-lasting color",
      ],
    },
    {
      title: "Hair Treatment",
      image: hairTreatment,
      price: "₹1,500 - ₹4,000",
      description:
        "Intensive hair care treatments to restore health and shine. Our treatments address various hair concerns from damage to dryness.",
      features: [
        "Hair & scalp analysis",
        "Deep conditioning",
        "Keratin treatment",
        "Hair spa",
        "Scalp massage",
        "Heat protection",
      ],
    },
    {
      title: "Saree Draping",
      image: sareeDraping,
      price: "₹500 - ₹1,500",
      description:
        "Professional saree draping in various styles. Perfect draping for weddings, parties, and cultural events.",
      features: [
        "Traditional styles",
        "Contemporary draping",
        "Regional styles",
        "Pin-up service",
        "Pleating perfection",
        "Style consultation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive beauty solutions tailored to your needs. Experience the perfect blend of
              traditional and modern techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover-scale">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-2xl font-bold text-primary">{service.price}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Includes:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 rounded-full"
                      >
                        <Link to="/booking">Book Now</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today and let us pamper you
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 rounded-full px-8"
          >
            <Link to="/booking">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
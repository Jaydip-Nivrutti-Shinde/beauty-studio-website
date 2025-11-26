import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles, Heart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQ from "@/components/FAQ";
import heroImage from "@/assets/hero-beauty-salon.jpg";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import hairStyling from "@/assets/hair-styling.jpg";
import facialSkincare from "@/assets/facial-skincare.jpg";
import nailArt from "@/assets/nail-art.jpg";

const Home = () => {
  const services = [
    {
      title: "Bridal Makeup",
      image: bridalMakeup,
      description: "Look stunning on your special day",
    },
    {
      title: "Hair Styling",
      image: hairStyling,
      description: "Professional styling for every occasion",
    },
    {
      title: "Facial & Skincare",
      image: facialSkincare,
      description: "Rejuvenate your skin with our treatments",
    },
    {
      title: "Nail Art",
      image: nailArt,
      description: "Beautiful nails that make a statement",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      service: "Bridal Makeup",
      rating: 5,
      review:
        "Absolutely amazing! The bridal makeup was flawless and lasted throughout my wedding day. Highly recommend Beauty Studio!",
    },
    {
      name: "Neha Patel",
      service: "Hair Styling",
      rating: 5,
      review:
        "The hair styling service is exceptional. The staff is professional and they really understand what you want. Will definitely come back!",
    },
    {
      name: "Anjali Desai",
      service: "Facial Treatment",
      rating: 5,
      review:
        "Best facial treatment I've ever had! My skin feels amazing and glowing. The ambiance is so relaxing too.",
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Professional Experts",
      description: "Certified beauticians with years of experience",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Premium Products",
      description: "Only the finest quality beauty products",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Personalized Care",
      description: "Treatments tailored to your unique needs",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Discover Your Natural Beauty
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Elegant beauty services that bring out the best in you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-lg shadow-glow"
            >
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover-scale bg-card">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive beauty solutions for every occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover-scale group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 rounded-full px-8"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About  Beauty Studio</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are a premier beauty studio dedicated to making you look and feel your absolute
              best. With years of experience and a passion for beauty, our team of expert
              beauticians provides personalized services using the finest products and latest
              techniques.
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from our valued clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today and experience the difference
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 rounded-full px-8"
          >
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
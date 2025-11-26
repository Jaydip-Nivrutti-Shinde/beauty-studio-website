import { Award, Heart, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "5000+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, value: "10+", label: "Years Experience" },
    { icon: <Star className="w-8 h-8" />, value: "4.9", label: "Average Rating" },
    { icon: <Heart className="w-8 h-8" />, value: "100%", label: "Satisfaction" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every service we provide",
    },
    {
      title: "Authenticity",
      description: "We believe in enhancing your natural beauty",
    },
    {
      title: "Innovation",
      description: "We stay updated with the latest beauty trends and techniques",
    },
    {
      title: "Care",
      description: "Your comfort and satisfaction are our top priorities",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in beauty and elegance
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                 Beauty Studio was founded with a passion for making people look and feel
                their absolute best. What started as a small beauty parlor has grown into one of
                the most trusted beauty studios in the region.
              </p>
              <p>
                We believe that every person is unique and deserves personalized care. Our team of
                experienced beauticians combines traditional techniques with modern innovations to
                deliver exceptional results. Whether you're preparing for your wedding day, a
                special event, or simply want to pamper yourself, we're here to make you shine.
              </p>
              <p>
                Over the years, we've had the privilege of being part of countless special moments
                in our clients' lives. From bridal makeovers to everyday beauty treatments, we take
                pride in bringing out the natural beauty in everyone who walks through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-primary mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover-scale">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            To empower individuals through beauty services that enhance confidence, celebrate
            uniqueness, and create lasting memories. We are committed to providing exceptional
            service in a welcoming environment where everyone feels valued and beautiful.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
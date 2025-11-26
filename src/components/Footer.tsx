import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 text-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4"> Beauty Studio</h3>
            <p className="text-muted-foreground text-sm">
              Your destination for elegant beauty services. We bring out the best in you with our
              professional expertise and personalized care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">info@beautystudio.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/beautystudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @beautystudio
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Monday - Saturday</p>
                  <p className="text-foreground font-medium">10:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Sunday</p>
                  <p className="text-foreground font-medium">11:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}  Beauty Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
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
import heroImage from "@/assets/hero-beauty-salon.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: bridalMakeup, title: "Bridal Makeup", category: "Makeup" },
    { src: hairStyling, title: "Hair Styling", category: "Hair" },
    { src: facialSkincare, title: "Facial & Skincare", category: "Skincare" },
    { src: nailArt, title: "Nail Art", category: "Nails" },
    { src: mehandi, title: "Mehandi Design", category: "Mehandi" },
    { src: hairTreatment, title: "Hair Treatment", category: "Hair" },
    { src: sareeDraping, title: "Saree Draping", category: "Styling" },
    { src: heroImage, title: "Studio Interior", category: "Studio" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Explore our work and get inspired for your next beauty transformation
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover-scale cursor-pointer aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-primary-foreground/90 mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary-foreground">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Follow Us on Instagram</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Stay updated with our latest work and special offers
          </p>
          <a
            href="https://www.instagram.com/beautystudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover-scale">
              @beautystudio
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
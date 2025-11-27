import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your pricing ranges for bridal packages?",
      answer:
        "Our bridal makeup packages range from ₹15,000 to ₹25,000, depending on the services included. This typically includes pre-bridal consultation, makeup trial, HD makeup application, hair styling, saree draping, and a touch-up kit. We offer customizable packages to suit your specific needs and budget.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website by clicking the 'Book Appointment' button, calling us directly, or messaging us on WhatsApp. We recommend booking at least 2-3 weeks in advance for regular services and 2-3 months for bridal services.",
    },
    {
      question: "What is your cancellation/rescheduling policy?",
      answer:
        "We understand that plans can change. You can reschedule your appointment up to 24 hours before the scheduled time without any charges. For cancellations, please notify us at least 24 hours in advance. For bridal bookings, specific terms apply based on the advance payment.",
    },
    {
      question: "Do you use branded products?",
      answer:
        "Yes, we only use premium, branded beauty products from well-known international and Indian brands. We use products that are suitable for all skin types and are known for their quality and longevity.",
    },
    {
      question: "Do you provide home services?",
      answer:
        "Yes, we do provide home services for bridal makeup, party makeup, and hair styling. Additional travel charges may apply depending on the location. Please contact us for more details and availability.",
    },
    {
      question: "How long does a typical service take?",
      answer:
        "Service duration varies: Regular facial (60-90 mins), Hair styling (45-60 mins), Bridal makeup (2-3 hours), Mehandi application (30 mins to 3 hours depending on design complexity). We'll give you an estimated time when you book.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-none shadow-md rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
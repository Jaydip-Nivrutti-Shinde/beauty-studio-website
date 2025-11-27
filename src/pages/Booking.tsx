import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Booking = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    service: "",
    additionalNotes: "",
  });

  const services = [
    "Bridal Makeup",
    "Hair Styling",
    "Facial & Skincare",
    "Nail Art",
    "Mehandi",
    "Hair Treatment",
    "Saree Draping",
  ];

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("appointments").insert([
        {
          customer_name: formData.customerName,
          phone_number: formData.phoneNumber,
          email: formData.email,
          appointment_date: formData.appointmentDate,
          appointment_time: formData.appointmentTime,
          service: formData.service,
          additional_notes: formData.additionalNotes,
        },
      ]);

      if (error) throw error;

      toast.success("Appointment booked successfully!", {
        description: "We'll contact you shortly to confirm your appointment.",
      });

      // Reset form
      setFormData({
        customerName: "",
        phoneNumber: "",
        email: "",
        appointmentDate: "",
        appointmentTime: "",
        service: "",
        additionalNotes: "",
      });

      // Navigate to home after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Failed to book appointment", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Appointment</h1>
            <p className="text-xl text-muted-foreground">
              Fill in your details and we'll get back to you to confirm your appointment
            </p>
          </div>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Appointment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="customerName">Full Name *</Label>
                  <Input
                    id="customerName"
                    placeholder="Enter your full name"
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData({ ...formData, customerName: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="appointmentDate">Preferred Date *</Label>
                    <Input
                      id="appointmentDate"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.appointmentDate}
                      onChange={(e) =>
                        setFormData({ ...formData, appointmentDate: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appointmentTime">Preferred Time *</Label>
                    <Select
                      value={formData.appointmentTime}
                      onValueChange={(value) =>
                        setFormData({ ...formData, appointmentTime: value })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Any special requests or information we should know..."
                    value={formData.additionalNotes}
                    onChange={(e) =>
                      setFormData({ ...formData, additionalNotes: e.target.value })
                    }
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 rounded-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book Appointment"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By booking, you agree to receive confirmation via phone/email
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
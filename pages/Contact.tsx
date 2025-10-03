import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import MapComponent from "@/components/ui/MapComponent";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 2 hours for a free consultation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Phone Number",
      details: "+92 301 7757484",
      action: "tel:+923017757484",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-accent" />,
      title: "WhatsApp",
      details: "+92 301 7757484",
      action: "https://wa.me/923017757484",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Address",
      details: "m.atradersceo484@gmail.com",
      action: "m.atradersceo484@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-success" />,
      title: "Office Address",
      details: "64 Gulshan block shop No.4 Allama Iqbal town Lahore, Pakistan",
      action: "https://maps.app.goo.gl/oTXZhN29pbqF7E8L6",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Only" },
  ];

  const services = [
    "Solar System Installation",
    "Net Metering Solutions",
    "Custom Solar Design",
    "Equipment Trading",
    "Maintenance Services",
    "Consultation & Analysis",
    "Other Services",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-secondary text-black">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Get Your Free
              <span className="block text-secondary">Solar Quote Today</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to start saving with solar energy? Contact our experts for a
              free consultation and customized quote for your property.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary mb-2">
                  Request Free Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2
                  hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Enter your full name"
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+92 3XX XXXXXXX"
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your.email@example.com"
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
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
                      <Label htmlFor="location">Property Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        placeholder="City, Area"
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your energy needs, roof type, current electricity bill, etc."
                      rows={4}
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-solar text-primary-foreground shadow-solar hover:shadow-energy transition-smooth text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Get Free Quote Now
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Multiple ways to reach us. Choose what works best for you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover-lift border-0 shadow-elegant"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-muted rounded-lg">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {info.details}
                          </p>
                          <Button
                            asChild
                            variant="link"
                            className="p-0 h-auto text-black hover:text-secondary transition-smooth"
                          >
                            <a
                              href={info.action}
                              target={
                                info.action.startsWith("http") ? "#" : undefined
                              }
                            >
                              Contact Now →
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Map */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl font-heading text-primary">
                    Business Hours
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">
                  We're available when you need us most
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                    >
                      <span className="font-medium text-foreground">
                        {schedule.day}
                      </span>
                      <span className="text-muted-foreground">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-accent mb-1">
                        Emergency Support
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        For urgent technical issues with existing installations,
                        we provide 24/7 emergency support.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-elegant overflow-hidden">
  <CardHeader>
    <CardTitle className="text-2xl font-heading text-primary mb-2">
      Visit Our Office
    </CardTitle>
    <p className="text-muted-foreground">
      Located in the heart of Lahore for easy access
    </p>
  </CardHeader>

  <CardContent>
    {/* Map Container */}
    <div className="h-64 w-full mb-4 rounded-lg overflow-hidden">
      <MapComponent />
    </div>

    {/* Button */}
    <Button
      asChild
      className="w-full bg-gradient-energy text-primary-foreground shadow-energy"
    >
      <a
        href="https://maps.app.goo.gl/oTXZhN29pbqF7E8L6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin className="mr-2 h-4 w-4" />
        Open in Google Maps
      </a>
    </Button>
  </CardContent>
</Card>

          </div>
        </div>
      </section>

      {/* Social Media & FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Follow Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stay updated with our latest projects, solar tips, and industry
                news.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1877f2] hover:bg-[#166fe5] text-white"
                >
                  <a
                    href="https://facebook.com"
                    target="#"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="mr-2 h-5 w-5" />
                    Facebook
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white"
                >
                  <a
                    href="https://instagram.com"
                    target="#"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-[#25d366] hover:bg-[#128c7e] text-white col-span-1 sm:col-span-2"
                >
                  <a
                    href="https://wa.me/923017757484"
                    target="#"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Business
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick FAQ */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Quick Questions?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "How long does installation take?",
                    a: "Typically 2-5 days for residential and 1-4 weeks for commercial projects.",
                  },
                  {
                    q: "What warranty do you provide?",
                    a: "25 years on panels, 10 years on inverters, 2 years on installation workmanship.",
                  },
                  {
                    q: "Do you handle net metering?",
                    a: "Yes, we handle all NEPRA applications and utility coordination for net metering.",
                  },
                  {
                    q: "What financing options are available?",
                    a: "We offer flexible payment plans and can help connect you with solar financing partners.",
                  },
                ].map((faq, index) => (
                  <Card
                    key={index}
                    className="hover-lift border-0 shadow-elegant"
                  >
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary mb-2">
                        {faq.q}
                      </h4>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait! Start saving on your electricity bills today. Our team
            is standing by to help you make the switch to clean energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 shadow-solar text-lg px-8 py-6"
            >
              <a href="tel:+923017757484">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +92 301 7757484
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/923017757484
"
                target="#"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

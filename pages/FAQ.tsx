import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  HelpCircle,
  Sun,
  DollarSign,
  Calendar,
  Shield,
  Zap,
  Home,
  Building,
  ArrowRight,
  Phone,
  MessageCircle
} from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      icon: <HelpCircle className="h-5 w-5" />,
      description: 'Basic information about solar energy'
    },
    {
      id: 'cost',
      name: 'Cost & Financing',
      icon: <DollarSign className="h-5 w-5" />,
      description: 'Pricing and payment options'
    },
    {
      id: 'installation',
      name: 'Installation',
      icon: <Home className="h-5 w-5" />,
      description: 'Installation process and timeline'
    },
    {
      id: 'maintenance',
      name: 'Maintenance',
      icon: <Shield className="h-5 w-5" />,
      description: 'System care and warranties'
    },
    {
      id: 'technical',
      name: 'Technical',
      icon: <Zap className="h-5 w-5" />,
      description: 'Technical specifications and performance'
    }
  ];

  const faqs = {
    general: [
      {
        question: 'What is solar energy and how does it work?',
        answer: 'Solar energy is power generated from sunlight using photovoltaic (PV) panels. Solar panels convert sunlight directly into electricity through the photovoltaic effect. When sunlight hits the solar cells, it knocks electrons loose, creating an electric current that can be used to power your home or business.'
      },
      {
        question: 'Is solar energy suitable for Pakistan\'s climate?',
        answer: 'Absolutely! Pakistan has excellent solar potential with 300+ sunny days per year and high solar irradiation levels. Cities like Lahore, Karachi, and Faisalabad receive 4-6 kWh/m²/day of solar energy, making solar installations highly effective and profitable.'
      },
      {
        question: 'How much can I save with solar energy?',
        answer: 'Most customers save 70-90% on their electricity bills. A typical residential system pays for itself in 3-4 years and continues to generate free electricity for 25+ years. Commercial customers often see even greater savings due to higher electricity consumption rates.'
      },
      {
        question: 'What is net metering and how does it work in Pakistan?',
        answer: 'Net metering allows you to sell excess solar energy back to the grid and receive credits on your electricity bill. In Pakistan, NEPRA regulates net metering, and we handle all the paperwork and approvals. You get paid for surplus energy at the same rate you buy electricity.'
      }
    ],
    cost: [
      {
        question: 'How much does a solar system cost?',
        answer: 'Residential systems typically range from PKR 150,000 to PKR 2,000,000 depending on size and quality. Commercial systems start from PKR 1,500,000. The exact cost depends on your energy needs, roof type, location, and equipment selection. We provide free detailed quotes.'
      },
      {
        question: 'What financing options are available?',
        answer: 'We offer multiple payment options: full upfront payment (with maximum discount), installment plans (3-12 months), and connections to solar financing partners. Some banks offer special solar loans at attractive rates. We help you find the best option for your budget.'
      },
      {
        question: 'Are there any government incentives for solar in Pakistan?',
        answer: 'Yes! The government offers several incentives: no customs duty on solar equipment, reduced sales tax, accelerated depreciation for businesses, and net metering policies that allow selling excess energy back to the grid.'
      },
      {
        question: 'What is the return on investment (ROI) for solar?',
        answer: 'Most solar systems have an ROI of 25-30% annually. With current electricity prices and solar costs, typical payback period is 3-4 years for residential and 2-3 years for commercial systems. After payback, you enjoy 20+ years of free electricity.'
      }
    ],
    installation: [
      {
        question: 'How long does installation take?',
        answer: 'Residential installations typically take 2-5 days, commercial projects 1-4 weeks, and industrial installations 2-8 weeks depending on system size and complexity. We provide detailed timelines during the design phase.'
      },
      {
        question: 'What is the installation process?',
        answer: 'Our process includes: 1) Site survey and energy audit, 2) System design and approvals, 3) Equipment procurement, 4) Professional installation, 5) System testing and commissioning, 6) Grid connection and net metering setup, 7) Documentation and handover.'
      },
      {
        question: 'Do I need any permits or approvals?',
        answer: 'We handle all necessary permits and approvals including NEPRA net metering application, utility company coordination, and local building permissions where required. Our team manages the entire paperwork process for you.'
      },
      {
        question: 'Will solar work on my roof type?',
        answer: 'Solar panels can be installed on most roof types including concrete, tile, metal sheets, and flat roofs. We assess structural capacity, orientation, shading, and access during our site survey to design the optimal system for your specific roof.'
      },
      {
        question: 'What happens if my roof needs repairs after installation?',
        answer: 'We can temporarily remove and reinstall panels if major roof work is needed. Our mounting systems are designed for easy removal. We also inspect roof condition during site survey and recommend any necessary repairs before installation.'
      }
    ],
    maintenance: [
      {
        question: 'How much maintenance do solar panels require?',
        answer: 'Solar panels require minimal maintenance. Regular cleaning (monthly in dusty areas), visual inspections, and annual professional check-ups are usually sufficient. We offer maintenance contracts for hassle-free operation.'
      },
      {
        question: 'What warranties do you provide?',
        answer: 'We provide comprehensive warranties: 25 years on solar panels, 10 years on inverters, 5-10 years on batteries (if applicable), and 2 years on installation workmanship. All equipment comes with manufacturer warranties plus our service guarantee.'
      },
      {
        question: 'How do I clean solar panels?',
        answer: 'Clean panels monthly with water and a soft brush or cloth. Avoid harsh chemicals and pressure washing. Clean early morning or evening when panels are cool. For safety and optimal results, consider our professional cleaning service.'
      },
      {
        question: 'What if something goes wrong with my system?',
        answer: 'We provide 24/7 technical support and emergency response. Our monitoring systems can detect issues remotely. We maintain spare parts inventory and have trained technicians across Punjab for quick response and repairs.'
      },
      {
        question: 'How do I monitor my system performance?',
        answer: 'Most systems include monitoring apps that show real-time and historical performance data on your smartphone. You can track energy production, consumption, savings, and system health. We also provide professional monitoring services.'
      }
    ],
    technical: [
      {
        question: 'What happens during power outages?',
        answer: 'Grid-tied systems automatically shut off during outages for safety. If you want backup power, we can install a hybrid system with batteries that provides power to essential loads during outages while maintaining grid connection benefits.'
      },
      {
        question: 'How efficient are solar panels?',
        answer: 'Modern solar panels we install are 20-22% efficient, meaning they convert 20-22% of sunlight into electricity. We use only Tier-1 panels from reputable manufacturers like Jinko, Canadian Solar, and LONGi for maximum efficiency and reliability.'
      },
      {
        question: 'What size system do I need?',
        answer: 'System size depends on your electricity consumption, roof space, and budget. A typical home uses 300-1000 units per month, requiring 3-15kW systems. We analyze your bills and energy usage to recommend the optimal system size.'
      },
      {
        question: 'Can I expand my system later?',
        answer: 'Yes, systems can usually be expanded if you have additional roof space and your electrical panel can handle the extra capacity. We design systems with future expansion in mind and can add panels or upgrade inverters as needed.'
      },
      {
        question: 'How do solar panels perform in cloudy weather?',
        answer: 'Solar panels still generate electricity on cloudy days, though at reduced efficiency (10-25% of peak output). Pakistan\'s high annual sunshine hours more than compensate for cloudy days, ensuring excellent overall performance.'
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-secondary text-primary">Frequently Asked Questions</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Your Solar Questions
              <span className="block text-secondary">Answered</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Everything you need to know about solar energy, installation, 
              costs, and more. Can't find your answer? Contact our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Questions Answered' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '24/7', label: 'Expert Support' },
              { number: '2 Hours', label: 'Average Response Time' }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 hover-lift border-0 shadow-elegant">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers organized by topic for easy navigation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {faqCategories.map((category) => (
              <Card key={category.id} className="text-center p-6 hover-lift border-0 shadow-elegant cursor-pointer">
                <div className="mx-auto mb-4 p-3 bg-primary rounded-full w-fit">
                  {React.cloneElement(category.icon, { className: "h-5 w-5 text-primary-foreground" })}
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </Card>
            ))}
          </div>

          {/* FAQ Sections */}
          {Object.entries(faqs).map(([categoryKey, questions]) => {
            const category = faqCategories.find(c => c.id === categoryKey);
            return (
              <div key={categoryKey} className="mb-16">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-2 bg-primary rounded-lg">
                    {category && React.cloneElement(category.icon, { className: "h-5 w-5 text-primary-foreground" })}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    {category?.name}
                  </h3>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryKey}-${index}`} className="border-0">
                      <Card className="hover-lift border-0 shadow-elegant">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <span className="text-left font-semibold text-primary">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our solar experts are ready to help with personalized answers and free consultations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center p-6 hover-lift border-0 shadow-elegant">
                <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-fit">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Call Our Experts</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Speak directly with our solar consultants
                </p>
                <Button asChild className="bg-gradient-solar text-primary-foreground shadow-solar">
                  <a href="tel:+923211234567">
                    Call: +92 321 1234567
                  </a>
                </Button>
              </Card>

              <Card className="text-center p-6 hover-lift border-0 shadow-elegant">
                <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                  <MessageCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-2">WhatsApp Chat</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Quick responses via WhatsApp messaging
                </p>
                <Button asChild className="bg-[#25d366] hover:bg-[#128c7e] text-white">
                  <a href="https://wa.me/923211234567" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </Card>

              <Card className="text-center p-6 hover-lift border-0 shadow-elegant">
                <div className="mx-auto mb-4 p-3 bg-primary rounded-full w-fit">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Free Consultation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Schedule a detailed discussion about your needs
                </p>
                <Button asChild className="bg-gradient-energy text-primary-foreground shadow-energy">
                  <Link to="/contact">
                    Book Consultation
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Most Popular Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              The questions our customers ask most often
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'How much can I save with solar?',
                answer: '70-90% reduction in electricity bills',
                icon: <DollarSign className="h-5 w-5 text-success" />
              },
              {
                question: 'How long does installation take?',
                answer: '2-5 days for residential systems',
                icon: <Calendar className="h-5 w-5 text-primary" />
              },
              {
                question: 'What warranty do you provide?',
                answer: '25 years on panels, 10 years on inverters',
                icon: <Shield className="h-5 w-5 text-secondary" />
              },
              {
                question: 'Is solar suitable for Pakistan?',
                answer: 'Yes! 300+ sunny days per year',
                icon: <Sun className="h-5 w-5 text-accent" />
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover-lift border-0 shadow-elegant">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-muted rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{item.question}</h4>
                    <p className="text-muted-foreground text-sm">{item.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get personalized answers and a free quote tailored to your specific needs and location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 shadow-solar text-lg px-8 py-6"
            >
              <Link to="/contact">
                <HelpCircle className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              <Link to="/projects">
                View Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
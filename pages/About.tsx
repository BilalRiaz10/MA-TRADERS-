import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Sun,
  Zap,
  Leaf
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Sun className="h-8 w-8 text-secondary" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge solar technology to provide the most efficient energy solutions.'
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We build lasting relationships through exceptional service.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-success" />,
      title: 'Sustainability',
      description: 'Committed to creating a cleaner, greener future for Pakistan through renewable energy.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Quality',
      description: 'We use only premium materials and maintain the highest standards in every project.'
    }
  ];

  const milestones = [
    { year: '2018', event: 'MA Traders Founded', description: 'Started our journey in solar energy solutions' },
    { year: '2019', event: '100+ Installations', description: 'Reached our first major milestone' },
    { year: '2021', event: 'Commercial Expansion', description: 'Expanded to industrial and commercial projects' },
    { year: '2023', event: '1000+ Happy Customers', description: 'Became Lahore\'s trusted solar partner' },
    { year: '2024', event: 'Advanced Technology', description: 'Introduced smart solar monitoring systems' }
  ];

  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '500+', label: 'Happy Customers' },
    { number: '50MW+', label: 'Solar Capacity Installed' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-secondary text-primary ">About MA Traders</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Powering Pakistan with 
              <span className="block text-secondary">Clean Energy Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Since 2018, we've been at the forefront of Pakistan's solar revolution, 
              helping thousands of customers transition to clean, sustainable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover-lift border-0 shadow-elegant">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <Card className="text-center p-8 hover-lift border-0 shadow-elegant">
              <div className="mx-auto mb-6 p-4 bg-primary rounded-full w-fit">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make clean solar energy accessible and affordable for every Pakistani household and business, 
                contributing to a sustainable future while reducing energy costs.
              </p>
            </Card>

            <Card className="text-center p-8 hover-lift border-0 shadow-elegant">
              <div className="mx-auto mb-6 p-4 bg-secondary rounded-full w-fit">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Pakistan's leading solar energy company, recognized for innovation, 
                quality, and exceptional customer service in the renewable energy sector.
              </p>
            </Card>

            <Card className="text-center p-8 hover-lift border-0 shadow-elegant">
              <div className="mx-auto mb-6 p-4 bg-accent rounded-full w-fit">
                <Zap className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Goals</h3>
              <p className="text-muted-foreground leading-relaxed">
                To install 100MW of solar capacity by 2025, create 1000+ green jobs, 
                and help Pakistan achieve its renewable energy targets.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover-lift border-0 shadow-elegant">
                <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming Lahore's trusted solar partner
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-energy hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="p-6 hover-lift border-0 shadow-elegant">
                      <div className="text-2xl font-bold text-secondary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Why Customers Trust MA Traders
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've built our reputation on quality, reliability, and exceptional customer service. 
                Here's what sets us apart from other solar companies.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Certified and licensed professionals',
                  'Premium quality equipment only',
                  'Comprehensive warranties up to 25 years',
                  'Transparent pricing with no hidden costs',
                  'Complete after-sales support',
                  'Government approved net metering solutions',
                  'Flexible financing options available',
                  'Fast installation with minimal disruption'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-solar text-primary-foreground shadow-solar">
                  <Link to="/contact">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline">
                  <Link to="/projects">
                    View Our Projects
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 hover-lift border-l-4 border-l-secondary">
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground text-sm">
                      All our installations are certified and come with comprehensive warranties. 
                      We use only tier-1 solar panels and premium components.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift border-l-4 border-l-accent">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2">Expert Team</h3>
                    <p className="text-muted-foreground text-sm">
                      Our certified engineers and technicians have years of experience 
                      in solar installation and maintenance across Pakistan.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-lift border-l-4 border-l-primary">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2">Proven Results</h3>
                    <p className="text-muted-foreground text-sm">
                      Our customers typically see 70-90% reduction in their electricity bills 
                      and full return on investment within 3-4 years.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Join Our Solar Family?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you save money and reduce your carbon footprint with solar energy.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-secondary text-primary hover:bg-secondary/90 shadow-solar text-lg px-8 py-6"
          >
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
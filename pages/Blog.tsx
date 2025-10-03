import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Sun } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Solar Energy Trends in Pakistan 2024',
      excerpt: 'Latest developments in Pakistan\'s solar energy sector and what to expect.',
      date: '2024-03-15',
      author: 'MA Traders Team',
      category: 'Industry News',
      readTime: '5 min read'
    },
    {
      title: 'Complete Guide to Net Metering in Pakistan',
      excerpt: 'Everything you need to know about net metering policies and procedures.',
      date: '2024-03-10',
      author: 'Eng. Sarah Khan',
      category: 'Technical Guide',
      readTime: '8 min read'
    },
    {
      title: 'Maximizing Solar Panel Efficiency in Summer',
      excerpt: 'Tips to maintain optimal performance during Pakistan\'s hot summer months.',
      date: '2024-03-05',
      author: 'Technical Team',
      category: 'Maintenance Tips',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-secondary text-primary">Solar Blog</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Solar Energy
              <span className="block text-secondary">Insights & News</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Stay updated with the latest solar technology trends, maintenance tips, and industry news.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-lift border-0 shadow-elegant">
                <div className="h-48 bg-gradient-solar flex items-center justify-center">
                  <Sun className="h-16 w-16 text-primary-foreground" />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
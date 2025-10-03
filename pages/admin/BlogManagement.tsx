import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  FileText, 
  Upload,
  Calendar
} from 'lucide-react';

const BlogManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const blogPosts = [
    {
      id: 1,
      title: 'Benefits of Solar Energy in Pakistan',
      excerpt: 'Exploring the advantages of switching to solar energy systems in Pakistan...',
      author: 'John Smith',
      category: 'Education',
      status: 'Published',
      publishDate: '2024-01-15',
      views: 1250,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Net Metering: Complete Guide 2024',
      excerpt: 'Everything you need to know about net metering in Pakistan...',
      author: 'Sarah Johnson',
      category: 'Guide',
      status: 'Draft',
      publishDate: '2024-01-20',
      views: 0,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Solar Panel Maintenance Tips',
      excerpt: 'How to maintain your solar panels for optimal performance...',
      author: 'Mike Wilson',
      category: 'Maintenance',
      status: 'Published',
      publishDate: '2024-01-10',
      views: 890,
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Cost Analysis: Solar vs Traditional Energy',
      excerpt: 'Detailed comparison of solar energy costs versus traditional electricity...',
      author: 'Lisa Brown',
      category: 'Analysis',
      status: 'Published',
      publishDate: '2024-01-05',
      views: 2100,
      image: '/placeholder.svg'
    },
  ];

  const categories = ['Education', 'Guide', 'Maintenance', 'Analysis', 'News'];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Published': return 'default';
      case 'Draft': return 'secondary';
      case 'Scheduled': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <p className="text-muted-foreground">Manage your blog posts and articles</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-solar">
              <Plus className="h-4 w-4 mr-2" />
              Create New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
              <DialogDescription>
                Write a new blog post for your website.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Post Title" />
              <Textarea placeholder="Post Excerpt (Brief description)" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Category (e.g., Education)" />
                <Input placeholder="Tags (comma separated)" />
              </div>
              <Textarea placeholder="Post Content" className="min-h-[200px]" />
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Featured Image
                </Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">SEO Meta Information</label>
                <Input placeholder="Meta Title" />
                <Textarea placeholder="Meta Description" />
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1">Publish Now</Button>
                <Button variant="outline" className="flex-1">Save as Draft</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Posts</p>
                <p className="text-2xl font-bold">{blogPosts.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Published</p>
                <p className="text-2xl font-bold">{blogPosts.filter(p => p.status === 'Published').length}</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Drafts</p>
                <p className="text-2xl font-bold">{blogPosts.filter(p => p.status === 'Draft').length}</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold">{blogPosts.reduce((acc, post) => acc + post.views, 0).toLocaleString()}</p>
              </div>
              <Eye className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog Posts Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Blog Posts</CardTitle>
          <CardDescription>Manage your blog content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium">{post.title}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeColor(post.status)}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.views.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{post.publishDate}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogManagement;
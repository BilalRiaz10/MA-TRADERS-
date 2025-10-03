import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  ArrowLeft,
  Truck,
  Shield,
  Clock
} from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [installationService, setInstallationService] = useState(false);

  const orderItems = [
    { name: 'Monocrystalline Solar Panel 320W', quantity: 2, price: 50000 },
    { name: '5kW Solar Inverter', quantity: 1, price: 85000 },
    { name: 'Solar Battery 100Ah', quantity: 2, price: 90000 }
  ];

  const subtotal = 225000;
  const installationFee = installationService ? 15000 : 0;
  const delivery = 0;
  const total = subtotal + installationFee + delivery;

//whatsapp msg
const sendOrderToWhatsApp = () => {
  const adminNumber = "923017757484"; 
  // Basic validation
  if (!firstName || !lastName || !phone || !address || !city || !state) {
    alert("Please fill all contact and address fields before sending the order.");
    return;
  }

  let message = `Hello, I placed a new order:\n\n`;

  // Customer Info
  message += `Name: ${firstName} ${lastName}\n`;
  message += `Email: ${email}\n`;
  message += `Phone: ${phone}\n`;
  message += `Address: ${address}, ${city}, ${state}\n\n`;

  // Order Items
  orderItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name} x ${item.quantity} - Rs. ${item.price.toLocaleString()}\n`;
  });

  if (installationService) {
    message += `Installation Service: Rs. ${installationFee.toLocaleString()}\n`;
  }

  message += `Total: Rs. ${total.toLocaleString()}`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${adminNumber}?text=${encodedMessage}`, '_blank');
};

//contact information
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [state, setState] = useState('');

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4">
            <Link to="/cart">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary">Checkout</h1>
            <p className="text-muted-foreground">Complete your solar system purchase</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
<Input 
  id="firstName" 
  placeholder="John" 
  value={firstName} 
  onChange={(e) => setFirstName(e.target.value)} 
/>                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
<Input 
  id="lastName" 
  placeholder="Doe" 
  value={lastName} 
  onChange={(e) => setLastName(e.target.value)} 
/>                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email <span className="text-gray-400 text-sm">(Optional)</span>
</Label>
<Input 
  id="email" 
  type="email" 
  placeholder="john@example.com" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
/>                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
<Input 
  id="phone" 
  placeholder="03001234567" 
  value={phone} 
  onChange={(e) => setPhone(e.target.value)} 
/>                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
<Input 
  id="address" 
  placeholder="123 Main Street" 
  value={address} 
  onChange={(e) => setAddress(e.target.value)} 
/>                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
<Input 
  id="city" 
  placeholder="Lahore" 
  value={city} 
  onChange={(e) => setCity(e.target.value)} 
/>                  </div>
                  <div>
                    <Label htmlFor="state">State/Province</Label>
<Input 
  id="state" 
  placeholder="Punjab" 
  value={state} 
  onChange={(e) => setState(e.target.value)} 
/>                  </div>
                  
                </div>
              </CardContent>
            </Card>

            {/* Installation Service */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Installation Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="installation" 
                    checked={installationService}
                    onCheckedChange={(checked) => setInstallationService(checked as boolean)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="installation" className="font-medium">
                      Professional Installation Service
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Our certified technicians will install your solar system professionally. 
                      Includes setup, testing, and warranty. (+Rs. 15,000)
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        1-2 days
                      </span>
                      <span className="flex items-center">
                        <Shield className="mr-1 h-3 w-3" />
                        25-year warranty
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-1">
                      <div className="font-medium">Cash on Delivery</div>
                      <div className="text-sm text-muted-foreground">Pay when your order is delivered</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank" className="flex-1">
                      <div className="font-medium">Bank Transfer</div>
                      <div className="text-sm text-muted-foreground">Direct payment to our bank account</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg opacity-50">
                    <RadioGroupItem value="card" id="card" disabled />
                    <Label htmlFor="card" className="flex-1">
                      <div className="font-medium">Credit/Debit Card</div>
                      <div className="text-sm text-muted-foreground">Coming soon</div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">Rs. {item.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  {installationService && (
                    <div className="flex justify-between">
                      <span>Installation Service</span>
                      <span>Rs. {installationFee.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="text-success">Free</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-primary">Rs. {total.toLocaleString()}</span>
                </div>

                <Button 
  className="w-full bg-gradient-energy text-primary-foreground shadow-energy mb-2"
  onClick={sendOrderToWhatsApp}
>
  <CheckCircle className="mr-2 h-4 w-4" />
  Send Order to WhatsApp
</Button>

<Button className="w-full bg-gradient-energy text-primary-foreground shadow-energy">
  <CheckCircle className="mr-2 h-4 w-4" />
  Place Order On Website
</Button>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">3-5 business days</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">25-year warranty</span>
                </div>
              </CardContent>
            </Card>

            {/* Security Badge */}
            <Card>
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="text-sm font-medium">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">Your information is protected</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
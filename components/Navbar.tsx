// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Menu, X, Sun, Phone, Globe, ShoppingCart, LogIn } from 'lucide-react';
// import { useCart } from '@/contexts/CartContext';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState('en');
//   const { getCartCount } = useCart();
//   const cartCount = getCartCount();
//   const location = useLocation();

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Products', href: '/products' },
//     { name: 'Projects', href: '/projects' },
//     { name: 'Team', href: '/team' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'FAQ', href: '/faq' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3 hover-lift">
//             <div className="bg-gradient-solar p-2 rounded-lg shadow-solar">
//               <Sun className="h-6 w-6 text-primary-foreground" />
//             </div>
//             <div className="flex flex-col">
//               <span className="font-heading font-bold text-lg text-primary">MA Traders</span>
//               <span className="text-xs text-muted-foreground">Solar Energy Systems</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
//                   isActive(item.href)
//                     ? 'text-primary bg-muted'
//                     : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {/* Language Toggle */}
//             {/* <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
//               className="text-muted-foreground hover:text-primary"
//             >
//               <Globe className="h-4 w-4 mr-1" />
//               {language.toUpperCase()}
//             </Button> */}

//             {/* Cart Button */}
//             <Button asChild variant="ghost" size="sm" className="relative text-muted-foreground hover:text-primary">
//               <Link to="/cart">
//                 <ShoppingCart className="h-5 w-5" />
//                 {cartCount > 0 && (
//                   <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground">
//                     {cartCount}
//                   </Badge>
//                 )}
//               </Link>
//             </Button>

//             {/* Login Button */}
//             <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
//               <Link to="/login">
//                 <LogIn className="h-4 w-4 mr-1" />
//                 Login
//               </Link>
//             </Button>

//             {/* Contact Button */}
//             <Button asChild className="bg-gradient-solar text-primary-foreground shadow-solar hover:shadow-energy transition-smooth">
//               <Link to="/contact">
//                 <Phone className="h-4 w-4 mr-2" />
//                 Get Quote
//               </Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-muted-foreground hover:text-primary"
//             >
//               {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden bg-background border-t border-border animate-fade-in-up">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
//                   isActive(item.href)
//                     ? 'text-primary bg-muted'
//                     : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="pt-4 pb-2 space-y-2">
//               <div className="flex space-x-2">
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="sm"
//                   className="flex-1"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link to="/cart" className="flex items-center justify-center">
//                     <ShoppingCart className="h-4 w-4 mr-1" />
//                     Cart
//                     {cartCount > 0 && <Badge className="ml-2">{cartCount}</Badge>}
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="sm"
//                   className="flex-1"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Link to="/login" className="flex items-center justify-center">
//                     <LogIn className="h-4 w-4 mr-1" />
//                     Login
//                   </Link>
//                 </Button>
//               </div>
//               <Button
//                 asChild
//                 className="w-full bg-gradient-solar text-primary-foreground shadow-solar"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <Link to="/contact">
//                   <Phone className="h-4 w-4 mr-2" />
//                   Get Free Quote
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu as MenuIcon, X, Sun, Phone, ShoppingCart, LogIn } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Menu, Transition } from '@headlessui/react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { useEffect } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      children: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'FAQ', href: '/faq' },
    // { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false); 
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="bg-gradient-to-r from-blue-900 via-white to-gray-900">
    <nav className="fixed inset-x-5 top-6 z-50 backdrop-blur-md bg-white/40 border border-black/30 rounded-full shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center  space-x-3 hover:scale-105 transition-transform">
            <div className="p-2 rounded-lg shadow-lg object-fit-cover">
              <img src="/logo.jpeg" alt="" className='w-10 h-10 rounded-md'/>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-black">MA Traders</span>
              <span className="text-xs text-black/80">Solar Energy Systems</span>
            </div>
          </Link>

          {/* Desktop Navigation */}

<div className="hidden lg:flex items-center space-x-4 overflow-visible">
  {navigation.map((item) =>
    item.children ? (
      <DropdownMenu.Root key={item.name}>
        <DropdownMenu.Trigger asChild >
  <button
    className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
      isActive(item.href)
        ? 'text-yellow-400'
        : 'text-black hover:text-yellow-300'
    }`}
  >
    {item.name} <ChevronDownIcon className="ml-1 w-4 h-4 flex-shrink-0" />
  </button>
</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[150px] bg-black/20 backdrop-blur-md rounded-md shadow-lg border border-black/30 p-1 mt-2 z-50"
            sideOffset={5}
          >
            {item.children.map((child) => (
              <DropdownMenu.Item key={child.name} asChild>
                <Link
                  to={child.href}
                  className="block px-4 py-2 text-sm text-white hover:bg-black/30 rounded-md"
                >
                  {child.name}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root>
    ) : (
      <Link
        key={item.name}
        to={item.href}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          isActive(item.href)
            ? 'text-yellow-400'
            : 'text-black hover:text-yellow-300'
        }`}
      >
        {item.name}
      </Link>
    )
  )}

          
            {/* Cart & Login & Contact */}
<div className="flex items-center space-x-3 ml-10">
              <Button asChild variant="ghost" size="sm" className="relative text-black hover:text-yellow-300">
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-yellow-400 text-black">
                      {cartCount}
                    </Badge>
                  )}
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-black hover:text-yellow-300">
                <Link to="/login">
                  <LogIn className="h-4 w-4 mr-1" />
                  Login
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg hover:shadow-xl transition-transform rounded-3xl"
              >
                <Link to="/contact">
                  <Phone className="h-4 w-4 mr-0" />
                  Contact
                </Link>
              </Button>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-yellow-300"
            >
              {isOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 px-4 py-3 
                  space-y-2 bg-white border border-black/30 rounded-xl 
                  shadow-lg animate-fade-in-up z-50">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name}>
                <span className="block px-3 py-2 rounded-md text-black font-medium">{item.name}</span>
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm text-black hover:text-yellow-300 hover:bg-black/20"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-black hover:text-yellow-300 hover:bg-black/20"
              >
                {item.name}
              </Link>
            )
          )}

          <div className="pt-3 space-y-2">
            <Button asChild variant="outline" size="sm" className="w-full" onClick={() => setIsOpen(false)}>
              <Link to="/cart" className="flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Cart {cartCount > 0 && <Badge className="ml-2">{cartCount}</Badge>}
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="w-full" onClick={() => setIsOpen(false)}>
              <Link to="/login" className="flex items-center justify-center">
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Link>
            </Button>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;

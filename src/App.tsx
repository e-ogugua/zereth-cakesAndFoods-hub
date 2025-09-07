import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  ChefHat, 
  Gift, 
  Menu,
  X,
  ShoppingBag,
  Cake,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  
  // Hero section content
  const heroContent = {
    brand: 'Zereth Cakes',
    heading: 'Handcrafted Cakes for Every Occasion',
    subheading: 'Indulge in our artisanal cakes made with the finest ingredients',
    cta: 'Order Now',
    image: 'https://images.unsplash.com/photo-1571115173804-bf751d1adf2e?w=1200&auto=format&fit=crop&q=80'
  };
  
  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
    console.log('Add to cart clicked');
  };

  const categories = [
    { id: 'all', name: 'All Cakes', count: 24, icon: <Cake className="w-5 h-5" /> },
    { id: 'wedding', name: 'Wedding', count: 8, icon: <Heart className="w-5 h-5" /> },
    { id: 'birthday', name: 'Birthday', count: 12, icon: <Gift className="w-5 h-5" /> },
    { id: 'custom', name: 'Custom', count: 4, icon: <ChefHat className="w-5 h-5" /> }
  ]

  const featuredCakes = [
    {
      id: 1,
      name: 'Royal Wedding Cake',
      price: 299,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
      category: 'wedding',
      description: 'Elegant 3-tier wedding cake with vanilla sponge and buttercream'
    },
    {
      id: 2,
      name: 'Chocolate Birthday Delight',
      price: 89,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
      category: 'birthday',
      description: 'Rich chocolate cake with fresh berries and cream frosting'
    },
    {
      id: 3,
      name: 'Custom Unicorn Dream',
      price: 159,
      rating: 5.0,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400',
      category: 'custom',
      description: 'Magical unicorn-themed cake perfect for special celebrations'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cake-500 to-frosting-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative z-10">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-4">
                Welcome to
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-lg">
              {heroContent.brand}
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mt-4 text-cake-100">
              {heroContent.heading}
            </h2>
            <p className="mt-6 text-xl text-cake-100 max-w-3xl">
              {heroContent.subheading}
            </p>
            <div className="mt-8">
              <button 
                className="px-8 py-3 bg-white text-cake-700 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => document.getElementById('featured-cakes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {heroContent.cta}
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-20 transform rotate-12">
            <Cake className="w-64 h-64 text-white" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cake-900/20 to-transparent"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-cake-pink/20 sticky top-0 z-50 animate-sugar-sparkle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cake-pink to-berry-purple rounded-full flex items-center justify-center animate-cake-float">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cake-pink to-berry-purple bg-clip-text text-transparent font-sweet">
                  Zereth Cake Hub
                </h1>
                <p className="text-xs text-chocolate-brown">Premium Artisan Cakes</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 text-text hover:text-primary transition-colors relative"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
              
              <button className="hidden md:block ml-2 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Order Now
              </button>
              
              <button 
                className="md:hidden p-2 text-text hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <nav className="flex flex-col space-y-4 py-4 border-t border-gray-100">
                  <a href="#" className="text-primary font-medium">Home</a>
                  <a href="#cakes" className="text-text hover:text-primary">Our Cakes</a>
                  <a href="#about" className="text-text hover:text-primary">About Us</a>
                  <a href="#contact" className="text-text hover:text-primary">Contact</a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  🎉 Freshly Baked Daily
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 mb-6 leading-tight">
                  Artistic Cake Masterpieces for <span className="text-gradient">Every Occasion</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                  Where edible art meets extraordinary taste. Each cake is a canvas, 
                  handcrafted with precision and passion to turn your celebrations into unforgettable experiences.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <button className="btn-primary flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Shop Now
                  </button>
                  <button className="px-6 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                    <ChefHat className="w-5 h-5" />
                    Custom Order
                  </button>
                </div>
              </motion.div>
              
              <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-text-light text-sm">Happy Customers</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-text-light text-sm">Available</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-text-light text-sm">Cake Varieties</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Cake Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Cake Display */}
              <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20"></div>
                
                {/* Cake Illustration */}
                <div className="relative z-10 flex justify-center">
                  <div className="relative">
                    {/* Cake Base */}
                    <div className="w-48 h-32 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-full relative">
                      {/* Frosting */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-52 h-8 bg-white rounded-full shadow-lg"></div>
                      {/* Cherry */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                      {/* Decorative dots */}
                      <div className="absolute top-4 left-8 w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-8 right-12 w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="absolute top-12 left-16 w-2 h-2 bg-pink-500 rounded-full"></div>
                    </div>
                    {/* Cake Stand */}
                    <div className="w-56 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full -mt-2"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-3 shadow-lg"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-3 shadow-lg"
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Cake Categories</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated collection of artisan cakes, each crafted with premium ingredients and artistic excellence.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Cakes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCakes.map((cake, index) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Cake Image */}
                <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  {/* Placeholder for cake image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl">🎂</div>
                  </div>
                </div>

                {/* Cake Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded-full">
                      {categories.find(c => c.id === cake.category)?.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{cake.rating}</span>
                      <span className="text-sm text-gray-400">({cake.reviews})</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{cake.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{cake.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">${cake.price}</div>
                    <button 
                      onClick={() => setCartItems(cartItems + 1)}
                      className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zereth Cake Hub?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and unforgettable experiences with every cake we create.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: 'Master Bakers',
                description: 'Our expert bakers bring years of experience and passion to every creation.'
              },
              {
                icon: Clock,
                title: 'Fresh Daily',
                description: 'All cakes are baked fresh daily using the finest premium ingredients.'
              },
              {
                icon: Gift,
                title: 'Custom Designs',
                description: 'Personalized cakes tailored to your special occasions and preferences.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Zereth Cake Hub</h3>
                  <p className="text-sm text-gray-400">Premium Artisan Cakes</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Creating sweet memories with handcrafted cakes made from the finest ingredients.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Cakes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wedding Cakes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Birthday Cakes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Delivery</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-400">123 Sweet Street, Cake City</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-400">+1 (555) 123-CAKE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-400">hello@zerethcakes.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Zereth Cake Hub. All rights reserved. | Built with &hearts; for sweet moments
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  Star,
  Package,
  Users,
  Award,
  Heart,
  Zap,
  ChevronRight,
  ShoppingBag,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Gift,
  Shield,
  Facebook,
  Instagram,
  MessageCircle,
  X,
  Plus,
  Minus,
  Search,
  Menu,
  Home,
  Droplets,
  UserCircle,
  Leaf,
  Baby,
  Filter,
  ArrowUpDown
} from 'lucide-react';

// Product Types
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  color: string;
  inStock: boolean;
  tags: string[];
}

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  productCount: number;
  image: string;
}

export default function RaidaWorldClassStore() {
  // Categories with 3D effects
  const categories: Category[] = [
    {
      id: 1,
      name: 'হোম অ্যাপ্লায়েন্স',
      description: 'স্মার্ট হোম ডিভাইস ও বৈদ্যুতিক সরঞ্জাম',
      icon: <Home className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
      productCount: 45,
      image: '🏠'
    },
    {
      id: 2,
      name: 'হেলথ অ্যান্ড বিউটি',
      description: 'স্বাস্থ্য ও সৌন্দর্য যত্নের পণ্য',
      icon: <Droplets className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
      productCount: 32,
      image: '💄'
    },
    {
      id: 3,
      name: 'লেডিজ পার্সোনাল',
      description: 'মহিলাদের ব্যক্তিগত পণ্য',
      icon: <UserCircle className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
      productCount: 28,
      image: '👙'
    },
    {
      id: 4,
      name: 'রাইদা অর্গানিক হ্যান্ডমেড',
      description: 'প্রাকৃতিক ও হস্তনির্মিত পণ্য',
      icon: <Leaf className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      productCount: 18,
      image: '🌿'
    },
    {
      id: 5,
      name: 'কিডস জোন',
      description: 'শিশুদের জন্য বিশেষ পণ্য',
      icon: <Baby className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
      productCount: 25,
      image: '🧸'
    }
  ];

  // Demo Products Database
  const products: Product[] = [
    {
      id: 1,
      name: 'প্রিমিয়াম ব্রা সেট (৩ পিস)',
      category: 'লেডিজ পার্সোনাল',
      price: 899,
      originalPrice: 1200,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
      description: 'সুপার কমফোর্টেবল কটন ব্রা, ফুল সাপোর্ট, লং লাস্টিং',
      features: ['১০০% সুতি কাপড়', 'স্ট্রেচেবল', 'সব সাইজ', 'ব্রেস্ট সুপোর্ট', 'অ্যান্টি-ব্যাক্টেরিয়াল'],
      rating: 4.8,
      reviews: 128,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      inStock: true,
      tags: ['বেস্টসেলার', 'নতুন']
    },
    {
      id: 2,
      name: 'অর্গানিক ফেস অয়েল 100ml',
      category: 'হেলথ অ্যান্ড বিউটি',
      price: 450,
      originalPrice: 600,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w-400',
      description: 'প্রাকৃতিক উপাদানে তৈরি ফেস অয়েল, ত্বক সুন্দর ও উজ্জ্বল করে',
      features: ['১০০% অর্গানিক', 'নন-গ্রিজি', 'ভিটামিন ই সমৃদ্ধ', 'অ্যান্টি-এজিং', 'গ্লোইং স্কিন'],
      rating: 4.9,
      reviews: 89,
      color: 'bg-gradient-to-r from-green-400 to-emerald-500',
      inStock: true,
      tags: ['অর্গানিক', 'বেস্টসেলার']
    },
    {
      id: 3,
      name: 'স্মার্ট ব্লেন্ডার - 800W',
      category: 'হোম অ্যাপ্লায়েন্স',
      price: 2499,
      originalPrice: 3200,
      discount: 22,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      description: 'মাল্টি-ফাংশন স্মার্ট ব্লেন্ডার, শক্তিশালী মোটর',
      features: ['৮০০ ওয়াট মোটর', 'স্টেইনলেস স্টিল ব্লেড', '৩ বছর ওয়ারেন্টি', 'ফ্রি ডেলিভারি', 'সেফটি লক'],
      rating: 4.7,
      reviews: 156,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      inStock: true,
      tags: ['নতুন', 'ওয়ারেন্টি']
    },
    {
      id: 4,
      name: 'বেবি কেয়ার কিট প্রিমিয়াম',
      category: 'কিডস জোন',
      price: 1299,
      originalPrice: 1800,
      discount: 28,
      image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=400',
      description: 'শিশুর যত্নের সম্পূর্ণ কিট, হাইপোঅ্যালার্জেনিক',
      features: ['হাইপোঅ্যালার্জেনিক', 'কেমিক্যাল ফ্রি', '১০টি আইটেম', 'অর্গানিক', 'ডাক্তার রিকমেন্ডেড'],
      rating: 4.9,
      reviews: 67,
      color: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      inStock: true,
      tags: ['শিশু', 'অর্গানিক']
    },
    {
      id: 5,
      name: 'হ্যান্ডমেড হারবাল শ্যাম্পু 200ml',
      category: 'রাইদা অর্গানিক হ্যান্ডমেড',
      price: 350,
      originalPrice: 500,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=400',
      description: 'প্রাকৃতিক হারবাল শ্যাম্পু, চুল পড়া কমায়',
      features: ['১০০% হারবাল', 'এসএলএস ফ্রি', 'চুল পড়া কমায়', 'প্রাকৃতিক সুগন্ধ', 'সব চুলের ধরন'],
      rating: 4.6,
      reviews: 203,
      color: 'bg-gradient-to-r from-green-500 to-teal-500',
      inStock: true,
      tags: ['অর্গানিক', 'হারবাল']
    },
    {
      id: 6,
      name: 'ওয়ার্লেস ইয়ারফোন প্রো',
      category: 'হোম অ্যাপ্লায়েন্স',
      price: 1899,
      originalPrice: 2500,
      discount: 24,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      description: 'হাই কুয়ালিটি ব্লুটুথ ইয়ারফোন, নয়েজ ক্যান্সেলেশন',
      features: ['ব্লুটুথ 5.0', '30 ঘন্টা ব্যাটারি', 'ওয়াটার রেজিস্ট্যান্ট', 'নয়েজ ক্যান্সেলেশন', 'ওয়ারেন্টি'],
      rating: 4.5,
      reviews: 312,
      color: 'bg-gradient-to-r from-gray-700 to-black',
      inStock: true,
      tags: ['ইলেকট্রনিক্স', 'বেস্টসেলার']
    },
    {
      id: 7,
      name: 'প্রিমিয়াম লিপস্টিক সেট',
      category: 'হেলথ অ্যান্ড বিউটি',
      price: 699,
      originalPrice: 1000,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400',
      description: '5টি কালার লিপস্টিক সেট, লং লাস্টিং',
      features: ['5টি কালার', 'ময়শ্চারাইজিং', 'লং লাস্টিং', 'নন-স্মিয়ার', 'মেটাল প্যাকেজিং'],
      rating: 4.7,
      reviews: 178,
      color: 'bg-gradient-to-r from-rose-500 to-pink-500',
      inStock: true,
      tags: ['বিউটি', 'সেট']
    },
    {
      id: 8,
      name: 'এডজাস্টেবল বেড টেবিল',
      category: 'হোম অ্যাপ্লায়েন্স',
      price: 3999,
      originalPrice: 5500,
      discount: 27,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      description: 'এডজাস্টেবল বেড টেবিল, মাল্টি-ফাংশন',
      features: ['এডজাস্টেবল হাইট', 'স্টোরেজ স্পেস', 'মেটাল বডি', 'ইজি অ্যাসেম্বলি', 'ওয়ারেন্টি'],
      rating: 4.8,
      reviews: 89,
      color: 'bg-gradient-to-r from-amber-700 to-yellow-600',
      inStock: true,
      tags: ['ফার্নিচার', 'নতুন']
    }
  ];

  // Combo Offers
  const combos = [
    { 
      id: 1,
      name: 'রেগুলার কম্বো (৬ পিস)', 
      price: 750, 
      originalPrice: 900,
      items: '৩টি ব্রা + ৩টি প্যান্টি', 
      color: 'from-blue-600 via-blue-500 to-cyan-400',
      popular: true,
      savings: 150,
      features: ['কটন ফেব্রিক', 'স্ট্রেচেবল', 'সব সাইজ']
    },
    { 
      id: 2,
      name: 'রেগুলার কম্বো (৮ পিস)', 
      price: 850,
      originalPrice: 1100,
      items: '৪টি ব্রা + ৪টি প্যান্টি', 
      color: 'from-indigo-600 via-purple-500 to-pink-400',
      popular: false,
      savings: 250,
      features: ['কটন ফেব্রিক', 'স্ট্রেচেবল', 'সব সাইজ', 'ফ্রি মাস্ক']
    },
    { 
      id: 3,
      name: 'প্রিমিয়াম কম্বো (৪ পিস)', 
      price: 1000,
      originalPrice: 1400,
      items: '২টি ব্রা + ২টি প্যান্টি', 
      color: 'from-purple-600 via-pink-500 to-rose-400',
      popular: false,
      savings: 400,
      features: ['প্রিমিয়াম ফেব্রিক', 'লেস ডিজাইন', 'স্পেশাল সাইজ']
    },
    { 
      id: 4,
      name: 'প্রিমিয়াম কম্বো (৬ পিস)', 
      price: 1250,
      originalPrice: 1800,
      items: '৩টি ব্রা + ৩টি প্যান্টি', 
      color: 'from-pink-600 via-rose-500 to-red-400',
      popular: true,
      savings: 550,
      features: ['প্রিমিয়াম ফেব্রিক', 'লেস ডিজাইন', 'স্পেশাল সাইজ', 'ফ্রি ক্যারিয়ার ব্যাগ']
    },
  ];

  // State Management
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Product[]>([]);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
    product: '',
    quantity: 1,
    size: '',
    color: ''
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Refs for animations
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  // InView animations
  const categoriesInView = useInView(categoriesRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });

  // 3D Animation variants
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -15,
      rotateX: 5,
      rotateY: 5,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Filter products by search
  const searchedProducts = searchQuery 
    ? filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts;

  // Handle Order Functions
  const handleQuickOrder = (productName: string) => {
    const message = `হ্যালো RAIDA STORE! আমি "${productName}" পণ্যটি অর্ডার করতে চাই।`;
    window.open(`https://wa.me/8801988003008?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    const items = cart.map(item => `• ${item.name} - ৳${item.price}`).join('\n');
    const message = `🚀 নতুন অর্ডার - RAIDA STORE
━━━━━━━━━━━━━━━━━━
🛒 অর্ডার আইটেম:
${items}
━━━━━━━━━━━━━━━━━━
💰 মোট: ৳${calculateTotal()}
📞 ফোন: ${orderDetails.phone || 'প্রয়োজনীয়'}
📍 ঠিকানা: ${orderDetails.address || 'প্রয়োজনীয়'}
━━━━━━━━━━━━━━━━━━
✅ দয়া করে অর্ডার নিশ্চিত করুন!`;
    
    window.open(`https://wa.me/8801988003008?text=${encodeURIComponent(message)}`, '_blank');
    setCart([]);
    setShowCart(false);
  };

  // Animated Background
  const FloatingElements = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 100 + 20,
            height: Math.random() * 100 + 20,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#FF7F50' : i % 3 === 1 ? '#E91E63' : '#FF5722'
            }20, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 font-sans text-gray-900 overflow-x-hidden">
      {/* Floating Elements Background */}
      <FloatingElements />
      
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/8801988003008"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.a>

      {/* Top Announcement Bar */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="relative bg-gradient-to-r from-[#FF7F50] via-[#E91E63] to-[#FF7F50] text-white py-3 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000')] opacity-10"></div>
        <div className="relative z-10">
          <motion.div 
            className="flex items-center justify-center gap-4 text-sm md:text-base font-bold"
            animate={floatAnimation}
          >
            <Sparkles className="w-5 h-5" />
            <span>🎉 ১৫০০+ টাকার অর্ডারে ফ্রি ডেলিভারি + সিক্রেট প্যাকেজিং! 🎉</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b shadow-lg px-4 py-3 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-gradient-to-br from-[#FF7F50] via-[#E91E63] to-[#FF7F50] rounded-2xl flex items-center justify-center text-white font-black text-2xl italic shadow-lg"
            >
              R
            </motion.div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#FF7F50] to-[#E91E63] bg-clip-text text-transparent">
                RAIDA STORE
              </h1>
              <p className="text-xs tracking-widest text-gray-500 uppercase">World Class Shopping Experience</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.name)}
                className={`font-semibold ${selectedCategory === cat.name ? 'text-[#E91E63]' : 'text-gray-700'}`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <motion.div 
              className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2"
              whileFocus={{ scale: 1.05 }}
            >
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="পণ্য খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm w-48"
              />
            </motion.div>

            {/* Phone Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:01988003008"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white px-6 py-2 rounded-full font-bold shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>০১৯৮৮০০৩০০৮</span>
            </motion.a>

            {/* Cart Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowCart(true)}
              className="relative"
            >
              <ShoppingCart className="w-8 h-8 text-[#E91E63]" />
              {cart.length > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
                >
                  {cart.length}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t mt-3 overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setShowMobileMenu(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                  >
                    {cat.name}
                  </button>
                ))}
                <div className="px-4 py-2">
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <Search className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="পণ্য খুঁজুন..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent outline-none text-sm flex-1"
                    />
                  </div>
                </div>
                <a
                  href="tel:01988003008"
                  className="block px-4 py-3 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white rounded-lg mx-4 text-center"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  ০১৯৮৮০০৩০০৮
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section with 3D Effects */}
      <section ref={heroRef} className="relative py-12 md:py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-white"></div>
          {/* Floating 3D Products */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 md:w-24 md:h-24 rounded-3xl backdrop-blur-sm border-2 border-white/30 shadow-2xl flex items-center justify-center"
              style={{
                left: `${5 + i * 8}%`,
                top: `${15 + (i % 3) * 25}%`,
                background: `linear-gradient(135deg, ${
                  i % 3 === 0 ? '#FF7F50' : i % 3 === 1 ? '#E91E63' : '#FF5722'
                }20, transparent)`,
              }}
              animate={{
                y: [0, -40, 0],
                rotateX: [0, 360],
                rotateY: [0, 180],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="text-2xl">{['🏠', '💄', '👙', '🌿', '🧸', '⚡', '🛒', '🎁', '✨', '⭐', '🔥', '💎'][i]}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="px-6 py-3 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white text-lg font-bold rounded-full shadow-xl">
                🚀 বাংলাদেশের #১ অনলাইন শপ
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block text-gray-800">"কম মূল্যের লোভে নয়,</span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] via-[#E91E63] to-[#FF7F50]"
                animate={{ backgroundPosition: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                মানসম্মত পণ্যে
              </motion.span>
              <span className="block text-gray-800">বিনিয়োগ করুন!"</span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              বিশ্বমানের কোয়ালিটি, অ্যাফোর্ডেবল প্রাইস, এবং সম্পূর্ণ গোপনীয়তা নিশ্চিত। 
              হোম ডেলিভারি সারা বাংলাদেশে।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
              >
                <ShoppingBag className="inline w-6 h-6 mr-2" />
                শপিং শুরু করুন
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/8801988003008"
                target="_blank"
                className="px-10 py-4 bg-white text-gray-800 border-2 border-[#E91E63] rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageCircle className="inline w-6 h-6 mr-2 text-[#E91E63]" />
                WhatsApp এ অর্ডার
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '৫০০০+', label: 'সন্তুষ্ট গ্রাহক', icon: <Users className="w-8 h-8" /> },
              { value: '২৪/৭', label: 'সাপোর্ট', icon: <Headphones className="w-8 h-8" /> },
              { value: '১০০%', label: 'গোপনীয়তা', icon: <ShieldCheck className="w-8 h-8" /> },
              { value: 'সারা দেশ', label: 'ডেলিভারি', icon: <Truck className="w-8 h-8" /> },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg"
              >
                <div className="text-[#E91E63] mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-gray-800">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" ref={categoriesRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#FF7F50]/20 to-[#E91E63]/20 rounded-full mb-4">
              <span className="text-[#E91E63] font-bold">ক্যাটেগরি ব্রাউজ করুন</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-[#FF7F50] to-[#E91E63] bg-clip-text text-transparent">
                আমাদের বিশেষ কালেকশন
              </span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              আপনার প্রয়োজন অনুযায়ী পণ্য ব্রাউজ করুন
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={cardVariants}
                initial="hidden"
                animate={categoriesInView ? "visible" : "hidden"}
                whileHover="hover"
                onHoverStart={() => setHoveredCategory(category.id)}
                onHoverEnd={() => setHoveredCategory(null)}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer ${
                  selectedCategory === category.name ? 'ring-2 ring-[#E91E63]' : ''
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
                
                {/* 3D Icon */}
                <motion.div
                  className="absolute top-6 right-6 text-5xl"
                  animate={{
                    rotateY: hoveredCategory === category.id ? 360 : 0,
                    scale: hoveredCategory === category.id ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {category.image}
                </motion.div>

                <div className="relative z-10 p-8 text-white h-64 flex flex-col justify-end">
                  <div className="mb-4">{category.icon}</div>
                  <h4 className="text-2xl font-black mb-2">{category.name}</h4>
                  <p className="text-white/80 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {category.productCount} পণ্য
                    </span>
                    <motion.div
                      animate={{ x: hoveredCategory === category.id ? 5 : 0 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-[#FF7F50] to-[#E91E63] bg-clip-text text-transparent">
                জনপ্রিয় পণ্য
              </span>
            </h3>
            <p className="text-gray-600 text-lg">সবচেয়ে বেশি বিক্রি হওয়া পণ্য সমূহ</p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              সব পণ্য
            </motion.button>
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-6 py-2 rounded-full font-semibold ${
                  selectedCategory === cat.name
                    ? 'bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {searchedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                initial="hidden"
                animate={productsInView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 ${product.color} opacity-20`}></div>
                  <motion.div
                    className="w-full h-full flex items-center justify-center text-6xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    {product.image.includes('http') ? (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-4xl">{product.category.charAt(0)}</span>
                      </div>
                    ) : product.image}
                  </motion.div>
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.discount}% OFF
                    </div>
                  )}
                  
                  {/* Tags */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-black text-gray-800">৳{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">৳{product.originalPrice}</div>
                      )}
                    </div>
                    {product.inStock ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        ইন স্টক
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                        আউট অফ স্টক
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuickOrder(product.name)}
                      className="flex-1 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white py-3 rounded-xl font-bold text-center"
                    >
                      অর্ডার করুন
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleAddToCart(product)}
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"
                    >
                      <Plus className="w-5 h-5 text-gray-700" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {searchedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😞</div>
              <h4 className="text-2xl font-bold text-gray-700 mb-2">পণ্য পাওয়া যায়নি</h4>
              <p className="text-gray-500">আপনার সার্চের সাথে মিলছে না</p>
            </div>
          )}
        </div>
      </section>

      {/* Combo Offers Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#FF7F50]/20 to-[#E91E63]/20 rounded-full mb-4">
              <span className="text-[#E91E63] font-bold">স্পেশাল অফার</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-[#FF7F50] to-[#E91E63] bg-clip-text text-transparent">
                কম্বো অফার
              </span>
            </h3>
            <p className="text-gray-600 text-lg">একসাথে কিনুন, বেশি সেভ করুন!</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {combos.map((combo, index) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                  combo.popular ? 'ring-2 ring-[#E91E63]' : ''
                }`}
              >
                {combo.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-4 py-1 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white text-sm font-bold rounded-full">
                      🏆 জনপ্রিয়
                    </div>
                  </div>
                )}
                
                <div className={`h-3 bg-gradient-to-r ${combo.color}`}></div>
                
                <div className="p-8 bg-white">
                  <h4 className="text-2xl font-black text-gray-800 mb-2">{combo.name}</h4>
                  <p className="text-gray-600 mb-6">{combo.items}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black bg-gradient-to-r from-[#FF7F50] to-[#E91E63] bg-clip-text text-transparent">
                        ৳{combo.price}
                      </span>
                      <span className="text-gray-400 line-through">৳{combo.originalPrice}</span>
                    </div>
                    <div className="text-green-600 font-bold text-sm mt-1">
                      {combo.savings} টাকা সেভ করুন!
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    {combo.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickOrder(combo.name)}
                    className="w-full bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white py-4 rounded-xl font-bold text-lg"
                  >
                    অর্ডার করুন
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-[40px] p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] rounded-full mb-6">
                <ShieldCheck className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FF7F50] to-[#E91E63] bg-clip-text text-transparent">
                  ১০০% গোপনীয়তা রক্ষা
                </span>
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                প্যাকেটের গায়ে কোনো প্রোডাক্টের নাম লেখা থাকে না। ডেলিভারি ম্যান জানবে না ভেতরে কী আছে। 
                সম্পূর্ণ নিরাপদ এবং গোপনীয় বিতরণ।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Package className="w-8 h-8" />,
                  title: 'গোপন প্যাকেজিং',
                  desc: 'কোনো ব্র্যান্ড নাম নেই, সম্পূর্ণ সাদা প্যাকেজ'
                },
                {
                  icon: <Truck className="w-8 h-8" />,
                  title: 'সিকিউর ডেলিভারি',
                  desc: 'ট্র্যাকিং সিস্টেম, সময়মতো ডেলিভারি'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'মূল্য প্রত্যাবর্তন',
                  desc: '৩০ দিনের রিটার্ন পলিসি'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-gray-800/50 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <div className="inline-block p-3 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] rounded-xl mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Delivery Info */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h4 className="text-2xl font-bold mb-6 text-center">ডেলিভারি চার্জ</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { area: 'ঢাকায় ডেলিভারি', price: '৳৭০', desc: 'ঢাকা সিটির ভিতরে' },
                  { area: 'ঢাকার বাইরে', price: '৳১২০', desc: 'সম্পূর্ণ বাংলাদেশে' },
                  { area: 'ফ্রি ডেলিভারি', price: 'ফ্রি', desc: '১৫০০+ টাকার অর্ডারে' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-800/30 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#FF7F50] mb-2">{item.price}</div>
                    <h5 className="text-lg font-semibold mb-1">{item.area}</h5>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-[#FF7F50] to-[#E91E63] bg-clip-text text-transparent">
                কিভাবে অর্ডার করবেন?
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '১', title: 'পণ্য সিলেক্ট', desc: 'পছন্দের পণ্য ক্লিক করুন', icon: '🛒' },
              { step: '২', title: 'অর্ডার করুন', desc: 'অর্ডার বাটনে ক্লিক করুন', icon: '📱' },
              { step: '৩', title: 'ঠিকানা দিন', desc: 'নাম, ফোন ও ঠিকানা দিন', icon: '📍' },
              { step: '৪', title: 'ডেলিভারি নিন', desc: 'বাসায় পণ্য গ্রহণ করুন', icon: '🚚' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-xl border border-gray-200"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF7F50] to-[#E91E63] rounded-2xl flex items-center justify-center text-white font-black text-2xl italic">
                  R
                </div>
                <div>
                  <h4 className="text-2xl font-black">RAIDA STORE</h4>
                  <p className="text-gray-400 text-sm">For You • Since 2023</p>
                </div>
              </div>
              <p className="text-gray-400">
                বাংলাদেশের বিশ্বস্ত অনলাইন শপিং প্ল্যাটফর্ম। মানসম্মত পণ্য, নির্ভরযোগ্য সেবা।
              </p>
            </div>

            <div>
              <h5 className="text-xl font-bold mb-6">ক্যাটেগরি</h5>
              <ul className="space-y-3">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setSelectedCategory(cat.name)}
                      className="text-gray-400 hover:text-[#FF7F50] transition-colors"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-bold mb-6">যোগাযোগ</h5>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <a href="tel:01988003008" className="hover:text-[#FF7F50]">
                    ০১৯৮৮০০৩০০৮
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>আমবাগ, কোনাবাড়ী, গাজীপুর সিটি</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span>সকাল ৯টা - রাত ১১টা</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-bold mb-6">সামাজিক যোগাযোগ</h5>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} RAIDA STORE. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              "কম মূল্যের লোভে নয়, মানসম্মত পণ্যে বিনিয়োগ করুন!"
            </p>
          </div>
        </div>
      </footer>

      {/* Cart Modal */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-gray-800">আপনার কার্ট</h4>
                  <button onClick={() => setShowCart(false)}>
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h5 className="text-xl font-bold text-gray-700 mb-2">কার্ট খালি</h5>
                    <p className="text-gray-500">কিছু পণ্য কার্টে যোগ করুন</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className={`w-16 h-16 rounded-lg ${item.color} flex items-center justify-center text-2xl`}>
                          {item.image.includes('http') ? '📦' : item.image}
                        </div>
                        <div className="flex-1">
                          <h6 className="font-bold text-gray-800">{item.name}</h6>
                          <p className="text-sm text-gray-500">{item.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-800">৳{item.price}</div>
                          <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="text-red-500 text-sm hover:text-red-700"
                          >
                            মুছুন
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600">মোট</span>
                    <div className="text-2xl font-bold text-gray-800">৳{calculateTotal()}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white py-4 rounded-xl font-bold text-lg"
                  >
                    WhatsApp এ অর্ডার করুন
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

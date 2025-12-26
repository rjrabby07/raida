"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, Truck, Headphones, Facebook } from 'lucide-react';

export default function RaidaHome() {
  const combos = [
    { name: 'রেগুলার কম্বো (৬ পিস)', price: 750, items: '৩টি ব্রা + ৩টি প্যান্টি', color: 'bg-blue-600' },
    { name: 'রেগুলার কম্বো (৮ পিস)', price: 850, items: '৪টি ব্রা + ৪টি প্যান্টি', color: 'bg-indigo-600' },
    { name: 'প্রিমিয়াম কম্বো (৪ পিস)', price: 1000, items: '২টি ব্রা + ২টি প্যান্টি', color: 'bg-purple-600' },
    { name: 'প্রিমিয়াম কম্বো (৬ পিস)', price: 1250, items: '৩টি ব্রা + ৩টি প্যান্টি', color: 'bg-pink-600' },
  ];

  const handleOrder = (productName: string) => {
    const message = `হ্যালো Raida For You, আমি "${productName}" টি অর্ডার করতে চাই।`;
    window.open(`https://wa.me/8801988003008?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <div className="bg-gradient-to-r from-[#FF7F50] to-[#E91E63] text-white py-2 text-center text-xs md:text-sm font-bold">
        📢 সকল প্রকার ট্রেন্ডিং প্রডাক্ট পাইকারি দামে পেতে আমাদের ফেইসবুক পেজ ফলো করুন!
      </div>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <div className="w-10 h-10 bg-gradient-to-br from-[#FF7F50] to-[#E91E63] rounded-lg flex items-center justify-center text-white font-black italic">R</div>
           <h1 className="text-xl font-black text-[#E91E63]">RAIDA <span className="text-[8px] block tracking-widest text-gray-500 uppercase">For You</span></h1>
        </div>
        <a href="tel:01988003008" className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold">📞 ০১৯৮৮০০৩০০৮</a>
      </header>
      <section className="py-20 text-center px-4 bg-gray-50">
        <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
          "কম মূল্যের লোভে নয়, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] to-[#E91E63]">মানসম্মত পণ্যে</span> বিনিয়োগ করুন!"
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">বাংলাদেশের সেরা মানের হ্যান্ডমেড মশলা, প্রাকৃতিক অয়েল এবং প্রিমিয়াম কালেকশন।</p>
        <button className="bg-black text-white px-10 py-4 rounded-2xl font-bold text-xl shadow-2xl">শপিং শুরু করুন</button>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-black text-center mb-12 italic">স্পেশাল কম্বো অফার! 🔥</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {combos.map((combo) => (
            <div key={combo.name} className={`${combo.color} p-8 rounded-[40px] text-white shadow-xl relative group`}>
              <h4 className="text-xl font-bold mb-2">{combo.name}</h4>
              <p className="opacity-80 mb-4">{combo.items}</p>
              <div className="text-4xl font-black mb-6">৳{combo.price}</div>
              <button onClick={() => handleOrder(combo.name)} className="bg-white text-black w-full py-4 rounded-2xl font-bold">অর্ডার করুন</button>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 max-w-4xl mx-auto mb-20">
        <div className="bg-black rounded-[40px] p-10 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 italic">🔒 ১০০% গোপনীয়তা রক্ষা</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">প্যাকেটের গায়ে কোনো প্রোডাক্টের নাম লেখা থাকে না। ডেলিভারি ম্যান জানবে না ভেতরে কী আছে। নিশ্চিন্তে অর্ডার করুন।</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2"><ShieldCheck className="text-green-400"/> সিক্রেট প্যাকিং</span>
            <span className="flex items-center gap-2"><Truck className="text-green-400"/> ক্যাশ অন ডেলিভারি</span>
          </div>
        </div>
      </section>
      <footer className="bg-white border-t py-10 text-center text-gray-400">
        <p className="font-bold text-black uppercase tracking-widest">Raida Store</p>
        <p className="text-xs mt-2">আমবাগ, কোনাবাড়ী, গাজীপুর সিটি। ০১৯৮৮০০৩০০৮</p>
      </footer>
    </div>
  );
}
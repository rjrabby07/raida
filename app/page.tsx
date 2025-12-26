import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import ComboSection from '@/components/home/ComboSection';
import TrustFactors from '@/components/home/TrustFactors';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <ComboSection />
      <TrustFactors />
      
      {/* Secret Packaging Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-block p-4 bg-primary-pink/20 rounded-full mb-6">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">গোপন প্যাকেজিং</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              আপনার গোপনীয়তা আমাদের অগ্রাধিকার। প্যাকেটের গায়ে কোনো ব্র্যান্ড নাম বা লেবেল থাকবে না।
              সম্পূর্ণ নিরাপদ এবং গোপনীয় বিতরণ।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 gradient-bg rounded-full"></div>
                  <span>কোনো ব্র্যান্ড নাম নেই</span>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 gradient-bg rounded-full"></div>
                  <span>সাদা প্যাকেজিং</span>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 gradient-bg rounded-full"></div>
                  <span>ডেলিভারি পার্সনকে তথ্য দেওয়া হয় না</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold gradient-text mb-2">৳৭০</div>
              <h3 className="text-xl font-semibold mb-2">ঢাকায় ডেলিভারি</h3>
              <p className="text-gray-400">ঢাকা সিটির ভিতরে</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold gradient-text mb-2">৳১২০</div>
              <h3 className="text-xl font-semibold mb-2">ঢাকার বাইরে</h3>
              <p className="text-gray-400">সম্পূর্ণ বাংলাদেশে</p>
            </div>
            <div className="bg-gradient-to-r from-primary-pink/20 to-primary-orange/20 p-6 rounded-2xl text-center border border-primary-pink/30">
              <div className="text-4xl font-bold gradient-text mb-2">ফ্রি</div>
              <h3 className="text-xl font-semibold mb-2">১৫০০+ টাকার অর্ডারে</h3>
              <p className="text-gray-300">সারা দেশে ফ্রি হোম ডেলিভারি</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Wallet, Download, Upload, BookOpen, Calendar, User } from 'lucide-react';

export const BlogsPage = () => {
  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/blog-bg/1920/1080?blur=3" 
            alt="Blog Background" 
            className="w-full h-full object-cover opacity-20 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
          
          {/* Layered Atmospheric Gradients */}
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold mb-12">
              <BookOpen size={16} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Market Insights & Analysis</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.85] mb-12 tracking-tighter uppercase">
              AXIOM <br />
              <span className="text-gold-gradient italic">BLOGS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl leading-relaxed font-light tracking-wide">
              Stay informed with the latest market news, expert analysis, and trading tips from our experienced team of analysts.
            </p>

            {/* Floating Glass Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Articles</div>
                <div className="text-xl font-bold text-brand-gold">500+</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Authors</div>
                <div className="text-xl font-bold text-white">Expert Team</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Updates</div>
                <div className="text-xl font-bold text-white">Daily</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Topics</div>
                <div className="text-xl font-bold text-white">Global Markets</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Post Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/blog1/800/600" 
                alt="Featured Post" 
                className="rounded-3xl shadow-2xl border border-slate-800"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-brand-gold text-brand-dark font-bold rounded-full text-xs uppercase tracking-widest">Featured</div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                <div className="flex items-center gap-1"><Calendar size={14} /> Oct 25, 2023</div>
                <div className="flex items-center gap-1"><User size={14} /> By Axiom Analysts</div>
              </div>
              <h2 className="text-4xl font-bold mb-6">The Future of Global Markets in 2024</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our expert analysts take a deep dive into the trends and factors that will shape the global financial markets in the coming year. From interest rates to geopolitical shifts, we cover it all.
              </p>
              <button className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:bg-yellow-500 transition-all">Read Full Article</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Recent Posts Grid Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BlogPostCard title="5 Essential Trading Strategies for Beginners" date="Oct 20, 2023" author="John Doe" image="blog2" />
            <BlogPostCard title="Understanding Technical Analysis: A Guide" date="Oct 15, 2023" author="Jane Smith" image="blog3" />
            <BlogPostCard title="How to Manage Risk in Volatile Markets" date="Oct 10, 2023" author="Axiom Team" image="blog4" />
            <BlogPostCard title="The Impact of Central Bank Decisions on Forex" date="Oct 05, 2023" author="John Doe" image="blog5" />
            <BlogPostCard title="A Guide to Trading Cryptocurrencies" date="Sep 30, 2023" author="Jane Smith" image="blog6" />
            <BlogPostCard title="Psychology of Trading: Mastering Your Emotions" date="Sep 25, 2023" author="Axiom Team" image="blog7" />
          </div>
        </div>
      </section>

      {/* 4. Security & Trust Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted is protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a broker regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All transfers are processed within our secure and audited systems." />
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FaqItem question="How often do you publish new articles?" answer="We typically publish new articles and market analysis every week." />
            <FaqItem question="Can I subscribe to your blog?" answer="Yes, you can subscribe to our newsletter to receive the latest articles directly in your inbox." />
            <FaqItem question="Are your analysts experienced?" answer="Our team of analysts has decades of combined experience in the financial markets." />
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-brand-gold text-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Stay Ahead of the Markets</h2>
          <p className="text-brand-dark/80 text-lg mb-12 font-medium">Subscribe to our blog and get the latest insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email address" className="px-8 py-5 bg-white/10 border border-brand-dark/20 rounded-full text-brand-dark placeholder:text-brand-dark/50 outline-none w-full max-w-sm" />
            <button className="px-12 py-5 bg-brand-dark text-white font-bold rounded-full text-xl hover:scale-105 transition-transform shadow-2xl">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPostCard = ({ title, date, author, image }: { title: string; date: string; author: string; image: string }) => (
  <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-brand-gold/30 transition-all group cursor-pointer">
    <div className="relative mb-6 overflow-hidden rounded-2xl aspect-video">
      <img 
        src={`https://picsum.photos/seed/${image}/800/600`} 
        alt={title} 
        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
      <div className="flex items-center gap-1"><Calendar size={12} /> {date}</div>
      <div className="flex items-center gap-1"><User size={12} /> {author}</div>
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-brand-gold transition-colors">{title}</h4>
    <button className="text-brand-gold font-bold flex items-center gap-2 hover:underline">
      Read More <ArrowRight size={16} />
    </button>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-brand-gold mb-6 mx-auto">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-slate-500 text-sm">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
    <h4 className="text-lg font-bold mb-2 text-white">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
  </div>
);

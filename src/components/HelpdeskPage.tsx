import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Wallet, Download, Upload, HelpCircle, Search, MessageSquare } from 'lucide-react';

export const HelpdeskPage = () => {
  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/help-bg/1920/1080?blur=3" 
            alt="Helpdesk Background" 
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
              <HelpCircle size={16} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Support Center</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.85] mb-12 tracking-tighter uppercase">
              HOW CAN WE <br />
              <span className="text-gold-gradient italic">HELP?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl leading-relaxed font-light tracking-wide">
              Search our comprehensive help center for answers to your questions or contact our support team for personalized assistance.
            </p>

            <div className="w-full max-w-2xl mx-auto relative mb-24">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search for articles, guides, or FAQs..." 
                className="w-full pl-16 pr-6 py-6 bg-white/5 border border-white/10 rounded-3xl focus:border-brand-gold outline-none transition-all text-xl backdrop-blur-xl"
              />
            </div>

            {/* Floating Glass Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Articles</div>
                <div className="text-xl font-bold text-brand-gold">1000+</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Guides</div>
                <div className="text-xl font-bold text-white">Step-by-Step</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Support</div>
                <div className="text-xl font-bold text-white">24 / 5 Live</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Resolution</div>
                <div className="text-xl font-bold text-white">Fast & Efficient</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Categories Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard icon={<Wallet />} title="Account & Funding" desc="Learn about account types, deposits, and withdrawals." />
            <CategoryCard icon={<Zap />} title="Trading Platforms" desc="Guides for MT4, MT5, and Web Trading platforms." />
            <CategoryCard icon={<Shield />} title="Security & Privacy" desc="Information on data protection and account security." />
            <CategoryCard icon={<Star />} title="Promotions & IB" desc="Details on our bonus programs and partnership opportunities." />
          </div>
        </div>
      </section>

      {/* 3. Popular Articles Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ArticleLink title="How to open a live trading account?" />
            <ArticleLink title="What are the minimum deposit requirements?" />
            <ArticleLink title="How to reset my MT4/MT5 password?" />
            <ArticleLink title="How long do withdrawals take to process?" />
            <ArticleLink title="What documents are required for verification?" />
            <ArticleLink title="How to use the Axiom mobile app?" />
          </div>
        </div>
      </section>

      {/* 4. Contact Support Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Still Need Help?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ContactMethodCard icon={<MessageSquare />} title="Live Chat" desc="Chat with our support team in real-time for instant help." />
            <ContactMethodCard icon={<Headphones />} title="Phone Support" desc="Call us for personalized assistance from our experts." />
            <ContactMethodCard icon={<Globe />} title="Email Support" desc="Send us an email and we'll get back to you within 24 hours." />
          </div>
        </div>
      </section>

      {/* 5. Security & Trust Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted is protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a broker regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All transfers are processed within our secure and audited systems." />
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FaqItem question="What are your support hours?" answer="Our support team is available 24/5, from Monday to Friday." />
            <FaqItem question="Do you offer support in multiple languages?" answer="Yes, we offer support in over 15 languages, including English, Spanish, and Chinese." />
            <FaqItem question="How can I submit a feedback?" answer="You can submit feedback via the 'Leave a Feedback' page in the support section." />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 bg-brand-gold text-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">We're Here for You</h2>
          <p className="text-brand-dark/80 text-lg mb-12 font-medium">Our dedicated support team is ready to assist you with any questions or issues.</p>
          <button className="px-12 py-5 bg-brand-dark text-white font-bold rounded-full text-xl hover:scale-105 transition-transform shadow-2xl">
            Contact Support Now
          </button>
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-gold/30 transition-all text-center">
    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-brand-gold mb-6 mx-auto">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ArticleLink = ({ title }: { title: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-gold/30 transition-all flex items-center justify-between group cursor-pointer">
    <h4 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">{title}</h4>
    <ArrowRight className="text-slate-500 group-hover:text-brand-gold transition-colors" size={20} />
  </div>
);

const ContactMethodCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-gold/30 transition-all">
    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-brand-gold mb-6 mx-auto">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-slate-500 text-sm mb-6">{desc}</p>
    <button className="text-brand-gold font-bold hover:underline">Start Now</button>
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

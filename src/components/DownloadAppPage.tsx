import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Wallet, Download, Apple, Play } from 'lucide-react';

export const DownloadAppPage = () => {
  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/download-bg/1920/1080?blur=3" 
            alt="Download App Background" 
            className="w-full h-full object-cover opacity-20 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
          
          {/* Layered Atmospheric Gradients */}
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold mb-12">
              <Smartphone size={16} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Trade on the Go</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.85] mb-12 tracking-tighter uppercase">
              AXIOM <br />
              <span className="text-gold-gradient italic">MOBILE</span> APP
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl leading-relaxed font-light tracking-wide">
              Experience the power of global markets in the palm of your hand. Download our mobile app for iOS and Android and trade anytime, anywhere.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-24">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-brand-dark font-bold hover:bg-slate-200 transition-all shadow-2xl"
              >
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-[10px] uppercase leading-none">Download on the</div>
                  <div className="text-lg leading-none">App Store</div>
                </div>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-brand-dark font-bold hover:bg-slate-200 transition-all shadow-2xl"
              >
                <Play size={24} />
                <div className="text-left">
                  <div className="text-[10px] uppercase leading-none">Get it on</div>
                  <div className="text-lg leading-none">Google Play</div>
                </div>
              </motion.button>
            </div>

            {/* Floating Glass Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Rating</div>
                <div className="text-xl font-bold text-brand-gold">4.9 / 5.0</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Downloads</div>
                <div className="text-xl font-bold text-white">1M+</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Reviews</div>
                <div className="text-xl font-bold text-white">50K+</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Availability</div>
                <div className="text-xl font-bold text-white">Global</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Features Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <BenefitCard icon={<Zap />} title="One-Tap Trading" desc="Execute trades instantly with our intuitive one-tap trading feature." />
            <BenefitCard icon={<BarChart3 />} title="Advanced Charts" desc="Access professional charting tools and technical indicators on mobile." />
            <BenefitCard icon={<Shield />} title="Secure Access" desc="Protect your account with biometric login and advanced encryption." />
          </div>
        </div>
      </section>

      {/* 3. App Overview Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">The Ultimate Mobile Trading Platform</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our mobile app is designed to provide you with a seamless trading experience. Whether you're a beginner or a professional, our app has everything you need to succeed.
            </p>
            <div className="space-y-4 mb-8">
              <FeatureItem title="Real-Time Quotes" desc="Get instant access to live prices for over 1,000 instruments." />
              <FeatureItem title="Customizable Alerts" desc="Set price alerts and get notified when the market moves." />
              <FeatureItem title="Secure Funding" desc="Deposit and withdraw funds directly from the mobile app." />
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:bg-yellow-500 transition-all">Download Now</button>
              <button className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors font-bold rounded-xl">Learn More</button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://picsum.photos/seed/app1/800/600" 
              alt="Axiom Mobile App" 
              className="rounded-3xl shadow-2xl border border-slate-800"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 4. Security & Trust Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Biometric Login" desc="Secure your account with Fingerprint or Face ID." />
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
            <FaqItem question="Is the app free to download?" answer="Yes, the Axiom Global FX mobile app is completely free to download and use." />
            <FaqItem question="Can I use the same account on mobile and desktop?" answer="Yes, your login credentials are the same for all our platforms." />
            <FaqItem question="Is my data safe on the mobile app?" answer="Absolutely. We use industry-standard encryption and security protocols to protect your data." />
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-brand-gold text-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Trade Anywhere, Anytime</h2>
          <p className="text-brand-dark/80 text-lg mb-12 font-medium">Download the Axiom mobile app and take control of your trading journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-5 bg-brand-dark text-white font-bold rounded-full text-xl hover:scale-105 transition-transform shadow-2xl">
              Download App Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-gold/30 transition-all text-center">
    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-brand-gold mb-6 mx-auto">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-4">
    <CheckCircle2 className="text-brand-gold flex-shrink-0" />
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
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

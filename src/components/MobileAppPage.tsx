import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Layout, Apple, Play } from 'lucide-react';

// --- Animation Variants ---
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const MobileAppPage = () => {
  return (
    // Clean, deep slate background. Gold used only for selection highlight and accents.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Blueish Dark Theme with Subtle Gold Accents) */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden border-b border-white/5">
        
        {/* Background Gradients: Blueish base with a hint of gold */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-yellow-500/5 blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <Smartphone size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Trade Anywhere, Anytime</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
                THE WORLD IN <br />
                {/* The primary gold highlight on the page. pr-4 prevents italic clipping */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
                  YOUR POCKET
                </span>
              </h1>
              
              <p className="text-slate-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-light">
                Experience the power of professional trading in the palm of your hand. Our mobile app provides a seamless and intuitive trading experience for all your devices.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Play size={24} className="text-yellow-400" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </motion.button>
              </div>

              {/* Floating Glass Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
                <StatCard label="Rating" value="4.9 / 5.0" highlight />
                <StatCard label="Downloads" value="1M+" />
                <StatCard label="Latency" value="Ultra-Low" />
                <StatCard label="Security" value="Biometric" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://images.unsplash.com/photo-1616842408985-5b40d6cfa98b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mobile App Trading" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Floating Stat Box */}
              <div className="absolute -bottom-8 -left-8 bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl z-20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <Star size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">App Store Rating</div>
                    <div className="text-xl font-bold text-white">#1 Finance App</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Zap />} title="One-Tap Trading" desc="Execute trades instantly with a single tap on your screen, optimized for speed." />
            <FeatureCard icon={<BarChart3 />} title="Advanced Charts" desc="Full suite of technical analysis tools, drawing indicators, and multiple timeframes." />
            <FeatureCard icon={<Shield />} title="Secure Access" desc="Biometric login (FaceID/TouchID) and advanced encryption for ultimate security." />
          </div>
        </div>
      </motion.section>

      {/* 3. APP OVERVIEW SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1 group">
              <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full transition-all group-hover:bg-blue-500/20" />
              <img 
                src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop" 
                alt="Mobile App Interface" 
                className="rounded-3xl shadow-2xl relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Master the Markets Anywhere</h2>
              <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
                Our mobile app is designed to provide a professional trading experience without compromise. Access all your accounts, manage risk, and analyze charts on the go.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Real-Time Alerts" desc="Never miss a trading opportunity with customizable push notifications." />
                <FeatureItem title="Account Management" desc="Deposit, withdraw, and manage your profile directly from the app." />
                <FeatureItem title="Market News" desc="Stay informed with real-time market news and institutional analysis." />
                <FeatureItem title="Multi-Asset Trading" desc="Trade Forex, Stocks, Indices, and Commodities on one unified platform." />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Why Choose Axiom Mobile?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <BenefitItem icon={<Smartphone />} title="Intuitive Design" desc="User-friendly interface meticulously designed for mobile-first trading." />
            <BenefitItem icon={<Zap />} title="Low Latency" desc="Highly optimized for ultra-fast trade execution even on mobile networks." />
            <BenefitItem icon={<Layout />} title="Customizable" desc="Personalize your dashboard, widgets, and watchlists to suit your style." />
            <BenefitItem icon={<Shield />} title="Safe & Secure" desc="Bank-grade security protocols for your personal data and transactions." />
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Biometric Login" desc="Access your account seamlessly and securely with modern FaceID or TouchID." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a trusted global broker strictly regulated by top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All deposits and withdrawals are processed with high-level military encryption." />
          </div>
        </div>
      </motion.section>

      {/* 6. INTEGRATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Integrated with MT4 & MT5</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-light text-lg">
            Our mobile app is fully compatible with your existing MT4 and MT5 accounts, allowing for a seamless transition between your desktop and mobile platforms.
          </p>
          <div className="flex justify-center gap-12 opacity-50">
            <div className="font-bold text-2xl md:text-3xl tracking-widest text-blue-400">MetaTrader 4 Mobile</div>
            <div className="font-bold text-2xl md:text-3xl tracking-widest text-white">MetaTrader 5 Mobile</div>
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="Is the mobile app free?" answer="Yes, the Axiom Global FX mobile app is completely free to download and use for all our verified clients." />
            <FaqItem question="Can I trade all instruments on mobile?" answer="Yes, all instruments available on our desktop platforms (Forex, Crypto, Indices, etc.) are fully available on mobile." />
            <FaqItem question="Is the mobile app secure?" answer="Absolutely. We use bank-grade SSL encryption and biometric login (FaceID/TouchID) to ensure your account is always safe." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Trade the World in Your Pocket</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Download the Axiom Mobile App today and experience the absolute future of remote trading.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:scale-105 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] flex items-center justify-center gap-2">
              Download App Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center text-center">
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/80 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-0.5" size={24} />
    <div>
      <h4 className="font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{title}</h4>
      <p className="text-slate-400 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const BenefitItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-center group">
    <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h4 className="font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-xs font-light leading-relaxed">{desc}</p>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all group text-center backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/80 hover:border-blue-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
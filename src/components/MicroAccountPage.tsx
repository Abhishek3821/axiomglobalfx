import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CreditCard, Globe, BarChart3, ArrowRight } from 'lucide-react';

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

export const MicroAccountPage = () => {
  return (
    // Clean, deep slate background. Textured gold used strictly for premium accents.
    <div className="bg-[#0A0806] text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Textured Gold) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-[#D4AF37]/10">
        
        {/* Subtle Gold Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FDE08B]/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Platform Tiles (Dark Glass with Gold Rims) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <PlatformCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} label="MT4" />
            <PlatformCard3D bottom="25%" right="15%" rotate={15} scale={0.9} delay={1.2} label="MT5" />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#FDE08B] mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            <Zap size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Ideal for Beginners</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            AXIOM 
            {/* The primary gold highlight on the page */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
               MICRO
            </span> <br />
            <span className="text-2xl md:text-4xl tracking-widest mt-2 block">ACCOUNT</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            The ideal choice for beginners. Trade with smaller contract sizes and lower risk while enjoying the same professional trading conditions.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2"
            >
              Open Micro Account <ArrowRight size={16} />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(212,175,55,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-[#D4AF37]/50 text-[#FDE08B] font-bold text-sm backdrop-blur-sm transition-all"
            >
              Try Demo First
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="Min Deposit" value="$10" highlight />
            <StatCard label="Leverage" value="Up to 1:1000" />
            <StatCard label="Spreads" value="From 1.0 Pips" />
            <StatCard label="Lot Size" value="0.01 Micro" />
          </motion.div>
        </div>
      </section>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUpVariant} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Micro?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Perfect for those who are new to the markets or want to test strategies with minimal risk.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Zap />} title="Low Risk" desc="Trade with 1,000 units per lot instead of 100,000. Perfect for precise risk management." />
            <FeatureCard icon={<Star />} title="Zero Commission" desc="Enjoy trading with no commission fees. All costs are included directly in the spread." />
            <FeatureCard icon={<BarChart3 />} title="Small Deposit" desc="Start your real-money trading journey with a minimum deposit of just $10." />
          </div>
        </div>
      </motion.section>

      {/* 3. ACCOUNT SPECIFICATIONS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/5"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Account Specifications</h2>
          <div className="bg-[#1A140A]/40 border border-[#D4AF37]/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 relative z-10">
              <SpecItem label="Minimum Deposit" value="$10" />
              <SpecItem label="Contract Size" value="1 Lot = 1,000 units" />
              <SpecItem label="Leverage" value="Up to 1:1000" />
              <SpecItem label="Spreads" value="From 1.0 pips" />
              <SpecItem label="Commission" value="None" />
              <SpecItem label="Max Open Orders" value="Unlimited" />
              <SpecItem label="Min Trade Volume" value="0.01 Lots" />
              <SpecItem label="Islamic Account" value="Available" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. TRADING PLATFORMS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Industry-Leading Platforms</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our Micro account is fully compatible with the world's most popular trading platforms. Experience professional trading execution on any device.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0A0806] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#FDE08B] font-bold text-lg group-hover:scale-110 transition-transform">MT4</div>
                <div>
                  <span className="font-bold text-white block group-hover:text-[#FDE08B] transition-colors">MetaTrader 4</span>
                  <span className="text-xs text-slate-500">The Industry Standard</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0A0806] border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#FDE08B] font-bold text-lg group-hover:scale-110 transition-transform">MT5</div>
                <div>
                  <span className="font-bold text-white block group-hover:text-[#FDE08B] transition-colors">MetaTrader 5</span>
                  <span className="text-xs text-slate-500">Advanced Analytics</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[60px] rounded-full transition-all group-hover:bg-[#D4AF37]/20" />
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
              alt="Trading Platforms" 
              className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 object-cover h-[400px] w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY & TRUST SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Security of Your Funds</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Negative Balance Protection" desc="Strict risk management protocols ensure you can never lose more than your initial deposit." />
            <SecurityCard icon={<Globe />} title="Regulated Broker" desc="Trade with complete peace of mind under global, top-tier financial regulations." />
            <SecurityCard icon={<CreditCard />} title="Segregated Accounts" desc="Client funds are kept entirely separate from company funds in top-tier global banks." />
          </div>
        </div>
      </motion.section>

      {/* 6. FUNDING METHODS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Instant Funding & Withdrawals</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black italic tracking-tighter">VISA</span>
            <span className="text-2xl font-black tracking-tighter">MasterCard</span>
            <span className="text-2xl font-black italic text-blue-500">PayPal</span>
            <span className="text-2xl font-black text-purple-600">Skrill</span>
            <span className="text-2xl font-black text-green-500">NETELLER</span>
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-t border-[#D4AF37]/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="What is the difference between Micro and Standard?" answer="The main difference is the contract size. A Micro lot is 1,000 units, making it lower risk, while a Standard lot is 100,000 units." />
            <FaqItem question="Is there a commission on the Micro account?" answer="No, there are strictly zero commissions on the Micro account. All trading costs are built directly into the spread." />
            <FaqItem question="Can I upgrade to a Standard account later?" answer="Yes, you can easily open multiple account types under your single Axiom profile as your trading volume grows." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Start Your Trading Journey</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Open a Micro account today and learn to trade with confidence and minimal risk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50">
              Open Micro Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const PlatformCard3D = ({ top, bottom, left, right, rotate, scale, delay, label }: any) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-[#0A0806]/80 backdrop-blur-md"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          width: '120px',
          height: '120px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.2)' 
        }}
      >
        <span className={`text-4xl font-black text-white drop-shadow-lg`}>{label}</span>
      </div>
    </motion.div>
  );
};

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl border border-[#D4AF37]/10 backdrop-blur-md flex flex-col justify-center text-center"
       style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(212, 175, 55, 0.02) 100%)', boxShadow: 'inset -8px 10px 0px 0px rgba(212, 175, 55, 0.02)' }}>
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-[#D4AF37]' : 'text-white'}`}>{value}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 hover:bg-[#1A140A]/80 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const SpecItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-[#D4AF37]/30 transition-colors">
    <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{label}</span>
    <span className="font-bold text-white text-sm group-hover:text-[#FDE08B] transition-colors">{value}</span>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all group text-center backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:bg-[#1A140A] hover:border-[#D4AF37]/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
  </div>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Layout, Monitor, Cpu, Activity, Database } from 'lucide-react';

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

export const Mt5Page = () => {
  return (
    // Clean, deep slate/bronze background. Gold used for selection highlight.
    <div className="bg-[#0A0806] text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Gold Accents) */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-[#D4AF37]/10">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FDE08B]/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Tech Tiles (Dark Glass with Gold Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <TechCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} icon={<Cpu size={40} className="text-[#FDE08B] drop-shadow-md" />} />
            <TechCard3D bottom="25%" left="10%" rotate={-10} scale={1} delay={1.2} icon={<BarChart3 size={48} className="text-[#FDE08B] drop-shadow-md" />} />
            <TechCard3D top="15%" right="20%" rotate={15} scale={0.7} delay={0.5} icon={<Database size={36} className="text-[#FDE08B] drop-shadow-md" />} />
            <TechCard3D bottom="30%" right="12%" rotate={20} scale={0.9} delay={1.5} icon={<Activity size={44} className="text-[#FDE08B] drop-shadow-md" />} />
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
            <Cpu size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Next-Gen Trading Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            METATRADER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
              5
            </span> (MT5)
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-white/60 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Experience the future of multi-asset trading. MT5 offers advanced technical analysis, algorithmic trading, and a wider range of instruments.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
            >
              Download MT5 Desktop <ArrowRight size={16} />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(212,175,55,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-[#D4AF37]/50 text-[#FDE08B] font-bold text-sm backdrop-blur-sm transition-all"
            >
              Launch MT5 Web
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="Timeframes" value="21 Options" highlight />
            <StatCard label="Indicators" value="80+ Built-in" />
            <StatCard label="Execution" value="Ultra-Fast" />
            <StatCard label="Assets" value="Multi-Asset" />
          </motion.div>
        </div>
      </section>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<BarChart3 />} title="Multi-Asset Trading" desc="Trade Forex, Stocks, Indices, and Commodities all from a single, unified platform interface." />
            <FeatureCard icon={<Zap />} title="Advanced Analysis" desc="21 timeframes, 80+ technical indicators, and deeply analytical charting objects." />
            <FeatureCard icon={<Cpu />} title="Algorithmic Trading" desc="Powerful MQL5 environment meticulously built for developing and using Expert Advisors (EAs)." />
          </div>
        </div>
      </motion.section>

      {/* 3. PLATFORM OVERVIEW SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The Professional's Choice</h2>
              <p className="text-white/60 mb-8 leading-relaxed font-light text-lg">
                MT5 is the highly anticipated successor to the world-renowned MT4, providing significantly enhanced features and raw performance for the modern institutional trader.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Depth of Market (DOM)" desc="View complex market depth and place orders with extreme high precision." />
                <FeatureItem title="Economic Calendar" desc="Stay updated with real-time global economic events directly within the platform." />
                <FeatureItem title="Advanced Order Types" desc="Utilize 6 types of pending orders and 2 types of advanced stop orders." />
                <FeatureItem title="Strategy Tester" desc="Multi-threaded strategy tester for rapidly backtesting and optimizing Expert Advisors." />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[60px] rounded-full transition-all group-hover:bg-[#D4AF37]/20" />
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
                alt="MT5 Platform" 
                className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-[#D4AF37]/20 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. COMPARISON SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">MT4 vs. MT5</h2>
          <div className="grid grid-cols-3 gap-0 border border-[#D4AF37]/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm bg-[#1A140A]/40">
            <div className="p-6 bg-[#1A140A] font-bold border-r border-b border-[#D4AF37]/10 text-[#FDE08B]">Feature</div>
            <div className="p-6 bg-[#1A140A] font-bold border-r border-b border-[#D4AF37]/10 text-center text-[#FDE08B]">MetaTrader 4</div>
            <div className="p-6 bg-[#1A140A] font-bold border-b border-[#D4AF37]/10 text-center text-[#FDE08B]">MetaTrader 5</div>
            
            {/* Row 1 */}
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-white/80">Timeframes</div>
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-center text-white/50 font-light">9</div>
            <div className="p-6 border-b border-[#D4AF37]/10 text-center text-emerald-400 font-bold">21</div>
            
            {/* Row 2 */}
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-white/80">Pending Orders</div>
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-center text-white/50 font-light">4</div>
            <div className="p-6 border-b border-[#D4AF37]/10 text-center text-emerald-400 font-bold">6</div>
            
            {/* Row 3 */}
            <div className="p-6 border-r border-[#D4AF37]/10 text-white/80">Economic Calendar</div>
            <div className="p-6 border-r border-[#D4AF37]/10 text-center text-white/50 font-light">No</div>
            <div className="p-6 text-center text-emerald-400 font-bold">Yes</div>
          </div>
        </div>
      </motion.section>

      {/* 5. DEVICE AVAILABILITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Available on All Devices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <DeviceCard icon={<Monitor />} title="Desktop" desc="The fully-featured native platform optimized for Windows and macOS environments." />
            <DeviceCard icon={<Globe />} title="Web Trader" desc="Trade directly from any modern browser without downloading any software." />
            <DeviceCard icon={<Smartphone />} title="Mobile App" desc="Stay fully connected with our highly responsive iOS and Android native applications." />
          </div>
        </div>
      </motion.section>

      {/* 6. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Advanced Encryption" desc="All data transmitted between the client terminal and platform servers is securely encrypted." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade securely with a broker strictly regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All deposits and withdrawals are processed entirely with high-level military encryption." />
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-t border-[#D4AF37]/10"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="Is MT5 better than MT4?" answer="MT5 is a vastly more advanced platform with a modern architecture, significantly more features, and algorithmic capabilities, though many traders still prefer MT4 for its simplicity and legacy EA compatibility." />
            <FaqItem question="Can I use my MT4 account on MT5?" answer="No, MT4 and MT5 account architectures are entirely separate. You will need to open a specific MT5 account to use the platform." />
            <FaqItem question="Is there a cost to use MT5?" answer="No, MetaTrader 5 is provided completely free of charge for all verified Axiom Global FX account holders." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Experience MT5?</h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Download MetaTrader 5 today and start trading on the world's most advanced multi-asset platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50 flex items-center justify-center gap-2">
              Download MT5 Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const TechCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
  return (
    <motion.div
      className="absolute z-10"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-[2rem] border border-[#D4AF37]/20 bg-[#1A140A]/90 backdrop-blur-md p-6 shadow-2xl"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.2)' 
        }}
      >
        <div className="p-3 bg-gradient-to-br from-[#D4AF37]/10 to-[#AA7C11]/5 rounded-xl border border-[#D4AF37]/20">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl border border-[#D4AF37]/10 backdrop-blur-md flex flex-col justify-center text-center"
       style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(212, 175, 55, 0.02) 100%)', boxShadow: 'inset -8px 10px 0px 0px rgba(212, 175, 55, 0.02)' }}>
    <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-[#D4AF37]' : 'text-white'}`}>{value}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-white/50 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#D4AF37]/5 transition-colors border border-transparent hover:border-[#D4AF37]/10 group">
    <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={24} />
    <div>
      <h4 className="font-bold text-white mb-1 group-hover:text-[#FDE08B] transition-colors">{title}</h4>
      <p className="text-white/50 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const DeviceCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-white/50 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all group text-center backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-white/60 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:bg-[#1A140A]/60 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{question}</h4>
    <p className="text-white/60 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
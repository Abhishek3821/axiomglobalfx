import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, Globe, BarChart3, LineChart, ArrowRight, Activity, TrendingUp, Monitor } from 'lucide-react';

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

export const TradingviewPage = () => {
  return (
    // Clean, deep slate background. Selection is blueish to match the theme.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-blue-500 selection:text-white">
      
      {/* 1. HERO SECTION (Blueish Dark Theme with Subtle Gold Accents) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Background Gradients: Predominantly Blue, slight hint of gold */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Chart Tiles (Dark Glass with Blue Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <TVCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} icon={<LineChart size={40} className="text-blue-400 drop-shadow-md" />} />
            <TVCard3D bottom="20%" left="10%" rotate={-10} scale={1.1} delay={1.2} icon={<BarChart3 size={48} className="text-blue-400 drop-shadow-md" />} />
            <TVCard3D top="15%" right="20%" rotate={15} scale={0.7} delay={0.5} icon={<TrendingUp size={36} className="text-blue-400 drop-shadow-md" />} />
            <TVCard3D bottom="25%" right="12%" rotate={20} scale={0.9} delay={1.5} icon={<Activity size={44} className="text-blue-400 drop-shadow-md" />} />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <LineChart size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">World's Best Charting</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            AXIOM <br />
            {/* A touch of golden elegance in the heading */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
              TRADING
            </span> VIEW
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Connect your Axiom Global FX account to TradingView and trade directly from the world's most intuitive charting platform.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {/* The primary button is Gold, making it an excellent focal point */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:bg-yellow-400 flex items-center justify-center gap-2"
            >
              Connect to TradingView <ArrowRight size={16} />
            </motion.button>
            {/* Secondary button is blueish */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(59,130,246,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-blue-500/30 text-blue-400 font-bold text-sm backdrop-blur-sm transition-all"
            >
              Learn More
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="Charting" value="Superior" highlight />
            <StatCard label="Execution" value="Direct" />
            <StatCard label="Community" value="Global" />
            <StatCard label="Tools" value="Advanced" />
          </motion.div>
        </div>
      </section>

      {/* 2. KEY BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<LineChart />} title="Superior Charting" desc="Access the world's most advanced HTML5 charting tools and technical indicators." />
            <FeatureCard icon={<Zap />} title="Direct Trading" desc="Execute trades instantly and directly from your TradingView charts with Axiom." />
            <FeatureCard icon={<Globe />} title="Social Community" desc="Join millions of traders and share ideas on the world's largest social network for finance." />
          </div>
        </div>
      </motion.section>

      {/* 3. PLATFORM OVERVIEW SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The Ultimate Trading Experience</h2>
              <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
                TradingView is the platform of choice for millions of traders globally. By connecting your Axiom account, you get the best of both worlds: superior charting and institutional execution.
              </p>
              <div className="space-y-4">
                <FeatureItem title="100+ Indicators" desc="Access a vast library of built-in and community-created indicators." />
                <FeatureItem title="Custom Scripts" desc="Develop your own unique trading strategies using Pine Script." />
                <FeatureItem title="Real-Time Alerts" desc="Set complex server-side alerts based on price, indicators, or custom logic." />
                <FeatureItem title="Multi-Device Sync" desc="Your charts, drawings, and analysis are always perfectly in sync across all devices." />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full transition-all group-hover:bg-blue-500/20" />
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
                alt="TradingView Platform" 
                className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. HOW TO CONNECT SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">How to Connect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepItem number="01" title="Open Axiom Account" desc="Ensure you have a fully verified, live Axiom Global FX account with funded capital." />
            <StepItem number="02" title="Go to TradingView" desc="Open the TradingView platform and navigate to the Trading Panel at the bottom." />
            <StepItem number="03" title="Select Axiom" desc="Find Axiom in the integrated broker list and securely login with your credentials." />
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Secure API" desc="All execution connections are made through a highly secure, encrypted backend API." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade safely with a broker strictly regulated by multiple top-tier financial authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All underlying deposits and withdrawals are processed within our secure banking network." />
          </div>
        </div>
      </motion.section>

      {/* 6. INTEGRATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Available on All Devices</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-light text-lg">
            TradingView is natively available on desktop, web browsers, and mobile devices, ensuring you can deeply analyze and trade wherever you are.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50">
            <div className="font-bold text-2xl tracking-widest text-blue-400">Desktop App</div>
            <div className="font-bold text-2xl tracking-tight text-white">Web Platform</div>
            <div className="font-bold text-2xl tracking-tighter text-blue-400">Mobile App</div>
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
            <FaqItem question="Is there a cost to use TradingView?" answer="TradingView offers both free and paid premium plans. You can perfectly use the basic features for free while trading with your connected Axiom account." />
            <FaqItem question="Can I trade all instruments on TradingView?" answer="Yes, all FX, Indices, Commodities, and Crypto instruments available in your Axiom account can be seamlessly traded directly on TradingView." />
            <FaqItem question="Is it safe to connect my account?" answer="Absolutely. The connection is made through an OAuth secure API token, and your sensitive passwords are never shared directly with or stored by TradingView." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-blue-500/20 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Elevate Your Charting</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Connect your Axiom account to TradingView today and start trading on the world's most capable financial charts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:scale-105 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Connect to TradingView Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const TVCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
  return (
    <motion.div
      className="absolute z-10"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-slate-900/80 backdrop-blur-md"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          width: '120px',
          height: '120px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' 
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
};

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-center text-center">
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all group overflow-hidden shadow-lg">
    <div className="text-8xl font-black text-blue-500/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110 group-hover:text-blue-500/10">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-blue-400 transition-colors mt-6">{title}</h4>
    <p className="text-slate-400 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
  </div>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
    {/* Using Gold here for that "little bit of gold" accent */}
    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-0.5" size={24} />
    <div>
      <h4 className="font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{title}</h4>
      <p className="text-slate-400 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group text-center backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/60 hover:border-blue-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
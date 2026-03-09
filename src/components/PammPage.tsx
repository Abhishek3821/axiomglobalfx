import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Users, PieChart, TrendingUp, Briefcase } from 'lucide-react';

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

export const PammPage = () => {
  return (
    // Clean, deep slate background. Gold used strictly for selection highlight and accents.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Subtle Gold Accents) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating PAMM Tiles (Dark Glass with Gold/Blue Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <PammCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} icon={<PieChart size={40} className="text-yellow-400" />} />
            <PammCard3D bottom="25%" left="10%" rotate={-10} scale={1} delay={1.2} icon={<Users size={48} className="text-yellow-500" />} />
            <PammCard3D top="15%" right="20%" rotate={15} scale={0.7} delay={0.5} icon={<Briefcase size={36} className="text-yellow-400" />} />
            <PammCard3D bottom="30%" right="12%" rotate={20} scale={0.9} delay={1.5} icon={<TrendingUp size={44} className="text-yellow-500" />} />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-8 backdrop-blur-md"
          >
            <PieChart size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Percentage Allocation Management</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            AXIOM <br />
            {/* The primary gold highlight on the page. pr-4 prevents italic clipping */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
              PAMM
            </span> <br />
            <span className="text-2xl md:text-4xl tracking-widest mt-2 block">ACCOUNTS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Invest in top-performing traders or manage multiple investor accounts with our advanced PAMM solution. A secure and transparent way to grow your wealth.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:bg-yellow-400 flex items-center gap-2"
            >
              Become an Investor <ArrowRight size={16} />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-bold text-sm backdrop-blur-sm transition-all"
            >
              Become a Manager
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="Performance" value="Verified" highlight />
            <StatCard label="Transparency" value="100% Real-Time" />
            <StatCard label="Risk Control" value="Customizable" />
            <StatCard label="Income" value="Passive" />
          </motion.div>
        </div>
      </section>

      {/* 2. KEY BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUpVariant} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Axiom PAMM?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A seamless ecosystem connecting skilled fund managers with smart investors.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard icon={<TrendingUp />} title="Passive Income" desc="Investors can earn passive income by following and automatically copying professional money managers." />
            <BenefitCard icon={<Shield />} title="Risk Management" desc="Set your own risk parameters, allocate specific funds, and employ stop-loss levels for each PAMM account." />
            <BenefitCard icon={<Star />} title="Verified Performance" desc="Transparent and fully verified performance metrics allow you to choose the best PAMM managers." />
          </div>
        </div>
      </motion.section>

      {/* 3. HOW IT WORKS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">How PAMM Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StepItem number="01" title="Manager Creates Pool" desc="A professional trader creates a PAMM account and contributes their own initial capital." />
            <StepItem number="02" title="Investors Join" desc="Investors browse the public PAMM list and contribute their capital to the manager's pool." />
            <StepItem number="03" title="Manager Trades" desc="The manager actively trades the combined, aggregated pool of capital on global markets." />
            <StepItem number="04" title="Profits Distributed" desc="Profits (and losses) are automatically distributed proportionally among all participants." />
          </div>
        </div>
      </motion.section>

      {/* 4. MANAGER BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Are You a Pro Trader?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg font-light">
              Become a PAMM manager and earn performance fees from your investors. Share your trading success and build your own investment fund on our robust platform.
            </p>
            <div className="space-y-4 mb-8">
              <FeatureItem title="Earn Performance Fees" desc="Get paid a percentage of the actual profits you generate for your investors." />
              <FeatureItem title="Global Exposure" desc="Reach thousands of potential investors from around the world via our public leaderboard." />
              <FeatureItem title="Advanced Dashboard" desc="Manage your investors, set your fee structure, and track your earnings with professional tools." />
            </div>
            <button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-sm hover:bg-white/10 hover:border-yellow-500/30 transition-all">
              Apply to be a Manager
            </button>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-yellow-500/10 blur-[60px] rounded-full transition-all group-hover:bg-yellow-500/20" />
            <img 
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop" 
              alt="PAMM Manager" 
              className="rounded-3xl shadow-2xl relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Safe & Transparent</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Funds Security" desc="Your capital is strictly held in segregated accounts at top-tier global banks." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade and invest with confidence using a multi-regulated, award-winning broker." />
            <SecurityCard icon={<BarChart3 />} title="Verified Stats" desc="All PAMM performance data is verified and updated server-side in real-time." />
          </div>
        </div>
      </motion.section>

      {/* 6. INTEGRATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Available on MT4 & MT5</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-light text-lg">
            Our PAMM solution is fully integrated with the world's most popular trading platforms, ensuring a familiar and incredibly powerful experience for both managers and investors.
          </p>
          <div className="flex justify-center gap-12 opacity-50">
            <div className="font-bold text-2xl md:text-3xl tracking-widest text-white">MetaTrader 4</div>
            <div className="font-bold text-2xl md:text-3xl tracking-widest text-yellow-500">MetaTrader 5</div>
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
            <FaqItem question="What is the difference between MAM and PAMM?" answer="MAM allows for highly specific allocation methods (like fixed lot sizes per sub-account), while PAMM is based strictly on percentage allocation relative to the total pool size." />
            <FaqItem question="Can I withdraw my funds at any time?" answer="Yes, investors generally have full control to withdraw their funds, though it is subject to the specific manager's rollover and withdrawal policy schedule." />
            <FaqItem question="Are there any hidden fees?" answer="No, we operate with 100% transparency. Managers may charge a performance fee, but this is only deducted from actual generated profits." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Start Your Investment Journey</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Join thousands of investors who are already profiting with Axiom PAMM.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:scale-105 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] flex items-center justify-center gap-2">
              Open Account & Start Investing <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const PammCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
  return (
    <motion.div
      className="absolute"
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
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center text-center">
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
  </div>
);

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-yellow-500/30 transition-all group overflow-hidden shadow-lg hover:bg-slate-900/80">
    <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110 group-hover:text-yellow-500/5">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-yellow-400 transition-colors mt-6">{title}</h4>
    <p className="text-slate-400 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
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

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 transition-all group text-center backdrop-blur-sm shadow-lg hover:bg-slate-900/80">
    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/80 hover:border-yellow-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
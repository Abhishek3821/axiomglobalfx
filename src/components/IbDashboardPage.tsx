import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, CheckCircle2, ArrowRight, Globe, BarChart3, LayoutDashboard, Users, PieChart, Activity, Lock } from 'lucide-react';

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

export const IbDashboardPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden border-b border-white/5">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-yellow-500/5 blur-[120px] pointer-events-none" />
        </div>

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Dashboard Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <DashboardCard3D top="20%" right="15%" rotate={15} scale={0.8} delay={0} icon={<Users size={40} className="text-blue-400 drop-shadow-md" />} />
            <DashboardCard3D bottom="25%" right="10%" rotate={10} scale={1} delay={1.2} icon={<PieChart size={48} className="text-yellow-400 drop-shadow-md" />} />
            <DashboardCard3D top="15%" left="20%" rotate={-15} scale={0.7} delay={0.5} icon={<BarChart3 size={36} className="text-blue-400 drop-shadow-md" />} />
            <DashboardCard3D bottom="30%" left="12%" rotate={-20} scale={0.9} delay={1.5} icon={<Activity size={44} className="text-yellow-500 drop-shadow-md" />} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-md shadow-sm">
              <LayoutDashboard size={14} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Partner Portal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
              IB <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
                Dashboard
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Manage your partnership activities with our advanced IB dashboard. Track your referrals, secure rebates, and analyze performance in real-time.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:bg-yellow-400 flex items-center gap-2"
            >
              Go to IB Dashboard <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <BenefitCard icon={<Users />} title="Referral Tracking" desc="Monitor your entire network hierarchy and track their trading activity in real-time." />
            <BenefitCard icon={<PieChart />} title="Rebate Reports" desc="Access highly detailed, granular reports on your earned rebates and daily performance." />
            <BenefitCard icon={<Shield />} title="Secure Payments" desc="Your affiliate earnings are cryptographically protected and paid out securely." />
          </div>
        </div>
      </motion.section>

      {/* 3. DASHBOARD OVERVIEW SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Centralized Partner Management</h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
              Our IB dashboard is designed to provide you with all the institutional tools you need to grow your business. From tracking links to performance analytics, everything is centralized.
            </p>
            <div className="space-y-5 mb-10">
              <FeatureItem title="Marketing Materials" desc="Access a wide range of compliant banners, landing pages, and UTM tracking links." />
              <FeatureItem title="Real-Time Analytics" desc="Track your conversion rates, click-throughs, and referral performance instantly." />
              <FeatureItem title="Automated Rebates" desc="Your rebates are automatically calculated based on your tier and paid out seamlessly." />
            </div>
            <button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-sm hover:bg-white/10 hover:border-blue-500/30 transition-all">
              Explore Dashboard Features
            </button>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full transition-all group-hover:bg-blue-500/20" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
              alt="IB Dashboard Interface" 
              className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.section>

      {/* 4. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Lock />} title="SSL Encryption" desc="All affiliate data and structures are protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Partner with a broker regulated by multiple top-tier financial authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All rebate transfers are processed within our secure and audited systems." />
          </div>
        </div>
      </motion.section>

      {/* 5. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="How do I access the IB dashboard?" answer="Once you are approved as a partner, the dedicated IB dashboard tab will automatically become available within your main client portal." />
            <FaqItem question="When are rebates paid out?" answer="Rebates are typically calculated in real-time and paid out daily or monthly directly to your wallet, depending on your specific partnership agreement tier." />
            <FaqItem question="Can I track individual referral performance?" answer="Yes, the dashboard provides highly granular reports allowing you to view the trading volume and activity of each individual sub-IB or direct referral." />
          </div>
        </div>
      </motion.section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Grow Your Business with Axiom</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Join our industry-leading IB program and start earning substantial lifetime rewards for your referrals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:scale-105 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] flex items-center justify-center gap-2">
              Become a Partner Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const DashboardCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
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

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all group shadow-lg backdrop-blur-sm text-center">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
    {/* Using Gold here for the accent */}
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
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/80 hover:border-blue-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
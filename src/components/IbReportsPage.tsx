import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, CheckCircle2, ArrowRight, Globe, BarChart3, Download, PieChart, LineChart, FileText, Users, Lock, Target, Wallet, Activity } from 'lucide-react';

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

export const IbReportsPage = () => {
  return (
    // Clean, deep slate background. Gold used strictly for selection highlight and accents.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Subtle Blue/Gold Accents) */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Analytics Tiles (Dark Glass with Gold/Blue Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <ReportCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} icon={<PieChart size={40} className="text-blue-400 drop-shadow-md" />} />
            <ReportCard3D bottom="25%" left="10%" rotate={-10} scale={1} delay={1.2} icon={<LineChart size={48} className="text-yellow-400 drop-shadow-md" />} />
            <ReportCard3D top="15%" right="20%" rotate={15} scale={0.7} delay={0.5} icon={<FileText size={36} className="text-blue-400 drop-shadow-md" />} />
            <ReportCard3D bottom="30%" right="12%" rotate={20} scale={0.9} delay={1.5} icon={<Target size={44} className="text-yellow-500 drop-shadow-md" />} />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <PieChart size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Partner Performance</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            IB <br />
            {/* The primary gold highlight on the page. pr-4 prevents italic clipping */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
              REPORTS
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Access detailed reports on your partnership performance. Track your referrals, analyze rebates, and optimize conversion rates with our advanced reporting tools.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {/* Primary Gold CTA */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:bg-yellow-400 flex items-center justify-center gap-2"
            >
              Go to Reports Portal <ArrowRight size={16} />
            </motion.button>
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
            <BenefitCard icon={<PieChart />} title="Detailed Analytics" desc="Access a comprehensive breakdown of your entire referral network and performance metrics." />
            <BenefitCard icon={<Shield />} title="Secure Access" desc="Your sensitive reporting data and client structures are protected with advanced encryption." />
            <BenefitCard icon={<Download />} title="Export Data" desc="Easily download your reports in multiple formats for your own records or business analysis." />
          </div>
        </div>
      </motion.section>

      {/* 3. REPORT TYPES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Available Reports</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ReportTypeCard icon={<Users />} title="Referral List" desc="A complete, searchable list of all your referred clients and their current account status." />
            <ReportTypeCard icon={<Wallet />} title="Rebate Summary" desc="A detailed breakdown of your earned rebates categorized by sub-account and date." />
            <ReportTypeCard icon={<BarChart3 />} title="Conversion Rates" desc="Track exactly how many of your raw leads successfully become active, funded traders." />
            <ReportTypeCard icon={<Target />} title="Marketing Stats" desc="Monitor the click-through effectiveness of your custom tracking links and banners." />
          </div>
        </div>
      </motion.section>

      {/* 4. WHY USE IB REPORTS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Transparency & Growth</h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
              We believe in providing our partners with the exact data they need to succeed. Our IB reporting suite allows you to monitor your performance and scale your business more effectively.
            </p>
            <div className="space-y-4 mb-10">
              <FeatureItem title="Real-Time Updates" desc="Reports are updated instantly after every relevant trading or funding activity." />
              <FeatureItem title="Advanced Filtering" desc="Slice and dice your reports by specific dates, account types, or referral tiers." />
              <FeatureItem title="Comprehensive Data" desc="View exact transaction IDs, spread markups, and precise conversion rates." />
            </div>
            <button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-sm hover:bg-white/10 hover:border-blue-500/30 transition-all">
              View Sample Reports
            </button>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full transition-all group-hover:bg-blue-500/20" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
              alt="Data Analytics Dashboard" 
              className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
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
            <SecurityCard icon={<Lock />} title="SSL Encryption" desc="All sensitive partner data transmitted is protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Operate your IB business with a broker regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Infrastructure" desc="All reporting and rebate calculations are processed within our secure, audited systems." />
          </div>
        </div>
      </motion.section>

      {/* 6. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30 border-b border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="How far back does the history go?" answer="Your IB reports and complete client history are permanently available from the day you became a registered partner." />
            <FaqItem question="Can I download my reports?" answer="Yes, you can seamlessly export any of your reports in CSV or PDF format directly from the partner portal." />
            <FaqItem question="When are reports updated?" answer="Volume and rebate reports are typically updated in real-time, while certain conversion metrics calculate daily." />
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-blue-500/20 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Stay in Control of Your Partnership</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Access your detailed IB reports and optimize your business growth with Axiom Global FX.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:scale-105 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              View IB Reports Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const ReportCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
  return (
    <motion.div
      className="absolute z-10"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-slate-900/80 backdrop-blur-md p-6 shadow-2xl"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' 
        }}
      >
        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const ReportTypeCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 transition-all group shadow-lg backdrop-blur-sm">
    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5 group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h4 className="text-lg font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
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
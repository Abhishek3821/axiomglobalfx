import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, Globe, ArrowRight, Settings, Layout, Users, Activity, BarChart2 } from 'lucide-react';

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

export const MamPage = () => {
  return (
    // Clean, deep slate/bronze background. Gold used for selection highlight.
    <div className="bg-[#0A0806] text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Gold Accents) */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden border-b border-[#D4AF37]/10">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#FDE08B]/5 blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#FDE08B] mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <Settings size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Multi-Account Management</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
                AXIOM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
                  MAM
                </span> SOLUTIONS
              </h1>
              
              <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                Professional multi-account management for money managers. Manage multiple trading accounts from a single master interface with advanced allocation methods.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2"
                >
                  Apply For MAM Account <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(212,175,55,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 rounded-xl border border-[#D4AF37]/50 text-[#FDE08B] font-bold text-sm backdrop-blur-sm transition-all"
                >
                  Download MAM Guide
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block h-[500px]"
            >
              {/* Abstract 3D Dashboard Representation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <DashboardCard3D top="10%" left="10%" rotate={-5} scale={0.9} delay={0} icon={<BarChart2 size={32} className="text-[#D4AF37]" />} title="Master Account" value="$1.2M" />
                <DashboardCard3D bottom="15%" right="10%" rotate={5} scale={1} delay={1.5} icon={<Users size={32} className="text-[#FDE08B]" />} title="Active Sub-Accounts" value="142" />
               
                
                {/* Connecting lines SVG simulation in background */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }}>
                  <path d="M 200 150 L 300 250 L 400 350" fill="transparent" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 200 150 L 150 400 L 400 350" fill="transparent" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
              
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Floating Glass Stats Row (Moved below hero for better balance) */}
      <div className="border-b border-[#D4AF37]/10 bg-[#0A0806]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <StatCard label="Allocation" value="Lot / % / Prop" highlight />
             <StatCard label="Accounts" value="Unlimited" />
             <StatCard label="Execution" value="Instant" />
             <StatCard label="Platform" value="MT4 / MT5" />
          </div>
        </div>
      </div>

      {/* 2. ADVANCED FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Advanced MAM Features</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Layout />} title="Centralized Management" desc="Manage an unlimited number of client accounts simultaneously from a single MT4/MT5 master interface." />
            <FeatureCard icon={<Zap />} title="Real-Time Allocation" desc="Execute trades on the master account and instantly allocate them to all sub-accounts with zero latency." />
            <FeatureCard icon={<Shield />} title="Flexible Allocation" desc="Choose from multiple advanced allocation methods including Lot, Percentage, and Proportional by Equity." />
          </div>
        </div>
      </motion.section>

      {/* 3. ALLOCATION METHODS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Advanced Allocation Methods</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AllocationBox title="Lot Allocation" desc="Assign a fixed lot size volume to be traded for each specific sub-account." />
            <AllocationBox title="Percentage Allocation" desc="Allocate a specific percentage of the master account's trade volume." />
            <AllocationBox title="Proportional by Balance" desc="Volume is allocated automatically based on the cash balance of each sub-account." />
            <AllocationBox title="Proportional by Equity" desc="Volume is allocated dynamically based on the floating equity of each sub-account." />
          </div>
        </div>
      </motion.section>

      {/* 4. BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1 relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[60px] rounded-full transition-all group-hover:bg-[#D4AF37]/20" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
              alt="MAM Benefits" 
              className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-[#D4AF37]/20 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose Axiom MAM?</h2>
            <p className="text-white/60 mb-8 leading-relaxed font-light text-lg">
              Our MAM solution is meticulously designed for professional money managers who require a robust, server-side scalable platform to manage their clients' capital efficiently.
            </p>
            <div className="space-y-5">
              <BenefitItem title="Zero Latency Execution" desc="Trades are executed instantly across all sub-accounts simultaneously." />
              <BenefitItem title="Performance Reporting" desc="Generate detailed analytical reports for each sub-account and the master account." />
              <BenefitItem title="Customizable Fee Structure" desc="Set and automatically deduct your own performance and management fees." />
              <BenefitItem title="Dedicated Expert Support" desc="Direct access to our institutional support team for professional money managers." />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY & TRANSPARENCY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Secure & Transparent</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Segregated Funds" desc="All client funds are strictly held in segregated accounts at top-tier global banks." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Axiom is a multi-regulated broker, ensuring the highest standards of financial safety." />
            <SecurityCard icon={<Star />} title="Full Transparency" desc="All trading history, fee deductions, and performance metrics are fully transparent to your clients." />
          </div>
        </div>
      </motion.section>

      {/* 6. INTEGRATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Available on MT4 & MT5</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12 font-light text-lg">
            Our powerful MAM solution is fully integrated via server-side API with the world's most popular trading platforms, ensuring a familiar and incredibly powerful experience.
          </p>
          <div className="flex justify-center gap-16 opacity-50">
            <div className="font-black text-3xl tracking-widest text-[#D4AF37]">MetaTrader 4</div>
            <div className="font-black text-3xl tracking-widest text-[#FDE08B]">MetaTrader 5</div>
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
            <FaqItem question="What is the minimum number of accounts for MAM?" answer="There is no minimum number of accounts required. You can start managing even a single sub-account and scale up." />
            <FaqItem question="Can I use Expert Advisors (EAs) with MAM?" answer="Yes, our MAM solution is completely server-side, meaning it fully supports EAs and high-frequency automated trading strategies." />
            <FaqItem question="How are performance fees calculated?" answer="Performance and management fees are automatically calculated using the high-water mark model and deducted from sub-accounts based on your preset terms." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Scale Your Management Business</h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Join Axiom Global FX and take your professional money management business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50 flex items-center justify-center gap-2">
              Apply for MAM Account <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const DashboardCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon, title, value }: any) => {
  return (
    <motion.div
      className="absolute z-10"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1A140A]/90 backdrop-blur-md p-6 shadow-2xl"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.2)' 
        }}
      >
        <div className="mb-4 p-3 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
          {icon}
        </div>
        <span className="font-bold text-white/50 text-xs tracking-widest uppercase mb-1">{title}</span>
        <span className="font-black text-white text-xl">{value}</span>
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

const AllocationBox = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 text-center hover:border-[#D4AF37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all cursor-pointer group backdrop-blur-sm">
    <h4 className="font-bold mb-3 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-white/50 text-xs leading-relaxed font-light">{desc}</p>
  </div>
);

const BenefitItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#D4AF37]/5 transition-colors border border-transparent hover:border-[#D4AF37]/10 group">
    <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={24} />
    <div>
      <h4 className="font-bold text-white mb-1 group-hover:text-[#FDE08B] transition-colors">{title}</h4>
      <p className="text-white/50 text-sm font-light leading-relaxed">{desc}</p>
    </div>
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
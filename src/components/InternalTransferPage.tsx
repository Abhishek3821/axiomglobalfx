import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, ArrowRight, RefreshCw, Layers, Globe, Lock, ArrowLeftRight } from 'lucide-react';

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

export const InternalTransferPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-10 pb-20 overflow-hidden border-b border-white/5">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600/5 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-yellow-500/5 blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-md shadow-sm">
              <RefreshCw size={14} className="animate-spin-slow" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Instant Liquidity</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
              Internal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600 italic pr-4">
                Transfer
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Move funds between your Axiom Global FX accounts instantly with zero fees. 
              Optimize your capital across MT4, MT5, and different trading strategies effortlessly.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:bg-yellow-400 flex items-center gap-2"
            >
              Go to Transfer Portal <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative Floating Icon for Context */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <ArrowLeftRight size={600} strokeWidth={1} />
        </div>
      </section>

      {/* 2. KEY BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard icon={<Zap />} title="Instant Processing" desc="Funds are moved between your trading accounts in real-time, 24/7." />
            <BenefitCard icon={<Star />} title="Zero Commissions" desc="Maximize your trading power. We never charge for internal capital movement." />
            <BenefitCard icon={<Lock />} title="Closed-Loop Security" desc="Transfers stay within our encrypted ecosystem for maximum safety." />
          </div>
        </div>
      </motion.section>

      {/* 3. TRANSFER PROCESS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">The Transfer Process</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepItem number="01" title="Access Client Portal" desc="Login to your secure Axiom Global FX dashboard and navigate to 'Funds'." />
            <StepItem number="02" title="Select Accounts" desc="Choose your source and destination accounts from the dropdown menu." />
            <StepItem number="03" title="Instant Execution" desc="Enter the amount and confirm. Funds are updated in both accounts immediately." />
          </div>
        </div>
      </motion.section>

      {/* 4. EFFICIENT CAPITAL MANAGEMENT */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Account Management</h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
              Traders who utilize multiple accounts for different asset classes or strategies need flexibility. 
              Our internal transfer system acts as your personal financial hub.
            </p>
            <div className="space-y-5 mb-10">
              <FeatureItem title="Cross-Platform Liquidity" desc="Sync balances across MT4, MT5, and proprietary web platforms." />
              <FeatureItem title="Auto-Currency Conversion" desc="Accounts in different currencies are converted at transparent live market rates." />
              <FeatureItem title="High-Velocity Management" desc="No daily limits on the number of transfers between your own accounts." />
            </div>
            <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-white/10 hover:bg-slate-700 transition-all">Explore Platform Support</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1611974717482-58a2543e5a36?auto=format&fit=crop&w=800&q=80" 
              alt="Trading Dashboard" 
              className="rounded-3xl shadow-2xl border border-white/5 relative z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="256-bit Encryption" desc="Every transfer request is protected by the same encryption used by global banks." />
            <SecurityCard icon={<Globe />} title="Regulated Ecosystem" desc="All fund movements comply with strict international financial regulations." />
            <SecurityCard icon={<Layers />} title="Audited Infrastructure" desc="Our internal systems undergo regular third-party security audits." />
          </div>
        </div>
      </motion.section>

      {/* 6. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Common Questions</h2>
          <div className="space-y-4">
            <FaqItem question="Are internal transfers really instant?" answer="Yes. Unlike bank wires or card deposits, internal transfers happen entirely within the Axiom system, allowing for real-time execution." />
            <FaqItem question="Can I transfer funds if I have open positions?" answer="Yes, however, you must ensure that your remaining margin is sufficient to maintain your open trades." />
            <FaqItem question="Is there a minimum transfer amount?" answer="Internal transfers can be made for any amount as low as $1 (or equivalent currency)." />
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">Optimize Your Capital</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Don't let your trading capital sit idle. Move funds between accounts to catch every market opportunity.
          </p>
          <button className="px-12 py-5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-2">
            Start Transfer Now <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- Refined Subcomponents --- */

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-10 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/20 transition-all text-center group">
    <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm group overflow-hidden">
    <div className="text-7xl font-black text-blue-500/5 absolute -top-2 -left-2 transition-transform group-hover:scale-110 group-hover:text-blue-500/10">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-blue-400 transition-colors mt-6">{title}</h4>
    <p className="text-slate-400 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
  </div>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-4 items-start">
    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
    <div>
      <h4 className="font-bold text-white leading-tight">{title}</h4>
      <p className="text-slate-500 text-sm font-light mt-1">{desc}</p>
    </div>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 text-center group">
    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:text-yellow-500 transition-colors">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 transition-colors cursor-pointer group">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
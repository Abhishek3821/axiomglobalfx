import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, CheckCircle2, ArrowRight, History, Download, FileText, Lock, Globe } from 'lucide-react';

// --- Animation Variants ---
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const WithdrawalHistoryPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600/10 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-yellow-500/5 blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-md">
              <History size={14} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Transaction Records</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
              Withdrawal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
                Analytics
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Audit your profits with precision. Track every withdrawal request from submission to final settlement with our real-time tracking interface.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:bg-yellow-400 flex items-center gap-2 mx-auto"
            >
              Request New Withdrawal <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-20 relative bg-slate-900/30 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <BenefitCard icon={<FileText />} title="Detailed Records" desc="Access a full history of all your withdrawals since account opening." />
            <BenefitCard icon={<Lock />} title="Secure Access" desc="Your transaction history is protected with advanced encryption." />
            <BenefitCard icon={<Download />} title="Export Data" desc="Download your withdrawal history for your own records or tax purposes." />
          </div>
        </div>
      </motion.section>

      {/* 3. TRANSPARENCY SECTION */}
      <section className="py-24 bg-slate-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparency & Control</h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
              We believe in full transparency. Our withdrawal history tool allows you to monitor your withdrawal activities and manage your trading capital more effectively.
            </p>
            <div className="space-y-4 mb-10">
              <FeatureItem title="Real-Time Updates" desc="History is updated instantly after every successful withdrawal." />
              <FeatureItem title="Advanced Filtering" desc="Filter your history by date, method, or status." />
              <FeatureItem title="Comprehensive Data" desc="View transaction IDs, fees, and conversion rates." />
            </div>
            <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-white/10 hover:bg-slate-700 transition-all">Request Full Statement</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80" 
              alt="Data Analysis" 
              className="rounded-3xl shadow-2xl border border-white/5 relative z-10 opacity-80"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted is protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a broker regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All transfers are processed within our secure and audited systems." />
          </div>
        </div>
      </motion.section>

      {/* 5. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="How far back does the history go?" answer="Your withdrawal history is available from the day you opened your account." />
            <FaqItem question="Can I download my history?" answer="Yes, you can export your history in CSV or PDF format from the client portal." />
            <FaqItem question="Why is my withdrawal status 'Pending'?" answer="Withdrawal requests are processed within 24 business hours. Bank wires may take longer to reflect." />
          </div>
        </div>
      </motion.section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-slate-900 border-t border-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">Stay in Control of Your Funds</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Access your withdrawal history and manage your capital with Axiom Global FX.
          </p>
          <button className="px-12 py-5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-2">
            View Withdrawal History Now <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- Refined Subcomponents --- */

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-10 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/20 transition-all group">
    <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
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
  <div className="text-center group p-8 rounded-2xl bg-slate-900/40 border border-white/5">
    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:text-yellow-500 transition-colors">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-lg font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 transition-colors cursor-pointer group">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
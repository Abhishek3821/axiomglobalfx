import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, CheckCircle2, ArrowRight, Globe, Download, History, FileText, Filter, Lock } from 'lucide-react';

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

export const DepositHistoryPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center pt-10 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-yellow-500/5 blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-md">
              <History size={14} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Transaction Records</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
              Deposit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
                History
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Track your funding activities with absolute precision. Access detailed logs of your past deposits, including status updates and multi-currency records.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:bg-yellow-400 flex items-center gap-2"
            >
              Go to History Portal <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-20 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <BenefitCard icon={<FileText />} title="Detailed Records" desc="Access a timestamped log of every deposit made since account inception." />
            <BenefitCard icon={<Lock />} title="Secure Access" desc="Your financial data is siloed and protected by institutional encryption." />
            <BenefitCard icon={<Download />} title="Export Ready" desc="Generate CSV or PDF reports for accounting or personal tracking." />
          </div>
        </div>
      </motion.section>

      {/* 3. HISTORY TABLE SECTION */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold text-white">Recent Transactions</h2>
              <div className="flex gap-3">
                 <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold border border-white/5 hover:bg-slate-700 transition-colors">
                   <Filter size={14} className="text-blue-400" /> Filter
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold border border-white/5 hover:bg-slate-700 transition-colors">
                   <Download size={14} className="text-yellow-500" /> Export
                 </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="p-6 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Transaction Date</th>
                    <th className="p-6 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Funding Method</th>
                    <th className="p-6 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Net Amount</th>
                    <th className="p-6 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <HistoryRow date="Oct 25, 2023" method="Visa •••• 4242" amount="$1,000.00" status="Completed" />
                  <HistoryRow date="Oct 15, 2023" method="Local Bank Transfer" amount="$5,000.00" status="Completed" />
                  <HistoryRow date="Sep 28, 2023" method="Skrill E-Wallet" amount="$500.00" status="Completed" />
                  <HistoryRow date="Sep 10, 2023" method="Crypto (USDT-ERC20)" amount="$2,500.00" status="Completed" />
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. TRANSPARENCY SECTION */}
      <section className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparency & Total Control</h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
              We provide a granular look at your account funding. Our transparency protocols ensure you can audit your own account at any time with real-time accuracy.
            </p>
            <div className="space-y-4 mb-10">
              <FeatureItem title="Instant Data Sync" desc="Transactions appear in your history the moment they are confirmed." />
              <FeatureItem title="Platform Agnostic" desc="View funding records across all MT4 and MT5 linked accounts." />
              <FeatureItem title="Audit Trail" desc="Every record includes a unique transaction ID for support queries." />
            </div>
            <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-white/10 hover:bg-slate-700 transition-all">Request Full Statement</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 relative">
            <div className="absolute -inset-4 bg-yellow-500/5 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
              alt="Data Analysis" 
              className="rounded-3xl shadow-2xl border border-white/5 relative z-10 opacity-80"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Institutional Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL-256 Encryption" desc="Every byte of transaction data is encrypted during transit and at rest." />
            <SecurityCard icon={<Globe />} title="Global Compliance" desc="Transaction logging meets the highest international KYC and AML standards." />
            <SecurityCard icon={<Star />} title="Audited Systems" desc="Our databases are regularly audited by third-party financial security firms." />
          </div>
        </div>
      </motion.section>

      {/* 6. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Common Inquiries</h2>
          <div className="space-y-4">
            <FaqItem question="How far back can I view my deposits?" answer="You can view your entire funding history since the day of account creation without any time limits." />
            <FaqItem question="What formats can I export my data in?" answer="We support CSV and PDF exports, which are compatible with most accounting software." />
            <FaqItem question="What does a 'Cancelled' status mean?" answer="A cancelled status occurs if the payment was rejected by your bank or if you manually terminated the transaction before completion." />
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">Your Capital, Managed</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Stay on top of your trading finances with Axiom Global FX's transparent reporting tools.
          </p>
          <button className="px-12 py-5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-2">
            Access Full History Now <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-10 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/20 transition-all group">
    <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const HistoryRow = ({ date, method, amount, status }: { date: string; method: string; amount: string; status: string }) => (
  <tr className="hover:bg-white/5 transition-all group">
    <td className="p-6 text-sm text-slate-300 font-light">{date}</td>
    <td className="p-6 text-sm text-white font-medium flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-blue-500/40" /> {method}
    </td>
    <td className="p-6 text-sm font-bold text-white">{amount}</td>
    <td className="p-6">
      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
        {status}
      </span>
    </td>
  </tr>
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
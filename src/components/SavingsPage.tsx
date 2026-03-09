import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, ArrowRight, Globe, Wallet, Upload, PiggyBank, Funnel, Percent, Coins, Clock } from 'lucide-react';

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

export const SavingsPage = () => {
  return (
    // Clean, deep slate background with gold selection highlight
    <div className="bg-[#0B0E14] text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Rebuilt to match the design from the image you provided) */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-10"
          />
        </div>

        {/* 3D Floating Tiles (Dark Matte Glass matching the image, updated with Savings icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <Card3D top="20%" left="15%" rotate={-12} scale={0.85} delay={0} icon={<PiggyBank size={48} className="text-yellow-400 drop-shadow-lg" />} />
            <Card3D bottom="15%" left="12%" rotate={10} scale={1.05} delay={1.2} icon={<Percent size={56} className="text-blue-400 drop-shadow-lg" />} />
            <Card3D top="18%" right="18%" rotate={12} scale={0.75} delay={0.5} icon={<Wallet size={40} className="text-yellow-500 drop-shadow-lg" />} />
            <Card3D bottom="20%" right="12%" rotate={-10} scale={0.95} delay={1.5} icon={<Coins size={50} className="text-blue-400 drop-shadow-lg" />} />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto pb-10">
          
          {/* Top Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#0B0E14]/50 border border-yellow-500/30 text-yellow-500 mb-8 backdrop-blur-md"
          >
            <Globe size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Axiom Financial Ecosystem</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white uppercase"
          >
            DISCOVER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 italic pr-2">
              HIGH-YIELD SAVINGS
            </span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light"
          >
            Earn competitive interest on your idle trading capital. Enjoy yields up to 5% APY with instant access to your funds 24/7.
          </motion.p>
          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:bg-yellow-400 flex items-center gap-2"
            >
              Start Saving Now <ArrowRight size={16} />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl bg-[#11151C] border border-white/5 text-white font-bold text-sm shadow-lg hover:border-white/10 transition-all"
            >
              View Savings Tiers
            </motion.button>
          </div>
        </div>
      </section>

      {/* 2. SAVINGS ACTIVITY TABLE (Added from the previous image you provided) */}
      <section className="py-24 bg-[#0F0C08] relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-[#1A140A]/40 border border-[#D4AF37]/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            {/* Table Header Bar */}
            <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold text-white">Recent Savings Activity</h2>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold border border-white/5 hover:bg-slate-700 transition-colors">
                  <Funnel size={14} className="text-blue-400" /> Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold border border-white/5 hover:bg-slate-700 transition-colors">
                  <Upload size={14} className="text-yellow-500" /> Export
                </button>
              </div>
            </div>

            {/* Main Table Content */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="bg-slate-800/30">
                  <tr>
                    <th className="p-6 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Transaction Date</th>
                    <th className="p-6 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Funding Method</th>
                    <th className="p-6 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Net Amount</th>
                    <th className="p-6 font-bold text-[10px] text-slate-500 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <HistoryRow date="Nov 02, 2023" method="Automatic Transfer" methodDetails="from Trading Account" amount="$2,500.00" status="Completed" />
                  <HistoryRow date="Oct 28, 2023" method="Gold Tier" methodDetails="Interest Payout" amount="$145.80" status="Completed" />
                  <HistoryRow date="Oct 12, 2023" method="Lump Sum Deposit" methodDetails="via Bank Wire" amount="$10,000.00" status="Completed" />
                  <HistoryRow date="Sep 30, 2023" method="Automatic Transfer" methodDetails="from Trading Account" amount="$3,000.00" status="Completed" />
                  <HistoryRow date="Sep 28, 2023" method="Platinum Tier" methodDetails="Monthly Bonus APY" amount="$250.00" status="Completed" />
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <BenefitCard icon={<Zap />} title="High Yields" desc="Earn up to 5% APY on your idle trading capital, paid out automatically every month." />
            <BenefitCard icon={<Star />} title="Instant Access" desc="Move funds freely between your savings and active trading accounts instantly." />
            <BenefitCard icon={<Shield />} title="Secure & Insured" desc="Your savings are protected by our institutional-grade financial security protocols." />
          </div>
        </div>
      </motion.section>

      {/* 4. SAVINGS TIERS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Yield Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TierCard title="Silver" balance="$1,000 - $10,000" interest="2.5% APY" highlight={false} />
            <TierCard title="Gold" balance="$10,001 - $50,000" interest="3.5% APY" highlight={false} />
            <TierCard title="Platinum" balance="$50,001+" interest="5.0% APY" highlight={true} />
          </div>
        </div>
      </motion.section>

      {/* 5. HOW IT WORKS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">How to Save</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepItem number="01" title="Open Savings Account" desc="Create a dedicated, free savings account instantly within your client portal." />
            <StepItem number="02" title="Transfer Funds" desc="Move idle capital seamlessly from your trading account to your savings account." />
            <StepItem number="03" title="Earn Interest" desc="Start earning interest immediately, with automated monthly payouts directly to you." />
          </div>
        </div>
      </motion.section>

      {/* 6. SECURITY & FAQ */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Security & Trust</h2>
              <div className="space-y-6">
                <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted is protected with 256-bit SSL encryption." />
                <SecurityCard icon={<Globe />} title="Global Regulation" desc="Operate with a broker regulated by top-tier authorities." />
                <SecurityCard icon={<Star />} title="Secure Transactions" desc="All transfers are processed within our audited systems." />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Common Questions</h2>
              <div className="space-y-4">
                <FaqItem question="Is there a minimum balance for savings?" answer="Yes, the minimum balance required to start earning the APY interest is $1,000." />
                <FaqItem question="When is interest paid?" answer="Interest is calculated daily based on your end-of-day balance and paid into your savings account on the first day of every month." />
                <FaqItem question="Can I withdraw my savings at any time?" answer="Yes, there are zero lock-up periods. You can move funds back to your trading account or withdraw them entirely at any time without penalty." />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Start Growing Your Wealth Today</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Join the Axiom Savings program and put your idle capital to work effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50 flex items-center justify-center gap-2">
              Open Savings Account Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

/* --- Subcomponents --- */

// Accurately Rebuilt 3D Card utilizing dark glass aesthetics
const Card3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
  return (
    <motion.div
      className="absolute z-10"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-12, 12, -12] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-[1.5rem] border border-white/5 bg-[#121620] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          width: '130px',
          height: '130px',
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-10 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const TierCard = ({ title, balance, interest, highlight }: { title: string; balance: string; interest: string; highlight: boolean }) => (
  <div className={`p-8 rounded-3xl border transition-all shadow-lg backdrop-blur-sm ${highlight ? 'bg-gradient-to-b from-[#D4AF37]/10 to-[#1A140A]/80 border-[#D4AF37]/40' : 'bg-[#1A140A]/40 border-[#D4AF37]/10 hover:border-[#D4AF37]/30'}`}>
    <h4 className={`text-2xl font-bold mb-6 ${highlight ? 'text-[#FDE08B]' : 'text-white'}`}>{title} Tier</h4>
    
    <div className="mb-8">
      <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Balance Range</div>
      <div className="text-xl font-medium text-white">{balance}</div>
    </div>
    
    <div>
      <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Annual Yield</div>
      <div className={`text-5xl font-black ${highlight ? 'text-[#FDE08B] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'text-white'}`}>{interest}</div>
    </div>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-3xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm group overflow-hidden shadow-lg hover:border-[#D4AF37]/40 transition-all">
    <div className="text-8xl font-black text-[#D4AF37]/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-[#FDE08B] transition-colors mt-6">{title}</h4>
    <p className="text-slate-400 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex gap-5 p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 group transition-colors hover:border-[#D4AF37]/30 shadow-lg">
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 flex-shrink-0 flex items-center justify-center text-[#FDE08B] border border-[#D4AF37]/20 group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <div>
      <h4 className="text-lg font-bold mb-2 text-white">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:bg-[#1A140A]/60 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-base font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);

const HistoryRow = ({ date, method, methodDetails, amount, status }: { date: string; method: string; methodDetails?: string; amount: string; status: 'Completed' | 'Pending' | 'Failed' }) => {
  const statusColor = {
    Completed: 'text-emerald-500 bg-emerald-500/10',
    Pending: 'text-yellow-500 bg-yellow-500/10',
    Failed: 'text-red-500 bg-red-500/10',
  }[status];

  return (
    <tr className="hover:bg-white/5 transition-all group">
      <td className="p-6 text-sm text-slate-300 font-light">{date}</td>
      <td className="p-6 text-sm text-white font-medium flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-[#FDE08B] transition-colors" />
          <span>{method}</span>
        </div>
        {methodDetails && <span className="text-slate-500 text-xs font-light ml-4">{methodDetails}</span>}
      </td>
      <td className="p-6 text-sm font-bold text-white">{amount}</td>
      <td className="p-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${statusColor}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};
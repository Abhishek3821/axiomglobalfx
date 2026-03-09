import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, ArrowRight, Globe, Wallet, CircleDollarSign, Coins, Banknote, Upload, Lock } from 'lucide-react';

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

export const WithdrawalPage = () => {
  return (
    // Clean, deep slate background. Selection is blueish to match the theme.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-blue-500 selection:text-white">
      
      {/* 1. HERO SECTION (Blueish Dark Theme with Subtle Gold Accents) */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden border-b border-white/5">
        
        {/* Background Gradients: Predominantly Blue, slight hint of gold */}
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

        {/* 3D Floating Payment Tiles (Dark Glass with Blue Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <PaymentCard3D top="20%" right="15%" rotate={15} scale={0.8} delay={0} icon={<Wallet size={40} className="text-blue-400 drop-shadow-md" />} />
            <PaymentCard3D bottom="25%" right="10%" rotate={10} scale={1} delay={1.2} icon={<Upload size={48} className="text-blue-400 drop-shadow-md" />} />
            <PaymentCard3D top="15%" left="20%" rotate={-15} scale={0.7} delay={0.5} icon={<Banknote size={36} className="text-blue-400 drop-shadow-md" />} />
            <PaymentCard3D bottom="30%" left="12%" rotate={-20} scale={0.9} delay={1.5} icon={<CircleDollarSign size={44} className="text-blue-400 drop-shadow-md" />} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <Upload size={14} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Fast Withdrawals</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
              Withdraw <br />
              {/* A touch of golden elegance in the heading */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
                Funds
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Access your profits quickly and securely. We process withdrawal requests within 24 hours using a wide range of verified payment methods.
            </p>
            
            {/* The primary button is Gold, making it an excellent focal point */}
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:bg-yellow-400 flex items-center gap-2"
            >
              Go to Withdrawal Portal <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. WITHDRAWAL METHODS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Supported Withdrawal Methods</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WithdrawalMethodCard icon={<CreditCard />} title="Credit/Debit Cards" time="1-3 Days" fee="0%" methods={['Visa', 'Mastercard']} />
            <WithdrawalMethodCard icon={<Globe />} title="Bank Wire" time="2-5 Days" fee="0%" methods={['Local Bank', 'SWIFT']} />
            <WithdrawalMethodCard icon={<Wallet />} title="E-Wallets" time="Instant" fee="0%" methods={['Skrill', 'Neteller', 'PayPal']} />
            <WithdrawalMethodCard icon={<Coins />} title="Cryptocurrency" time="15-30 Mins" fee="0%" methods={['BTC', 'ETH', 'USDT']} />
          </div>
        </div>
      </motion.section>

      {/* 3. WITHDRAWAL PROCESS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">How to Withdraw</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepItem number="01" title="Login to Client Area" desc="Access your secure Axiom Global FX client portal with your credentials." />
            <StepItem number="02" title="Select Withdrawal" desc="Choose your preferred withdrawal method and enter the desired amount." />
            <StepItem number="03" title="Request Processed" desc="Our finance team will process your secure request within 24 business hours." />
          </div>
        </div>
      </motion.section>

      {/* 4. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Safe & Secure Transactions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Lock />} title="SSL Encryption" desc="All financial transactions are protected with high-level 256-bit SSL encryption." />
            <SecurityCard icon={<Shield />} title="Segregated Accounts" desc="Client funds are kept strictly in separate accounts at top-tier global banks." />
            <SecurityCard icon={<Star />} title="Regulated Broker" desc="Withdraw with confidence from a multi-regulated global broker." />
          </div>
        </div>
      </motion.section>

      {/* 5. IMPORTANT INFORMATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Important Information</h2>
          <div className="space-y-6">
            <InfoItem title="Withdrawal Method Policy" desc="For security and anti-money laundering compliance, withdrawals must be processed back to the exact same source used for the initial deposit." />
            <InfoItem title="Account Verification" desc="Ensure your account is fully verified (Proof of ID & Residence) to avoid any delays in processing your withdrawal requests." />
            <InfoItem title="Processing Timeframes" desc="While Axiom processes withdrawal requests within 24 business hours, actual clearing times depend heavily on your bank or payment provider." />
          </div>
        </div>
      </motion.section>

      {/* 6. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="What is the minimum withdrawal amount?" answer="The minimum withdrawal amount for most methods is just $5. Bank wire minimums may be higher depending on your region." />
            <FaqItem question="Are there any hidden fees?" answer="No, Axiom Global FX does not charge any internal fees for withdrawals. However, your bank or payment provider might apply their own transfer fees." />
            <FaqItem question="Can I withdraw using crypto?" answer="Yes, we support secure and fast withdrawals in major cryptocurrencies including Bitcoin, Ethereum, and USDT." />
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-blue-500/20 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Access Your Profits Today</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Withdraw your trading funds quickly and securely with Axiom Global FX.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:scale-105 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Withdraw Funds Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const PaymentCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
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

const WithdrawalMethodCard = ({ icon, title, time, fee, methods }: { icon: React.ReactNode; title: string; time: string; fee: string; methods: string[] }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all group shadow-lg backdrop-blur-sm">
    <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <div className="space-y-3 mb-8 text-sm">
      <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Processing Time</span><span className="font-bold text-white">{time}</span></div>
      <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Fees</span><span className="font-bold text-emerald-400">{fee}</span></div>
    </div>
    <div className="flex flex-wrap gap-2">
      {methods.map((m, i) => (
        <span key={i} className="px-3 py-1.5 bg-slate-950 border border-white/10 rounded-lg text-[11px] font-bold text-slate-300 uppercase tracking-wider">{m}</span>
      ))}
    </div>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all group overflow-hidden shadow-lg">
    <div className="text-8xl font-black text-blue-500/5 absolute -top-4 -left-2 transition-transform group-hover:scale-110 group-hover:text-blue-500/10">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-blue-400 transition-colors mt-6">{title}</h4>
    <p className="text-slate-400 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
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

const InfoItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-5 p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all group shadow-lg">
    <div className="mt-1">
      {/* Keeping a little bit of gold for the checkmarks */}
      <CheckCircle2 className="text-yellow-500 flex-shrink-0 group-hover:text-yellow-400 transition-colors" size={28} />
    </div>
    <div>
      <h4 className="font-bold text-lg text-white mb-2 group-hover:text-yellow-400 transition-colors">{title}</h4>
      <p className="text-slate-400 text-base font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/60 hover:border-blue-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, ArrowRight, Globe, Wallet, CircleDollarSign, Coins, Banknote, Lock } from 'lucide-react';

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

export const DepositPage = () => {
  return (
    // Clean, deep slate/bronze background. Gold used for selection highlight.
    <div className="bg-[#0A0806] text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Subtle Gold Accents) */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden border-b border-[#D4AF37]/10">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#FDE08B]/5 blur-[120px] pointer-events-none" />
        </div>

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Payment Tiles (Dark Glass with Gold Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <PaymentCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} icon={<CreditCard size={40} className="text-[#FDE08B] drop-shadow-md" />} />
            <PaymentCard3D bottom="25%" left="10%" rotate={-10} scale={1} delay={1.2} icon={<Wallet size={48} className="text-[#FDE08B] drop-shadow-md" />} />
            <PaymentCard3D top="15%" right="20%" rotate={15} scale={0.7} delay={0.5} icon={<CircleDollarSign size={36} className="text-[#FDE08B] drop-shadow-md" />} />
            <PaymentCard3D bottom="30%" right="12%" rotate={20} scale={0.9} delay={1.5} icon={<Coins size={44} className="text-[#FDE08B] drop-shadow-md" />} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#FDE08B] mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Shield size={14} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Secure Funding</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
              Deposit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
                Funds
              </span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Fund your trading account instantly and securely. Choose from a wide range of global payment methods with zero deposit fees.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-base transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2"
            >
              Go to Deposit Portal <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. PAYMENT METHODS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Supported Payment Methods</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PaymentMethodCard icon={<CreditCard />} title="Credit/Debit Cards" time="Instant" fee="0%" methods={['Visa', 'Mastercard']} />
            <PaymentMethodCard icon={<Globe />} title="Bank Wire" time="2-5 Days" fee="0%" methods={['Local Bank', 'SWIFT']} />
            <PaymentMethodCard icon={<Wallet />} title="E-Wallets" time="Instant" fee="0%" methods={['Skrill', 'Neteller', 'PayPal']} />
            <PaymentMethodCard icon={<Coins />} title="Cryptocurrency" time="15-30 Mins" fee="0%" methods={['BTC', 'ETH', 'USDT']} />
          </div>
        </div>
      </motion.section>

      {/* 3. DEPOSIT PROCESS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">How to Deposit</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepItem number="01" title="Login to Client Area" desc="Access your secure Axiom Global FX client portal with your credentials." />
            <StepItem number="02" title="Choose Method" desc="Select your preferred funding method from our wide range of options." />
            <StepItem number="03" title="Complete Payment" desc="Follow the simple instructions to finalize your deposit and start trading." />
          </div>
        </div>
      </motion.section>

      {/* 4. FEE STRUCTURE SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Zero Fees on Deposits</h2>
          <div className="p-8 md:p-12 rounded-3xl bg-[#1A140A]/40 border border-[#D4AF37]/10 text-center shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white/70 mb-12 leading-relaxed text-lg max-w-3xl mx-auto font-light">
                Axiom Global FX does not charge any internal fees for deposits. We believe that your capital should be fully utilized for trading, not wasted on transaction costs.
              </p>
              <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-[#FDE08B] mb-3 group-hover:scale-110 transition-transform">0%</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Deposit Fees</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-[#FDE08B] mb-3 group-hover:scale-110 transition-transform">Instant</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Processing Time</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-[#FDE08B] mb-3 group-hover:scale-110 transition-transform">24/7</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Funding Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-t border-[#D4AF37]/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Safe & Secure Transactions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Lock />} title="SSL Encryption" desc="All financial transactions are protected with high-level 256-bit SSL encryption." />
            <SecurityCard icon={<Shield />} title="Segregated Accounts" desc="Client funds are kept strictly in separate accounts at top-tier global banks." />
            <SecurityCard icon={<Star />} title="Regulated Broker" desc="Deposit and trade with confidence using a multi-regulated global broker." />
          </div>
        </div>
      </motion.section>

      {/* 6. IMPORTANT INFORMATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08] border-t border-[#D4AF37]/5"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Important Information</h2>
          <div className="space-y-6">
            <InfoItem title="Third-Party Payments" desc="Axiom Global FX does not accept third-party payments. Deposits must come from an account or card strictly in your name." />
            <InfoItem title="Account Verification" desc="Ensure your account is fully verified (Proof of ID & Residence) to avoid any delays in processing your deposits or withdrawals." />
            <InfoItem title="Currency Conversion" desc="If you deposit in a different currency than your account's base currency, standard bank conversion fees may apply." />
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
            <FaqItem question="What is the minimum deposit amount?" answer="The minimum deposit varies by account type, but it starts at just $5 for our Micro and Standard accounts." />
            <FaqItem question="Are there any hidden fees?" answer="No, Axiom Global FX does not charge any internal fees for deposits. You receive 100% of what you transfer." />
            <FaqItem question="Can I deposit using crypto?" answer="Yes, we support instant deposits in major cryptocurrencies including Bitcoin, Ethereum, and USDT." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Start Trading?</h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Fund your account securely now and access the global markets with Axiom Global FX.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50 flex items-center justify-center gap-2">
              Deposit Funds Now <ArrowRight size={18} />
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
        className="flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-[#0A0806]/80 backdrop-blur-md"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          width: '120px',
          height: '120px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.2)' 
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
};

const PaymentMethodCard = ({ icon, title, time, fee, methods }: { icon: React.ReactNode; title: string; time: string; fee: string; methods: string[] }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all group shadow-lg backdrop-blur-sm">
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-6 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <div className="space-y-3 mb-8 text-sm">
      <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Processing Time</span><span className="font-bold text-white">{time}</span></div>
      <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-white/50">Fees</span><span className="font-bold text-emerald-400">{fee}</span></div>
    </div>
    <div className="flex flex-wrap gap-2">
      {methods.map((m, i) => (
        <span key={i} className="px-3 py-1.5 bg-[#0A0806] border border-[#D4AF37]/20 rounded-lg text-[11px] font-bold text-[#FDE08B] uppercase tracking-wider">{m}</span>
      ))}
    </div>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:border-[#D4AF37]/40 transition-all group overflow-hidden shadow-lg">
    <div className="text-8xl font-black text-[#D4AF37]/5 absolute -top-4 -left-2 transition-transform group-hover:scale-110">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-[#FDE08B] transition-colors mt-6">{title}</h4>
    <p className="text-white/60 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
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

const InfoItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-5 p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all group shadow-lg">
    <div className="mt-1">
      <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 group-hover:text-[#FDE08B] transition-colors" size={28} />
    </div>
    <div>
      <h4 className="font-bold text-lg text-white mb-2 group-hover:text-[#FDE08B] transition-colors">{title}</h4>
      <p className="text-white/60 text-base font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:bg-[#1A140A]/60 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{question}</h4>
    <p className="text-white/60 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
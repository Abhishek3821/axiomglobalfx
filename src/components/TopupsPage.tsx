import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, ArrowRight, Globe, Wallet, CircleDollarSign, Coins, Banknote } from 'lucide-react';

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

export const TopupsPage = () => {
  return (
    // Clean, deep slate/bronze background. Gold used for selection highlight.
    <div className="bg-[#0A0806] text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Gold Accents) */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-[#D4AF37]/10">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FDE08B]/5 rounded-full blur-[100px] pointer-events-none z-0" />

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

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#FDE08B] mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            <Wallet size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Instant Funding</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            Account <br />
            {/* The primary gold highlight on the page */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
              Top-ups
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-white/60 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Fund your trading account instantly with our wide range of secure payment methods. No hidden fees, no delays.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-base transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 mx-auto"
          >
            Deposit Funds Now <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>

      {/* 2. FUNDING METHODS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-white">Popular Funding Methods</motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            <MethodCard icon={<CreditCard />} title="Credit/Debit Cards" desc="Instant deposits with Visa and Mastercard." />
            <MethodCard icon={<Globe />} title="Bank Wire" desc="Secure international bank transfers in multiple currencies." />
            <MethodCard icon={<Wallet />} title="E-Wallets" desc="Instant funding via Skrill, Neteller, and PayPal." />
            <MethodCard icon={<Coins />} title="Crypto Funding" desc="Deposit using Bitcoin, Ethereum, and USDT." />
          </div>
        </div>
      </motion.section>

      {/* 3. DEPOSIT PROCESS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">How to Top-up Your Account</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepItem number="01" title="Login to Portal" desc="Access your secure Axiom client area with your credentials." />
            <StepItem number="02" title="Select Deposit" desc="Choose your preferred funding method and enter the amount." />
            <StepItem number="03" title="Confirm & Trade" desc="Follow the instructions to complete the transaction and start trading." />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All transactions are protected with high-level military-grade SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a broker regulated by multiple top-tier financial authorities." />
            <SecurityCard icon={<CreditCard />} title="Secure Transactions" desc="All deposits and withdrawals are processed within our secure banking network." />
          </div>
        </div>
      </motion.section>

      {/* 6. WITHDRAWAL SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Fast & Easy Withdrawals</h2>
            <p className="text-white/60 mb-8 leading-relaxed font-light text-lg">
              We understand that fast access to your funds is crucial. Our withdrawal process is streamlined and designed to be as quick and efficient as our deposit process.
            </p>
            <button className="px-8 py-3.5 bg-transparent border border-[#D4AF37]/50 text-[#FDE08B] font-bold rounded-xl text-sm hover:bg-[#D4AF37]/10 transition-colors">
              Read Withdrawal Policy
            </button>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-[#D4AF37]/10 blur-[60px] rounded-full transition-all group-hover:bg-[#D4AF37]/20" />
            <img 
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop" 
              alt="Withdrawals and Finance" 
              className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover h-[350px] w-full"
              referrerPolicy="no-referrer"
            />
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
            <FaqItem question="How long does it take for my deposit to show up?" answer="Most deposits via cards and e-wallets are processed instantly. Bank wires may take 2-5 business days depending on your bank." />
            <FaqItem question="Is there a minimum deposit amount?" answer="The minimum deposit varies by account type. It starts at just $10 for our Micro account." />
            <FaqItem question="Can I deposit in my local currency?" answer="Yes, we support a wide range of local currencies for deposits, which are automatically converted to your account's base currency." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Fund Your Account?</h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Top-up your account now and capitalize on global market opportunities instantly.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50 flex items-center gap-2">
            Deposit Funds Now <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const PaymentCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
  return (
    <motion.div
      className="absolute"
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

const MethodCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-white/50 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:border-[#D4AF37]/40 transition-all group overflow-hidden shadow-lg">
    <div className="text-8xl font-black text-[#D4AF37]/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-[#FDE08B] transition-colors">{title}</h4>
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

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:bg-[#1A140A]/60 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{question}</h4>
    <p className="text-white/60 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
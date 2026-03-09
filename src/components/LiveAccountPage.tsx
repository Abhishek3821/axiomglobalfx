import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Activity, UserPlus, CheckSquare, Wallet } from 'lucide-react';

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

export const LiveAccountPage = () => {
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
                <Activity size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Real Market Access</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
                MASTER THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
                  LIVE
                </span> MARKETS
              </h1>
              
              <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                Trade with real capital on global markets. Experience lightning-fast execution, competitive spreads, and professional trading tools.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2"
                >
                  Start Trading Live <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(212,175,55,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 rounded-xl border border-[#D4AF37]/50 text-[#FDE08B] font-bold text-sm backdrop-blur-sm transition-all"
                >
                  View Account Types
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden border border-[#D4AF37]/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
                  alt="Live Trading" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-transparent to-transparent opacity-80" />
              </div>
              
             
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. STEPS TO OPEN SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">3 Simple Steps to Start</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard number="01" icon={<UserPlus />} title="Register" desc="Fill in your personal details and create your Axiom profile in minutes." />
            <StepCard number="02" icon={<CheckSquare />} title="Verify" desc="Upload your identification documents for a quick and secure verification process." />
            <StepCard number="03" icon={<Wallet />} title="Fund & Trade" desc="Make your first deposit and start trading on over 1,000 instruments." />
          </div>
        </div>
      </motion.section>

      {/* 3. ACCOUNT TYPES GRID SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Choose Your Live Account</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AccountTypeCard title="Micro" minDep="$10" spread="From 1.0" leverage="1:1000" />
            <AccountTypeCard title="Standard" minDep="$100" spread="From 1.0" leverage="1:500" isPopular />
            <AccountTypeCard title="VIP Elite" minDep="$10,000" spread="From 0.0" leverage="1:200" />
          </div>
        </div>
      </motion.section>

      {/* 4. TRADING CONDITIONS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Professional Trading Conditions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ConditionItem icon={<Zap />} title="Fast Execution" desc="99.35% of orders executed in under 1 second." />
            <ConditionItem icon={<Shield />} title="Negative Balance" desc="Your account balance will never go below zero." />
            <ConditionItem icon={<Globe />} title="Global Markets" desc="Trade Forex, Stocks, Indices, and Commodities." />
            <ConditionItem icon={<Headphones />} title="24/5 Support" desc="Expert assistance whenever the markets are open." />
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY & REGULATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-t border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Regulated & Trusted</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Multi-Regulated" desc="Axiom is regulated by top-tier financial authorities globally." />
            <SecurityCard icon={<CreditCard />} title="Segregated Funds" desc="Your money is kept in separate accounts at top-tier banks." />
            <SecurityCard icon={<Star />} title="Award Winning" desc="Recognized globally for our superior trading services." />
          </div>
        </div>
      </motion.section>

      {/* 6. FUNDING SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Instant Funding Options</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black italic tracking-tighter">VISA</span>
            <span className="text-2xl font-black tracking-tighter">MasterCard</span>
            <span className="text-2xl font-black italic text-blue-500">PayPal</span>
            <span className="text-2xl font-black text-purple-600">Skrill</span>
            <span className="text-2xl font-black text-green-500">NETELLER</span>
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
            <FaqItem question="What documents do I need for verification?" answer="You will need a valid proof of identity (Passport or ID card) and a proof of residence (Utility bill or bank statement)." />
            <FaqItem question="How long does the verification take?" answer="Our team usually verifies documents within 24 hours during business days." />
            <FaqItem question="Can I start with a small amount?" answer="Yes, you can open a Micro account with as little as $10, or a Standard account with $100." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Trade Live?</h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Join the Axiom community and master the global markets today.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50">
            Open Live Account
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const StepCard = ({ number, icon, title, desc }: { number: string; icon: React.ReactNode; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:border-[#D4AF37]/40 transition-all group overflow-hidden">
    <div className="text-8xl font-black text-[#D4AF37]/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110">{number}</div>
    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 relative z-10">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10">{title}</h4>
    <p className="text-white/60 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
  </div>
);

const AccountTypeCard = ({ title, minDep, spread, leverage, isPopular }: { title: string; minDep: string; spread: string; leverage: string; isPopular?: boolean }) => (
  <div className={`p-8 rounded-2xl border transition-all ${isPopular ? 'border-[#D4AF37] bg-[#1A140A]/80 shadow-[0_0_30px_rgba(212,175,55,0.15)] scale-105 z-10' : 'border-[#D4AF37]/10 bg-[#1A140A]/40 hover:border-[#D4AF37]/30'} relative backdrop-blur-sm`}>
    {isPopular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase shadow-lg">Most Popular</div>}
    <h4 className={`text-2xl font-bold mb-6 ${isPopular ? 'text-[#FDE08B]' : 'text-white'}`}>{title}</h4>
    <div className="space-y-4 mb-8">
      <div className="flex justify-between text-sm border-b border-white/5 pb-2"><span className="text-white/50">Min Deposit</span><span className="font-bold text-white">{minDep}</span></div>
      <div className="flex justify-between text-sm border-b border-white/5 pb-2"><span className="text-white/50">Spreads</span><span className="font-bold text-white">{spread}</span></div>
      <div className="flex justify-between text-sm border-b border-white/5 pb-2"><span className="text-white/50">Leverage</span><span className="font-bold text-white">{leverage}</span></div>
    </div>
    <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${isPopular ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'border border-[#D4AF37]/30 text-[#FDE08B] hover:bg-[#D4AF37]/10'}`}>
      Choose {title}
    </button>
  </div>
);

const ConditionItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="text-center p-6 rounded-2xl hover:bg-[#1A140A]/40 border border-transparent hover:border-[#D4AF37]/10 transition-all group">
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h4 className="font-bold mb-3 text-white">{title}</h4>
    <p className="text-white/50 text-sm font-light leading-relaxed">{desc}</p>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all group backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-white/60 text-sm font-light leading-relaxed">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:bg-[#1A140A]/60 hover:border-[#D4AF37]/30 transition-all cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{question}</h4>
    <p className="text-white/60 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
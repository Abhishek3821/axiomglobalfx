import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, ArrowRight, Globe, Gift, Award, Coins, Flame } from 'lucide-react';

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

export const BonusesPage = () => {
  return (
    // Clean, deep slate background. Gold used strictly for selection highlight and accents.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Subtle Gold Accents) */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Bonus Tiles (Dark Glass with Gold/Blue Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <BonusCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} icon={<Gift size={40} className="text-yellow-400 drop-shadow-md" />} />
            <BonusCard3D bottom="25%" left="10%" rotate={-10} scale={1} delay={1.2} icon={<Flame size={48} className="text-yellow-500 drop-shadow-md" />} />
            <BonusCard3D top="15%" right="20%" rotate={15} scale={0.7} delay={0.5} icon={<Coins size={36} className="text-yellow-400 drop-shadow-md" />} />
            <BonusCard3D bottom="30%" right="12%" rotate={20} scale={0.9} delay={1.5} icon={<Award size={44} className="text-blue-400 drop-shadow-md" />} />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.15)]"
          >
            <Gift size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Boost Your Capital</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            MAXIMIZE YOUR <br />
            {/* The primary gold highlight on the page. pr-4 prevents italic clipping */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
              TRADING
            </span> POWER
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Boost your trading potential with our generous bonus programs. Get rewarded for your deposits and trading activity with Axiom Global FX.
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
              View Active Bonuses <ArrowRight size={16} />
            </motion.button>
            {/* Secondary CTA */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-bold text-sm backdrop-blur-sm transition-all"
            >
              Claim Now
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="Deposit Bonus" value="Up to 100%" highlight />
            <StatCard label="Loyalty" value="Rewards Tier" />
            <StatCard label="Referral" value="$50 Per Friend" />
            <StatCard label="Cashback" value="Daily Rebates" />
          </motion.div>
        </div>
      </section>

      {/* 2. KEY BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard icon={<Zap />} title="Deposit Bonus" desc="Get up to 100% bonus on your first deposit to instantly boost your trading margin." />
            <BenefitCard icon={<Star />} title="Loyalty Rewards" desc="Earn status points for every trade and seamlessly redeem them for cash or bonuses." />
            <BenefitCard icon={<Shield />} title="Transparent Terms" desc="All our promotional programs feature clear, fair, and easily achievable terms." />
          </div>
        </div>
      </motion.section>

      {/* 3. ACTIVE BONUS PROGRAMS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Active Bonus Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BonusProgramCard 
              title="100% Welcome Bonus" 
              desc="Double your first deposit up to $5,000. Exclusively available for all new Axiom clients upon first funding." 
              icon={<Gift />}
              highlight={true}
            />
            <BonusProgramCard 
              title="20% Re-deposit Bonus" 
              desc="Keep the momentum going. Get a 20% margin bonus on every subsequent deposit up to $2,000." 
              icon={<Flame />}
            />
            <BonusProgramCard 
              title="Refer-a-Friend" 
              desc="Trading is better together. Earn $50 for every qualified friend you refer who starts trading with Axiom." 
              icon={<Award />}
            />
            <BonusProgramCard 
              title="Cashback Program" 
              desc="Get rewarded for volume. Earn up to $5 cashback per lot traded, paid directly to your cash balance." 
              icon={<Coins />}
            />
          </div>
        </div>
      </motion.section>

      {/* 4. HOW TO CLAIM SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">How to Claim</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepItem number="01" title="Select Bonus" desc="Log into your dashboard and navigate to the promotions tab to choose an active bonus." />
            <StepItem number="02" title="Meet Requirements" desc="Complete the necessary minimum deposit or specified trading activity to qualify." />
            <StepItem number="03" title="Claim Reward" desc="Your bonus equity or cash reward will be credited to your account instantly." />
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
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted is protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a broker regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All transfers and bonus credits are processed within audited systems." />
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
            <FaqItem question="Can I withdraw my bonus?" answer="Bonuses are typically issued as trading credit to increase your margin. However, any profits made from trading with the bonus can be withdrawn." />
            <FaqItem question="Are there any trading requirements?" answer="Yes, some specific bonuses have a minimum trading volume requirement (lots traded) before profits can be withdrawn. Check specific terms." />
            <FaqItem question="Can I have multiple bonuses active?" answer="In most cases, only one primary margin bonus can be active per trading account at a time to prevent leverage abuse." />
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-yellow-500/20 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Boost Your Trading Potential Today</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Claim your Axiom bonus now and start trading the global markets with significantly more capital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:scale-105 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Claim Your Bonus Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const BonusCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
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

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-center text-center">
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
  </div>
);

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const BonusProgramCard = ({ title, desc, icon, highlight = false }: { title: string; desc: string; icon: React.ReactNode; highlight?: boolean }) => (
  <div className={`p-8 rounded-2xl border transition-all group shadow-lg backdrop-blur-sm relative overflow-hidden ${highlight ? 'bg-gradient-to-br from-yellow-500/10 to-slate-900/40 border-yellow-500/30 hover:border-yellow-500/50' : 'bg-slate-900/40 border-white/5 hover:border-blue-500/30'}`}>
    
    {highlight && (
      <div className="absolute top-0 right-0 px-4 py-1 bg-yellow-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
        Most Popular
      </div>
    )}

    <div className="flex items-start gap-5">
       <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${highlight ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/10 text-blue-400'}`}>
         {React.cloneElement(icon as React.ReactElement, { size: 24 })}
       </div>
       <div>
         <h4 className={`text-2xl font-bold mb-3 ${highlight ? 'text-yellow-400' : 'text-white group-hover:text-blue-400 transition-colors'}`}>{title}</h4>
         <p className="text-slate-400 mb-6 leading-relaxed font-light text-sm">{desc}</p>
         <button className={`font-bold flex items-center gap-2 transition-colors text-sm ${highlight ? 'text-white hover:text-yellow-400' : 'text-slate-300 hover:text-blue-400'}`}>
           Learn More <ArrowRight size={16} />
         </button>
       </div>
    </div>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-yellow-500/30 transition-all group overflow-hidden shadow-lg hover:bg-slate-900/80">
    <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110 group-hover:text-yellow-500/5">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-yellow-400 transition-colors mt-6">{title}</h4>
    <p className="text-slate-400 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all group text-center backdrop-blur-sm shadow-lg hover:bg-slate-900/80">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/80 hover:border-yellow-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
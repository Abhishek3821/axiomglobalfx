import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CreditCard, Globe, BarChart3, ArrowRight, Crown, Diamond, CheckCircle2, Phone, Mail, MessageSquare } from 'lucide-react';

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

export const VipAccountPage = () => {
  return (
    // Clean, deep slate/bronze background. Textured gold used strictly for premium accents.
    <div className="bg-[#0A0806] text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Textured Gold) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-[#D4AF37]/10">
        
        {/* Subtle Gold Background Gradients */}
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

        {/* 3D Floating VIP Tiles (Dark Glass with Gold Accents) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <VipCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} content={<Crown size={40} className="text-[#FDE08B] drop-shadow-lg" />} />
            <VipCard3D bottom="25%" right="15%" rotate={15} scale={0.9} delay={1.2} content={<span className="text-3xl font-black text-[#FDE08B] drop-shadow-lg tracking-widest">VIP</span>} />
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
            <Crown size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Premium Trading Experience</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            AXIOM <br />
            {/* The primary gold highlight on the page */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
              VIP ELITE
            </span> <br />
            <span className="text-2xl md:text-4xl tracking-widest mt-2 block">ACCOUNT</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Exclusive features for high-volume traders. Enjoy raw spreads, priority support, and a dedicated account manager to help you succeed.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2"
            >
              Open VIP Account <ArrowRight size={16} />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(212,175,55,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-[#D4AF37]/50 text-[#FDE08B] font-bold text-sm backdrop-blur-sm transition-all"
            >
              Contact Manager
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="Min Deposit" value="$10,000" highlight />
            <StatCard label="Leverage" value="Up to 1:200" />
            <StatCard label="Spreads" value="From 0.0 Pips" />
            <StatCard label="Support" value="Priority 24/7" />
          </motion.div>
        </div>
      </section>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUpVariant} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The VIP Advantage</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Experience trading at its highest level with our most comprehensive account type.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Zap />} title="Raw Spreads" desc="Access direct market liquidity with spreads starting from 0.0 pips on major currency pairs." />
            <FeatureCard icon={<Star />} title="Priority Support" desc="Get instant access to our senior support team and a dedicated, personal account manager." />
            <FeatureCard icon={<BarChart3 />} title="Custom Solutions" desc="Benefit from personalized trading conditions, bespoke leverage options, and higher rebates." />
          </div>
        </div>
      </motion.section>

      {/* 3. ACCOUNT SPECIFICATIONS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/5"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">VIP Specifications</h2>
          <div className="bg-[#1A140A]/40 border border-[#D4AF37]/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 relative z-10">
              <SpecItem label="Minimum Deposit" value="$10,000" />
              <SpecItem label="Contract Size" value="1 Lot = 100,000 units" />
              <SpecItem label="Leverage" value="Up to 1:200 (Customizable)" />
              <SpecItem label="Spreads" value="From 0.0 pips" />
              <SpecItem label="Commission" value="$3.5 per side" />
              <SpecItem label="Max Open Orders" value="Unlimited" />
              <SpecItem label="Min Trade Volume" value="0.1 Lots" />
              <SpecItem label="Islamic Account" value="Available" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. EXCLUSIVE BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Exclusive VIP Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <BenefitBox title="Personal Account Manager" />
            <BenefitBox title="Free VPS Hosting" />
            <BenefitBox title="Exclusive Market Insights" />
            <BenefitBox title="Priority Withdrawals" />
            <BenefitBox title="Custom Trading Tools" />
            <BenefitBox title="Private Webinars" />
            <BenefitBox title="Higher Rebates" />
            <BenefitBox title="Event Invitations" />
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY & TRUST SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-t border-[#D4AF37]/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Negative Balance Protection" desc="Your capital is protected even in extreme market conditions, ensuring you never drop below zero." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade confidently with a broker strictly regulated by multiple top-tier financial authorities." />
            <SecurityCard icon={<CreditCard />} title="Secure Transactions" desc="All deposits and withdrawals are processed with high-level military-grade encryption." />
          </div>
        </div>
      </motion.section>

      {/* 6. FUNDING METHODS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Premium Funding Options</h2>
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
        className="py-24 bg-[#0A0806] border-t border-[#D4AF37]/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="How do I qualify for a VIP account?" answer="A VIP account requires a minimum initial deposit of $10,000 or maintaining a consistently high monthly trading volume across your standard accounts." />
            <FaqItem question="What are the commission rates?" answer="Our VIP account features ultra-low raw spreads with a highly competitive commission of just $3.5 per side ($7 per round turn)." />
            <FaqItem question="Can I have multiple VIP accounts?" answer="Yes, you can open multiple accounts under your profile, subject to meeting the minimum equity and trading volume requirements for each." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Elevate Your Trading</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Join the elite circle of Axiom VIP traders today and experience unparalleled trading conditions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50">
              Open VIP Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const VipCard3D = ({ top, bottom, left, right, rotate, scale, delay, content }: any) => {
  return (
    <motion.div
      className="absolute"
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
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.2)' 
        }}
      >
        {content}
      </div>
    </motion.div>
  );
};

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-[#D4AF37]/10 backdrop-blur-md flex flex-col justify-center text-center"
       style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(212, 175, 55, 0.02) 100%)', boxShadow: 'inset -8px 10px 0px 0px rgba(212, 175, 55, 0.02)' }}>
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-[#D4AF37]' : 'text-white'}`}>{value}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 hover:bg-slate-900/80 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const SpecItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-[#D4AF37]/30 transition-colors">
    <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{label}</span>
    <span className="font-bold text-white text-sm group-hover:text-[#FDE08B] transition-colors">{value}</span>
  </div>
);

const BenefitBox = ({ title }: { title: string }) => (
  <div className="p-5 rounded-xl bg-[#1A140A]/40 border border-[#D4AF37]/10 text-center font-bold text-sm text-white hover:border-[#D4AF37]/50 hover:text-[#FDE08B] transition-all cursor-pointer shadow-lg backdrop-blur-sm flex items-center justify-center min-h-[80px]">
    {title}
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all group text-center backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:bg-[#1A140A] hover:border-[#D4AF37]/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
  </div>
);
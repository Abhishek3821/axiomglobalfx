import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, ArrowRight, Globe, BarChart3, Users, TrendingUp, UserCheck, PlayCircle } from 'lucide-react';

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

export const CopyTradingPage = () => {
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
                <Users size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Social Trading Ecosystem</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
                COPY THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
                  EXPERTS
                </span>
              </h1>
              
              <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                Follow the pros and mirror their success. Automatically copy the trades of top-performing investors and build your portfolio with ease.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2"
                >
                  Start Copying Now <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(212,175,55,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 rounded-xl border border-[#D4AF37]/50 text-[#FDE08B] font-bold text-sm backdrop-blur-sm transition-all"
                >
                  Become a Provider
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              {/* Abstract 3D Representation of Copy Trading instead of a flat image */}
              <div className="relative w-full h-[500px]">
                <UserCard3D top="10%" left="10%" rotate={-10} scale={0.9} delay={0} img="https://i.pravatar.cc/150?img=11" name="Alpha Trader" returnRate="+145%" />
                <UserCard3D top="40%" right="5%" rotate={15} scale={1.1} delay={1.5} img="https://i.pravatar.cc/150?img=68" name="Market Master" returnRate="+89%" />
                <UserCard3D bottom="15%" left="20%" rotate={-5} scale={0.8} delay={0.7} img="https://i.pravatar.cc/150?img=32" name="Crypto King" returnRate="+210%" />
                
                {/* Connecting lines SVG simulation in background */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }}>
                  <path d="M 150 150 Q 300 250 400 200 T 500 350" fill="transparent" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 150 150 Q 200 400 250 400" fill="transparent" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
              
              {/* Floating Stat Box */}
              <div className="absolute -bottom-4 right-10 bg-[#1A140A]/80 backdrop-blur-xl p-6 rounded-3xl border border-[#D4AF37]/30 shadow-2xl z-20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 rounded-full flex items-center justify-center text-[#FDE08B] shadow-[inset_0_0_15px_rgba(212,175,55,0.2)] border border-[#D4AF37]/20">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Top ROI</div>
                    <div className="text-xl font-bold text-[#D4AF37]">245.8%+</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. KEY BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Why Use Copy Trading?</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard icon={<TrendingUp />} title="Passive Growth" desc="Grow your capital by following experienced traders without needing to analyze the markets yourself." />
            <BenefitCard icon={<Shield />} title="Full Control" desc="Set your own risk parameters, stop-loss levels, and stop copying at any given moment." />
            <BenefitCard icon={<Star />} title="Verified Traders" desc="Choose from a wide range of strategy providers with transparent and verified performance history." />
          </div>
        </div>
      </motion.section>

      {/* 3. HOW IT WORKS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">How Copy Trading Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StepItem number="01" title="Choose a Trader" desc="Browse our list of top-performing strategy providers and analyze their performance." />
            <StepItem number="02" title="Set Your Budget" desc="Decide how much capital you want to allocate to a specific trading strategy." />
            <StepItem number="03" title="Auto Copying" desc="Our system will automatically mirror their trades in your account in real-time." />
            <StepItem number="04" title="Manage Portfolio" desc="Track your performance and adjust your portfolio whenever you want." />
          </div>
        </div>
      </motion.section>

      {/* 4. STRATEGY PROVIDER SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Are You a Pro Trader?</h2>
            <p className="text-white/60 mb-8 leading-relaxed font-light text-lg">
              Become a strategy provider and earn extra income from your followers. Share your trading success and build your own following on our platform.
            </p>
            <div className="space-y-4 mb-8">
              <FeatureItem title="Earn Performance Fees" desc="Get paid a percentage of the profits you generate for your followers." />
              <FeatureItem title="Global Exposure" desc="Reach thousands of potential investors from around the world." />
              <FeatureItem title="Advanced Dashboard" desc="Manage your followers and track your earnings with our professional tools." />
            </div>
            <button className="px-8 py-3.5 bg-transparent border border-[#D4AF37]/50 text-[#FDE08B] font-bold rounded-xl text-sm hover:bg-[#D4AF37]/10 transition-colors">
              Become a Provider
            </button>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[60px] rounded-full transition-all group-hover:bg-[#D4AF37]/20" />
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
              alt="Strategy Provider Dashboard" 
              className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-[#D4AF37]/20 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.section>

      {/* 5. PERFORMANCE SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-12 text-white">Top Performing Traders</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TraderCard name="Alpha_Pulse" gain="+145.2%" followers="1,245" risk="Low Risk" img="https://i.pravatar.cc/150?img=11" />
            <TraderCard name="Market_Master" gain="+89.7%" followers="856" risk="Medium Risk" img="https://i.pravatar.cc/150?img=68" />
            <TraderCard name="Crypto_King" gain="+210.4%" followers="2,104" risk="High Risk" img="https://i.pravatar.cc/150?img=32" />
          </div>
          <button className="mt-12 text-[#FDE08B] font-bold hover:text-[#D4AF37] transition-colors flex items-center justify-center gap-2 mx-auto">
            View All Strategy Providers <ArrowRight size={16} />
          </button>
        </div>
      </motion.section>

      {/* 6. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Safe & Transparent</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="Funds Security" desc="Your capital is held in segregated accounts at top-tier global banks." />
            <SecurityCard icon={<UserCheck />} title="Verified Stats" desc="All performance data is verified and updated directly from the server in real-time." />
            <SecurityCard icon={<Star />} title="Regulated Broker" desc="Trade with confidence with a multi-regulated global broker." />
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
            <FaqItem question="Do I need trading experience to copy?" answer="No, copy trading is designed precisely for beginners and investors who want to follow experts without analyzing the markets themselves." />
            <FaqItem question="What is the minimum investment?" answer="The minimum investment depends on the strategy provider's requirements, but you can start copying with as little as $100." />
            <FaqItem question="Are there any hidden fees?" answer="No, we are fully transparent. Strategy providers may charge a performance fee only on the profits they generate for you." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Start Your Success Story</h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Join thousands of investors who are already profiting with Axiom Copy Trading.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50 flex items-center justify-center gap-2">
              Open Account & Start Copying <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const UserCard3D = ({ top, bottom, left, right, rotate, scale, delay, img, name, returnRate }: any) => {
  return (
    <motion.div
      className="absolute z-10"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1A140A]/90 backdrop-blur-md p-4 shadow-2xl"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.2)' 
        }}
      >
        <img src={img} alt="Trader" className="w-16 h-16 rounded-full border-2 border-[#D4AF37] mb-3 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
        <span className="font-bold text-white text-xs mb-1">{name}</span>
        <span className="font-black text-emerald-400 text-sm tracking-widest">{returnRate}</span>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-white/50 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:border-[#D4AF37]/40 transition-all group overflow-hidden shadow-lg">
    <div className="text-8xl font-black text-[#D4AF37]/5 absolute -top-4 -left-2 transition-transform group-hover:scale-110">{number}</div>
    <h4 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-[#FDE08B] transition-colors mt-8">{title}</h4>
    <p className="text-white/60 text-sm relative z-10 font-light leading-relaxed">{desc}</p>
  </div>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#D4AF37]/5 transition-colors border border-transparent hover:border-[#D4AF37]/10 group">
    <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={24} />
    <div>
      <h4 className="font-bold text-white mb-1 group-hover:text-[#FDE08B] transition-colors">{title}</h4>
      <p className="text-white/50 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TraderCard = ({ name, gain, followers, risk, img }: { name: string; gain: string; followers: string; risk: string; img: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all group shadow-lg backdrop-blur-sm flex flex-col items-center">
    <img src={img} alt={name} className="w-20 h-20 rounded-full border-2 border-[#D4AF37]/50 mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform" />
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{name}</h4>
    <div className="text-3xl font-black text-emerald-400 mb-6 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">{gain}</div>
    <div className="w-full grid grid-cols-2 gap-4 text-xs text-white/50 mb-6 text-center border-t border-white/5 pt-4">
      <div>Followers<br/><span className="text-white font-bold text-sm">{followers}</span></div>
      <div>Risk Profile<br/><span className="text-white font-bold text-sm">{risk}</span></div>
    </div>
    <button className="w-full py-3 bg-transparent border border-[#D4AF37]/30 text-[#FDE08B] rounded-xl font-bold text-sm hover:bg-[#D4AF37]/10 transition-colors flex items-center justify-center gap-2">
      <PlayCircle size={16} /> Copy Trader
    </button>
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
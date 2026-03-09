import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, Smartphone, ArrowRight, BarChart3, FlaskConical, XCircle } from 'lucide-react';

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

export const DemoAccountPage = () => {
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
                <FlaskConical size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Risk-Free Trading</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
                PRACTICE WITH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
                  ZERO
                </span> RISK
              </h1>
              
              <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                Practice trading with $100,000 in virtual funds. Experience real market conditions without any financial risk.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2"
                >
                  Open Free Demo Account <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(212,175,55,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 rounded-xl border border-[#D4AF37]/50 text-[#FDE08B] font-bold text-sm backdrop-blur-sm transition-all"
                >
                  Learn More
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
                  src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Demo Trading" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-transparent to-transparent opacity-80" />
              </div>
              
              
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. WHY DEMO SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Why Start with a Demo?</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <WhyDemoCard icon={<Shield />} title="Risk-Free Learning" desc="Learn the basics of trading and explore our platforms without losing any real money." />
            <WhyDemoCard icon={<BarChart3 />} title="Test Strategies" desc="Develop, backtest, and refine your trading strategies in real-time market conditions." />
            <WhyDemoCard icon={<Smartphone />} title="Master the Platform" desc="Get comfortable with MT4, MT5, and our mobile app mechanics before trading live." />
          </div>
        </div>
      </motion.section>

      {/* 3. DEMO FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[60px] rounded-full transition-all group-hover:bg-[#D4AF37]/20" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="Demo Trading Experience" 
                className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-[#D4AF37]/20 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Real Market Experience</h2>
              <p className="text-white/60 mb-8 leading-relaxed font-light text-lg">
                Our demo accounts are designed to mirror our live trading environment exactly. This ensures a seamless psychological and technical transition when you're ready to trade with real capital.
              </p>
              <div className="space-y-5">
                <FeatureItem title="$100,000 Virtual Funds" desc="Practice with a substantial balance to explore all trading styles and lot sizes." />
                <FeatureItem title="Real-Time Data" desc="Experience live price movements, authentic spreads, and real market volatility." />
                <FeatureItem title="All Instruments" desc="Trade Forex, Stocks, Indices, and Commodities with zero limitations." />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. COMPARISON SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Demo vs. Live Trading</h2>
          <div className="grid grid-cols-3 gap-0 border border-[#D4AF37]/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm bg-[#1A140A]/40">
            <div className="p-6 bg-[#1A140A] font-bold border-r border-b border-[#D4AF37]/10 text-[#FDE08B]">Feature</div>
            <div className="p-6 bg-[#1A140A] font-bold border-r border-b border-[#D4AF37]/10 text-center text-[#FDE08B]">Demo Account</div>
            <div className="p-6 bg-[#1A140A] font-bold border-b border-[#D4AF37]/10 text-center text-[#FDE08B]">Live Account</div>
            
            {/* Row 1 */}
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-white/80">Virtual Funds</div>
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-center flex justify-center items-center text-emerald-400"><CheckCircle2 size={20} /></div>
            <div className="p-6 border-b border-[#D4AF37]/10 text-center flex justify-center items-center text-rose-400"><XCircle size={20} /></div>
            
            {/* Row 2 */}
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-white/80">Real Market Data</div>
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-center flex justify-center items-center text-emerald-400"><CheckCircle2 size={20} /></div>
            <div className="p-6 border-b border-[#D4AF37]/10 text-center flex justify-center items-center text-emerald-400"><CheckCircle2 size={20} /></div>
            
            {/* Row 3 */}
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-white/80">Full Platform Access</div>
            <div className="p-6 border-r border-b border-[#D4AF37]/10 text-center flex justify-center items-center text-emerald-400"><CheckCircle2 size={20} /></div>
            <div className="p-6 border-b border-[#D4AF37]/10 text-center flex justify-center items-center text-emerald-400"><CheckCircle2 size={20} /></div>

            {/* Row 4 */}
            <div className="p-6 border-r border-[#D4AF37]/10 text-white/80">Emotional Risk</div>
            <div className="p-6 border-r border-[#D4AF37]/10 text-center text-white/50 font-light">None</div>
            <div className="p-6 text-center text-[#D4AF37] font-bold">High</div>
          </div>
        </div>
      </motion.section>

      {/* 5. PLATFORM SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-t border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Available on All Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PlatformCard title="MetaTrader 4" desc="The world's most popular platform for Forex trading and EA integration." />
            <PlatformCard title="MetaTrader 5" desc="Advanced multi-asset platform for professional technical analysis." />
            <PlatformCard title="Axiom Mobile App" desc="Trade and monitor your demo account on the go with our powerful app." />
          </div>
        </div>
      </motion.section>

      {/* 6. EDUCATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Learn While You Practice</h2>
            <p className="text-white/60 mb-10 leading-relaxed font-light text-lg">
              Combine your demo trading with our extensive educational resources. Watch webinars, read tutorials, and follow daily market analysis to accelerate your learning curve.
            </p>
            <button className="px-8 py-3.5 bg-transparent border border-[#D4AF37]/50 text-[#FDE08B] font-bold rounded-xl text-sm hover:bg-[#D4AF37]/10 transition-colors">
              Visit Learn Center
            </button>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[60px] rounded-full transition-all group-hover:bg-[#D4AF37]/20" />
            <img 
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop" 
              alt="Education" 
              className="rounded-3xl shadow-2xl relative z-10 border border-[#D4AF37]/20 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
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
            <FaqItem question="How long does a demo account last?" answer="Our demo accounts are valid for 30 days of inactivity. However, you can open a new one at any time." />
            <FaqItem question="Can I reset my demo balance?" answer="Yes, you can contact our support team or easily open a new demo account with a fresh virtual balance via your dashboard." />
            <FaqItem question="Is there any cost to open a demo account?" answer="No, Axiom demo accounts are completely free of charge with no hidden fees." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Start Your Risk-Free Journey</h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Open your demo account in seconds and start mastering the global markets.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50">
            Open Free Demo Account
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const WhyDemoCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#AA7C11]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-white/50 text-sm leading-relaxed font-light">{desc}</p>
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

const PlatformCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all group shadow-lg backdrop-blur-sm">
    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-[#FDE08B] transition-colors">{title}</h4>
    <p className="text-white/50 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-[#1A140A]/40 border border-[#D4AF37]/10 backdrop-blur-sm hover:bg-[#1A140A]/60 hover:border-[#D4AF37]/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-[#FDE08B] transition-colors">{question}</h4>
    <p className="text-white/50 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Layout, Monitor } from 'lucide-react';

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

export const WebTradingPage = () => {
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
                <Globe size={14} className="animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">No Download Required</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1] uppercase">
                AXIOM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE08B] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-sm italic pr-4">
                  WEB
                </span> TRADER
              </h1>
              
              <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                Trade directly from your browser with our powerful web platform. No installation needed, access all your accounts and tools instantly from any device.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE08B] to-[#D4AF37] text-black font-bold rounded-xl text-sm transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2"
                >
                  Launch Web Trader <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative hidden lg:block h-[500px]"
            >
              {/* Abstract 3D UI Representation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <BrowserCard3D top="15%" left="10%" rotate={-5} scale={0.9} delay={0} icon={<Monitor size={40} className="text-[#D4AF37] drop-shadow-md" />} />
                <BrowserCard3D bottom="20%" right="10%" rotate={8} scale={1.1} delay={1.5} icon={<Layout size={48} className="text-[#FDE08B] drop-shadow-md" />} />
                <BrowserCard3D top="45%" right="25%" rotate={-10} scale={0.7} delay={0.8} icon={<Globe size={32} className="text-[#D4AF37] drop-shadow-md" />} />
                
                {/* Connecting lines SVG simulation in background */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }}>
                  <path d="M 200 150 Q 300 250 400 350" fill="transparent" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 200 150 Q 250 300 300 350" fill="transparent" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
              
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Floating Glass Stats Row (Moved below hero for balance) */}
      <div className="border-b border-[#D4AF37]/10 bg-[#0A0806]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <StatCard label="Compatibility" value="All Browsers" highlight />
             <StatCard label="Access" value="Instant" />
             <StatCard label="Security" value="Encrypted" />
             <StatCard label="Tools" value="Full Suite" />
          </div>
        </div>
      </div>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Monitor />} title="Cross-Browser" desc="Works flawlessly on Chrome, Firefox, Safari, and Edge without installing plugins." />
            <FeatureCard icon={<Zap />} title="Instant Access" desc="Login securely and start executing trades in seconds from any computer." />
            <FeatureCard icon={<Shield />} title="Secure Trading" desc="Military-grade encryption ensures your data and funds are always fully protected." />
          </div>
        </div>
      </motion.section>

      {/* 3. PLATFORM OVERVIEW SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Powerful Features in Your Browser</h2>
              <p className="text-white/60 mb-8 leading-relaxed font-light text-lg">
                Our advanced web trader provides all the deep functionality of a heavy desktop platform with the lightweight convenience of a modern web application.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Advanced Charting" desc="Access a full suite of technical analysis tools and drawing indicators." />
                <FeatureItem title="One-Click Trading" desc="Execute complex trades instantly with a single click from the chart." />
                <FeatureItem title="Real-Time Quotes" desc="Stream live, tick-by-tick price data for all supported instruments." />
                <FeatureItem title="Account Management" desc="Deposit, withdraw, and manage your entire portfolio profile directly." />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[60px] rounded-full transition-all group-hover:bg-[#D4AF37]/20" />
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
                alt="Web Trader Interface" 
                className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-[#D4AF37]/20 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Why Choose Web Trading?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <BenefitItem icon={<Globe />} title="Trade Anywhere" desc="Access your account from any secure computer with an internet connection." />
            <BenefitItem icon={<Zap />} title="No Updates" desc="Always use the latest software version automatically, without manual downloads." />
            <BenefitItem icon={<Layout />} title="Familiar Interface" desc="An intuitive, clean design that's incredibly easy to master for all traders." />
            <BenefitItem icon={<Smartphone />} title="Mobile Friendly" desc="A highly responsive design that works flawlessly on tablets and mobile browsers." />
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0A0806] border-y border-[#D4AF37]/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted between your browser and our servers is protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade safely with a broker strictly regulated by multiple top-tier financial authorities." />
            <SecurityCard icon={<Star />} title="Secure Login" desc="Two-factor authentication (2FA) support for significantly enhanced account security." />
          </div>
        </div>
      </motion.section>

      {/* 6. INTEGRATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-[#0F0C08]"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Integrated with MT4 & MT5</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12 font-light text-lg">
            Our web trader is fully backward compatible with your existing MT4 and MT5 accounts, allowing for a seamless transition between desktop and web platforms.
          </p>
          <div className="flex justify-center gap-12 opacity-50">
            <div className="font-black text-2xl md:text-3xl tracking-widest text-[#D4AF37]">MetaTrader 4 Web</div>
            <div className="font-black text-2xl md:text-3xl tracking-widest text-[#FDE08B]">MetaTrader 5 Web</div>
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
            <FaqItem question="Do I need to install anything?" answer="No, our advanced web trader runs directly in your browser securely without requiring any software installation or plugins." />
            <FaqItem question="Is the web trader as fast as the desktop version?" answer="Yes, our web platform uses modern WebSockets technology and is highly optimized for high-speed execution and low latency." />
            <FaqItem question="Can I use my existing account?" answer="Absolutely. You can use your exact existing Axiom MT4 or MT5 credentials to login to the web platform immediately." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#0A0806]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Start Trading in Seconds</h2>
          <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Launch the Axiom Web Trader directly from your browser and experience the future of accessibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold rounded-xl text-base hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-[#FDE08B]/50 flex items-center justify-center gap-2">
              Launch Web Trader Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const BrowserCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
  return (
    <motion.div
      className="absolute z-10"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#1A140A]/90 backdrop-blur-md p-6 shadow-2xl"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.2)' 
        }}
      >
        <div className="p-3 bg-gradient-to-br from-[#D4AF37]/10 to-[#AA7C11]/5 rounded-xl border border-[#D4AF37]/20">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl border border-[#D4AF37]/10 backdrop-blur-md flex flex-col justify-center text-center"
       style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(212, 175, 55, 0.02) 100%)', boxShadow: 'inset -8px 10px 0px 0px rgba(212, 175, 55, 0.02)' }}>
    <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-[#D4AF37]' : 'text-white'}`}>{value}</div>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
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

const BenefitItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-6 rounded-2xl hover:bg-[#1A140A]/40 border border-transparent hover:border-[#D4AF37]/10 transition-all text-center group">
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 flex items-center justify-center text-[#FDE08B] mb-5 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h4 className="font-bold mb-3 text-white">{title}</h4>
    <p className="text-white/50 text-xs font-light leading-relaxed">{desc}</p>
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
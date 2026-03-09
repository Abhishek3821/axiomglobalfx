import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Shield, Zap, Globe, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

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

export const IndicesPage = () => {
  return (
    // Clean, deep slate background with gold selection highlight
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Gold Accents & Medium Text) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Subtle Gold Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Index Tiles (Dark Glass) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <Card3D top="20%" left="15%" rotate={-15} scale={0.7} delay={0} img="us" label="US500" />
            <Card3D bottom="18%" left="10%" rotate={-10} scale={1.1} delay={1.2} img="gb" label="UK100" />
            <Card3D top="12%" right="20%" rotate={15} scale={0.5} delay={0.5} img="de" label="GER40" />
            <Card3D bottom="25%" right="12%" rotate={20} scale={0.9} delay={1.5} img="jp" label="JPN225" />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(234,179,8,0.15)]"
          >
            <BarChart3 size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Global Stock Indices</span>
          </motion.div>

          {/* Medium Sized Text with Gold Accent */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            Trade Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-2">
              Stock Indices
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Gain exposure to entire stock markets with a single trade. Trade the S&P 500, Dow Jones, Nasdaq, and more with zero commissions.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:bg-yellow-400 flex items-center gap-2"
            >
              Start Trading Indices <ArrowRight size={16} />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-bold text-sm backdrop-blur-sm transition-all"
            >
              View All Markets
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="S&P 500 Spread" value="0.5 Pips" highlight />
            <StatCard label="Execution" value="0.01ms" />
            <StatCard label="Commission" value="$0.00" />
            <StatCard label="Assets" value="20+ Indices" />
          </motion.div>
        </div>
      </section>

      {/* 2. MARKET OVERVIEW SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-16 relative bg-slate-900/30"
      >
        <div className="max-w-6xl mx-auto px-4 mt-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-500/10 blur-[60px] rounded-full transition-all group-hover:bg-yellow-500/20" />
              <img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop" 
                alt="Stock Indices Dashboard" 
                className="rounded-2xl shadow-2xl relative z-10 border border-white/10 object-cover h-[400px] w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Diversify Your Portfolio</h2>
              <p className="text-slate-400 mb-8 text-base leading-relaxed">
                Stock indices represent the performance of a group of stocks from a specific exchange or sector. Trading indices allows you to speculate on the overall health of an economy or industry without picking individual stocks.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Global Access" desc="Trade indices from the US, Europe, Asia, and beyond." />
                <FeatureItem title="No Commissions" desc="Enjoy zero commission trading on all index CFDs." />
                <FeatureItem title="Go Long or Short" desc="Profit from both rising and falling markets." />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. KEY INDICES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-16 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div variants={fadeUpVariant} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Global Indices</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">Trade the world's most heavily followed stock market indices with tight spreads and deep liquidity.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndexCard title="US 500 (S&P 500)" desc="The benchmark for the US stock market, representing 500 large-cap companies." />
            <IndexCard title="US Tech 100 (Nasdaq)" desc="Focuses on the technology sector, including giants like Apple and Microsoft." />
            <IndexCard title="UK 100 (FTSE 100)" desc="Represents the 100 largest companies listed on the London Stock Exchange." />
            <IndexCard title="Germany 40 (DAX)" desc="Tracks the 40 major German companies trading on the Frankfurt Stock Exchange." />
            <IndexCard title="Japan 225 (Nikkei)" desc="The price-weighted index for the Tokyo Stock Exchange." />
            <IndexCard title="France 40 (CAC 40)" desc="The benchmark for the French stock market." />
          </div>
        </div>
      </motion.section>

      {/* 4. TRADING CONDITIONS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-900/30"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Index Trading Conditions</h2>
          <div className="overflow-x-auto bg-slate-950 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Index</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Symbol</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Min. Spread</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Max Leverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <IndexRow name="S&P 500" symbol="US500" spread="0.5 pips" leverage="1:500" />
                <IndexRow name="Nasdaq 100" symbol="USTECH" spread="1.0 pips" leverage="1:500" />
                <IndexRow name="Dow Jones 30" symbol="US30" spread="2.0 pips" leverage="1:500" />
                <IndexRow name="DAX 40" symbol="GER40" spread="1.2 pips" leverage="1:500" />
                <IndexRow name="FTSE 100" symbol="UK100" spread="1.5 pips" leverage="1:500" />
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* 5. BENEFITS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Trade Indices with Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard icon={<Zap />} title="Fast Execution" desc="Lightning-fast order execution with ultra-low latency and no re-quotes." />
            <BenefitCard icon={<Shield />} title="Regulated Broker" desc="Trade with complete peace of mind through a trusted global broker." />
            <BenefitCard icon={<Scale />} title="Flexible Leverage" desc="Maximize your capital efficiency with customizable leverage options." />
          </div>
        </div>
      </motion.section>

      {/* 6. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="What are the trading hours for indices?" answer="Trading hours vary by index and largely depend on the underlying stock exchange's local operating hours." />
            <FaqItem question="Are there any commissions on index trades?" answer="No, we offer zero commission trading on all index CFDs. You only pay the spread." />
            <FaqItem question="Can I trade indices on my mobile phone?" answer="Yes, all our indices are fully available and optimized for trading on our mobile application." />
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent z-0" />
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Ready to Master the Markets?</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Open an account in minutes and start trading the world's most popular indices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-8 py-3.5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              Create Real Account
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold rounded-xl text-base hover:bg-white/5 transition-colors">
              Try Demo Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center text-center">
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
  </div>
);

// Highly Accurate 3D Card utilizing dark glass aesthetics
const Card3D = ({ top, bottom, left, right, rotate, scale, delay, img, label }: any) => {
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
          width: '140px',
          height: '140px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' 
        }}
      >
        <img src={`https://flagcdn.com/w80/${img}.png`} alt="flag" className="w-12 h-12 object-cover rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] mb-3 border border-white/10" />
        <span className="font-extrabold text-white text-sm tracking-widest">{label}</span>
      </div>
    </motion.div>
  );
};

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-3 items-start p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
    <div>
      <h4 className="font-bold text-white text-base mb-1">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const IndexCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all text-left group backdrop-blur-sm shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
      <TrendingUp size={20} className="text-slate-500 group-hover:text-yellow-500 transition-colors" />
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const IndexRow = ({ name, symbol, spread, leverage }: { name: string; symbol: string; spread: string; leverage: string }) => (
  <tr className="hover:bg-white/5 transition-colors group">
    <td className="py-4 px-6 text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">{name}</td>
    <td className="py-4 px-6">
      <span className="text-xs font-mono font-bold text-yellow-500 bg-yellow-500/10 rounded px-2.5 py-1">{symbol}</span>
    </td>
    <td className="py-4 px-6 text-sm text-white/90">{spread}</td>
    <td className="py-4 px-6 text-sm text-slate-400">{leverage}</td>
  </tr>
);

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all group backdrop-blur-sm text-center">
    <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="font-bold text-lg mb-2 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900 hover:border-yellow-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-base font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
  </div>
);
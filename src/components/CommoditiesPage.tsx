import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, TrendingUp, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

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

export const CommoditiesPage = () => {
  return (
    // Clean, deep slate background. Gold used only for selection highlight.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Gold Accents) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Commodity Tiles (Dark Glass with Emojis) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <CommodityCard3D top="15%" left="15%" rotate={-12} scale={0.7} delay={0} icons={['🥇', '🥈']} />
            <CommodityCard3D bottom="15%" left="10%" rotate={-8} scale={1.1} delay={1.2} icons={['🛢️', '⛽']} />
            <CommodityCard3D top="10%" right="20%" rotate={15} scale={0.5} delay={0.5} icons={['☕', '🍫']} />
            <CommodityCard3D top="25%" right="10%" rotate={12} scale={0.8} delay={1.8} icons={['🌾', '🌽']} />
            <CommodityCard3D bottom="25%" right="15%" rotate={15} scale={1} delay={0.8} icons={['💎', '🪙']} />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 max-w-3xl mx-auto px-4 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-8 backdrop-blur-md">
              <Layers size={14} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Global Commodities</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight uppercase mb-6 text-white">
              Discover <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic">
                Commodities
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
              Trade energies, precious metals, and soft commodities with deep liquidity, flexible leverage, and zero hidden commissions.
            </p>
            
            {/* Standardized Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-xl bg-yellow-500 text-slate-950 font-bold text-sm hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] flex items-center gap-2"
              >
                Start Trading <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-medium text-sm backdrop-blur-sm transition-all"
              >
                Contract Specs
              </motion.button>
            </div>

            {/* Floating Glass Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto">
              <StatCard label="Gold Spread" value="0.12 pts" highlight />
              <StatCard label="Execution" value="0.01ms" />
              <StatCard label="Max Leverage" value="1:500" />
              <StatCard label="Assets" value="20+ Markets" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MARKET OVERVIEW SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-16 bg-slate-900/30 border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-500/10 blur-[60px] rounded-full transition-all group-hover:bg-yellow-500/20" />
              <img 
                src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop" 
                alt="Coffee Beans Commodities" 
                className="rounded-2xl shadow-2xl relative z-10 border border-white/10 object-cover h-[400px] w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Diversify with Commodities</h2>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Commodities are essential raw materials that fuel the global economy. Trading commodities allows you to speculate on the supply and demand cycles of agricultural products, energies, and metals without taking physical delivery.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Broad Market Access" desc="Trade major energies, precious metals, and soft commodities." />
                <FeatureItem title="No Commissions" desc="Enjoy zero commission trading on all our commodity CFDs." />
                <FeatureItem title="Flexible Leverage" desc="Maximize your trading potential with highly adjustable leverage." />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. POPULAR COMMODITIES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-16 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div variants={fadeUpVariant} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Major Commodities</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Access the most actively traded commodities driving global supply chains.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CommodityCard name="Gold" desc="The ultimate safe-haven asset, highly sensitive to inflation and global events." />
            <CommodityCard name="Crude Oil" desc="The world's primary energy source, driven by global supply and demand dynamics." />
            <CommodityCard name="Coffee" desc="One of the most actively traded agricultural commodities globally." />
            <CommodityCard name="Sugar" desc="A key global commodity known for high liquidity and cyclical volatility." />
            <CommodityCard name="Corn" desc="A vital agricultural product heavily used in food and fuel production." />
            <CommodityCard name="Wheat" desc="The most widely grown cereal crop, essential to global food security." />
          </div>
        </div>
      </motion.section>

      {/* 4. TRADING CONDITIONS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-900/30"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Commodity Trading Conditions</h2>
          <div className="overflow-x-auto bg-slate-950 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Commodity</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Symbol</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Min. Spread</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Max Leverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <CommodityRow name="Gold" symbol="XAUUSD" spread="0.12 pts" leverage="1:500" />
                <CommodityRow name="Crude Oil (WTI)" symbol="USOIL" spread="0.03 pts" leverage="1:200" />
                <CommodityRow name="Cocoa" symbol="COCOA" spread="12.0" leverage="1:50" />
                <CommodityRow name="Coffee" symbol="COFFEE" spread="45.0" leverage="1:50" />
                <CommodityRow name="Corn" symbol="CORN" spread="1.2" leverage="1:50" />
                <CommodityRow name="Wheat" symbol="WHEAT" spread="1.5" leverage="1:50" />
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
          <h2 className="text-3xl font-bold mb-10">Why Trade Commodities With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard icon={<Zap />} title="Fast Execution" desc="Lightning-fast order execution with ultra-low latency and no re-quotes." />
            <BenefitCard icon={<Shield />} title="Regulated Broker" desc="Trade with complete peace of mind through a trusted global broker." />
            <BenefitCard icon={<Scale />} title="Flexible Leverage" desc="Take control of your capital efficiency with customizable leverage." />
          </div>
        </div>
      </motion.section>

      {/* 6. PLATFORM SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Advanced Charting Tools</h2>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Analyze commodity price movements with professional charting tools, custom overlays, and over 50 technical indicators built directly into our platform.
            </p>
            <button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-sm">
              Explore Platforms
            </button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 relative group">
            <div className="absolute -inset-4 bg-yellow-500/10 blur-[60px] rounded-full transition-all group-hover:bg-yellow-500/20" />
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
              alt="Trading Platform Charts" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-2xl relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="What are the trading hours for commodities?" answer="Trading hours vary significantly by commodity, as they are tied to their respective global physical exchanges (like the CBOT or ICE)." />
            <FaqItem question="Are there any commissions on commodity trades?" answer="No, we offer zero commission trading on all commodity CFDs. Your only cost of execution is the spread." />
            <FaqItem question="Can I trade commodities on my mobile phone?" answer="Absolutely. Our entire suite of agricultural and soft commodities is fully optimized for our mobile trading application." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-20 relative overflow-hidden border-t border-white/5 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent z-0" />
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Start Trading Commodities</h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Open an account in minutes and get access to the world's major commodity markets.
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

const CommodityCard3D = ({ top, bottom, left, right, rotate, scale, delay, icons }: any) => {
  return (
    <motion.div
      className="absolute"
      style={{ top, bottom, left, right }}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }}
    >
      <div 
        className="bg-slate-900/80 backdrop-blur-md rounded-[2rem] flex items-center justify-center border border-white/10"
        style={{ 
          transform: `rotate(${rotate}deg) scale(${scale})`,
          width: '120px',
          height: '120px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' 
        }}
      >
        <div className="flex -space-x-3 drop-shadow-2xl">
          <span className="text-4xl bg-slate-800 rounded-full border border-yellow-500/20 p-2 z-10 shadow-[0_0_15px_rgba(234,179,8,0.1)]">{icons[0]}</span>
          <span className="text-4xl bg-slate-800 rounded-full border border-white/10 p-2 z-0 translate-y-3 shadow-xl">{icons[1]}</span>
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center">
    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">{label}</div>
    <div className={`text-lg font-bold ${highlight ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
  </div>
);

const FeatureItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-3 items-start p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
    <div>
      <h4 className="font-bold text-white text-base mb-1">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const CommodityCard = ({ name, desc }: { name: string; desc: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all text-left group backdrop-blur-sm">
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">{name}</h4>
      <TrendingUp size={20} className="text-slate-600 group-hover:text-yellow-500 transition-colors" />
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const CommodityRow = ({ name, symbol, spread, leverage }: { name: string; symbol: string; spread: string; leverage: string }) => (
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
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all group backdrop-blur-sm">
    <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="font-bold text-lg mb-2 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-all cursor-pointer">
    <h4 className="text-base font-bold mb-2 text-white">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
  </div>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, Shield, Zap, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

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

export const CryptoPage = () => {
  return (
    // Clean, deep slate background. Gold used only for selection highlight.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Gold Accents) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Crypto Tiles (Dark Glass with Gold text) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <CryptoCard3D top="20%" left="15%" rotate={-15} scale={0.7} delay={0} symbol="₿" label="BTC" />
            <CryptoCard3D bottom="18%" left="10%" rotate={-10} scale={1.1} delay={1.2} symbol="Ξ" label="ETH" />
            <CryptoCard3D top="12%" right="20%" rotate={15} scale={0.5} delay={0.5} symbol="◎" label="SOL" />
            <CryptoCard3D bottom="25%" right="12%" rotate={20} scale={0.9} delay={1.5} symbol="✕" label="XRP" />
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
            <Coins size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Digital Asset Trading 24/7</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            Trade <br />
            {/* The primary gold highlight on the page */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-2">
              Crypto
            </span> <br />
            <span className="text-2xl md:text-4xl tracking-widest mt-2 block">With Precision</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Trade Bitcoin, Ethereum, and other major cryptocurrencies with deep liquidity, tight spreads, and zero hidden fees.
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
              Start Trading <ArrowRight size={16} />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-bold text-sm backdrop-blur-sm transition-all"
            >
              Live Rates
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="BTC/USD Spread" value="$22.50" highlight />
            <StatCard label="Execution" value="0.01ms" />
            <StatCard label="Market Access" value="24/7" />
            <StatCard label="Assets" value="30+ Coins" />
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Future of Finance</h2>
              <p className="text-slate-400 mb-8 text-base leading-relaxed">
                Cryptocurrencies are digital assets that use cryptography for security. Trade the most popular digital currencies as CFDs without the vulnerability of managing a digital wallet.
              </p>
              <div className="space-y-4">
                <FeatureItem title="24/7 Trading" desc="The crypto market never sleeps. Trade whenever you want, even on weekends." />
                <FeatureItem title="No Wallet Needed" desc="Trade crypto CFDs securely without the hassle of managing private keys." />
                <FeatureItem title="Go Short or Long" desc="Capitalize on market volatility by profiting from both rising and falling prices." />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-500/10 blur-[60px] rounded-full transition-all group-hover:bg-yellow-500/20" />
              <img 
                src="https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop" 
                alt="Crypto Trading Terminal" 
                className="rounded-2xl shadow-2xl relative z-10 border border-white/10 object-cover h-[400px] w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. POPULAR CRYPTOS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-16 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div variants={fadeUpVariant} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Major Cryptocurrencies</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">Access the most capitalized and liquid digital assets in the global crypto market.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CryptoCard symbol="BTC" name="Bitcoin" desc="The original and largest cryptocurrency by market capitalization." />
            <CryptoCard symbol="ETH" name="Ethereum" desc="The leading platform for smart contracts and decentralized apps." />
            <CryptoCard symbol="SOL" name="Solana" desc="A high-performance blockchain built for scalable decentralized applications." />
            <CryptoCard symbol="XRP" name="Ripple" desc="Designed specifically for fast and low-cost international payments." />
          </div>
        </div>
      </motion.section>

      {/* 4. TRADING CONDITIONS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-900/30"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Crypto Trading Conditions</h2>
          <div className="overflow-x-auto bg-slate-950 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Asset</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Symbol</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Min. Spread</th>
                  <th className="py-5 px-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">Max Leverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <CryptoRow name="Bitcoin" symbol="BTCUSD" spread="$22.50" leverage="1:500" />
                <CryptoRow name="Ethereum" symbol="ETHUSD" spread="$2.86" leverage="1:500" />
                <CryptoRow name="Solana" symbol="SOLUSD" spread="$0.82" leverage="1:50" />
                <CryptoRow name="Ripple" symbol="XRPUSD" spread="$0.0024" leverage="1:250" />
                <CryptoRow name="Dogecoin" symbol="DOGEUSD" spread="$0.0011" leverage="1:50" />
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Safe & Secure Trading</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SecurityCard icon={<Shield />} title="Regulated Broker" desc="Trade crypto with complete peace of mind through a trusted global broker." />
            <SecurityCard icon={<Zap />} title="Instant Execution" desc="Lightning-fast order execution with ultra-low latency and no re-quotes." />
            <SecurityCard icon={<Scale />} title="Negative Balance Protection" desc="Strict risk management protocols ensure your balance never drops below zero." />
          </div>
        </div>
      </motion.section>

      {/* 6. EDUCATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-yellow-500/10 blur-[60px] rounded-full transition-all group-hover:bg-yellow-500/20" />
            <img 
              src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop" 
              alt="Crypto Education" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-2xl relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn Crypto Trading</h2>
            <p className="text-slate-400 mb-8 text-base leading-relaxed">
              New to the world of digital assets? Our educational hub breaks down the complexities of blockchain, altcoins, and technical analysis into easy-to-understand modules.
            </p>
            <button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-sm">
              Explore Academy
            </button>
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-16 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="Can I trade crypto on weekends?" answer="Yes, unlike traditional markets, the cryptocurrency market is open 24/7, 365 days a year." />
            <FaqItem question="Do I need a crypto wallet?" answer="No. Because you are trading CFDs (Contracts for Difference), you are speculating on the price movement rather than owning the underlying asset, removing the need for a digital wallet." />
            <FaqItem question="What is the minimum deposit for crypto?" answer="You can begin trading our crypto CFD offerings with a minimum deposit of just $5." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent z-0" />
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Join the Crypto Revolution</h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Open an account in minutes and start trading the world's most popular digital assets.
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

// Custom 3D Card - Dark glass with a glowing gold symbol
const CryptoCard3D = ({ top, bottom, left, right, rotate, scale, delay, symbol, label }: any) => {
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
        <div className="w-14 h-14 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.2)] mb-2">
          <span className="text-3xl font-black text-yellow-400">{symbol}</span>
        </div>
        <span className="font-bold text-white text-sm tracking-widest">{label}</span>
      </div>
    </motion.div>
  );
};

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center text-center">
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
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

const CryptoCard = ({ symbol, name, desc }: { symbol: string; name: string; desc: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all text-left group backdrop-blur-sm shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <div className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded border border-yellow-500/20">{symbol}</div>
      <TrendingUp size={20} className="text-slate-600 group-hover:text-yellow-500 transition-colors" />
    </div>
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">{name}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const CryptoRow = ({ name, symbol, spread, leverage }: { name: string; symbol: string; spread: string; leverage: string }) => (
  <tr className="hover:bg-white/5 transition-colors group">
    <td className="py-4 px-6 text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">{name}</td>
    <td className="py-4 px-6">
      <span className="text-xs font-mono font-bold text-yellow-500 bg-yellow-500/10 rounded px-2.5 py-1">{symbol}</span>
    </td>
    <td className="py-4 px-6 text-sm text-white/90">{spread}</td>
    <td className="py-4 px-6 text-sm text-slate-400">{leverage}</td>
  </tr>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
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
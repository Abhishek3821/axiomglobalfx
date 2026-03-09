import React, { useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, BarChart3, Clock, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';

// --- TradingView Widget Component ---
const TradingViewWidget = memo(() => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = '<div class="tradingview-widget-container__widget h-full w-full"></div>';
      
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "lineWidth": 2,
          "lineType": 0,
          "chartType": "area",
          "fontColor": "rgb(106, 109, 120)",
          "gridLineColor": "rgba(242, 242, 242, 0.06)",
          "volumeUpColor": "rgba(212, 175, 55, 0.5)",
          "volumeDownColor": "rgba(247, 82, 95, 0.5)",
          "backgroundColor": "rgba(15, 15, 15, 0)",
          "widgetFontColor": "#DBDBDB",
          "upColor": "#eab308",
          "downColor": "#f7525f",
          "borderUpColor": "#eab308",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#eab308",
          "wickDownColor": "#f7525f",
          "colorTheme": "dark",
          "isTransparent": true,
          "locale": "en",
          "chartOnly": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "symbols": [
            [
              "EUR/USD",
              "FX:EURUSD|1D"
            ],
            [
              "GBP/USD",
              "FX:GBPUSD|1D"
            ],
            [
              "USD/JPY",
              "FX:USDJPY|1D"
            ]
          ],
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "fontSize": "10",
          "headerFontSize": "medium",
          "autosize": true,
          "width": "100%",
          "height": "100%",
          "noTimeScale": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-full w-full" ref={container}>
    </div>
  );
});

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

// --- Main Page Component ---
export const ForexPage = () => {
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

        {/* 3D Floating Currency Tiles (Dark Glass) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <Card3D top="20%" left="15%" rotate={-15} scale={0.7} delay={0} img1="au" img2="ca" />
            <Card3D bottom="18%" left="10%" rotate={-10} scale={1.1} delay={1.2} img1="eu" img2="us" />
            <Card3D top="12%" right="20%" rotate={15} scale={0.5} delay={0.5} img1="eu" img2="gb" />
            <Card3D bottom="25%" right="12%" rotate={20} scale={0.9} delay={1.5} img1="ca" img2="ch" />
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
            <Globe size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Global Forex Market</span>
          </motion.div>

          {/* Medium Sized Text with Gold Gradient */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            Discover <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-2">
              Forex Trading
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Buy and sell the most liquid currencies, like EURUSD, 24/5 with market-leading execution and conditions.
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
              Start Trading Forex <ArrowRight size={16} />
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-bold text-sm backdrop-blur-sm transition-all"
            >
              View Spreads
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="EUR/USD Spread" value="0.0 Pips" highlight />
            <StatCard label="Execution" value="0.01ms" />
            <StatCard label="Currency Pairs" value="60+" />
            <StatCard label="Leverage" value="1:1000" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The World's Largest Market</h2>
              <p className="text-slate-400 mb-6 text-base leading-relaxed">
                With a daily turnover of over $6 trillion, the FX market never sleeps. Capitalize on global economic events with our deep liquidity pools.
              </p>
              <div className="space-y-4">
                <FeatureItem title="Deep Liquidity" desc="Access Tier-1 bank liquidity for minimal slippage." />
                <FeatureItem title="Raw Spreads" desc="Trade with institutional grade pricing from 0.0 pips." />
                <FeatureItem title="No Restrictions" desc="Scalping, hedging, and EAs are fully permitted." />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-500/10 blur-[60px] rounded-full transition-all group-hover:bg-yellow-500/20" />
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000" 
                alt="Forex Trading" 
                className="rounded-2xl shadow-2xl relative z-10 border border-white/10 object-cover h-[400px] w-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. TRADING CONDITIONS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-16 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div variants={fadeUpVariant} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Unbeatable Conditions</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">Built for traders who demand the best environment to execute their edge.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            <ConditionCard icon={<Zap />} title="Lightning Execution" desc="Fiber-optic cross-connects to Equinix servers." />
            <ConditionCard icon={<Shield />} title="Fund Security" desc="Client funds are segregated in Tier-1 banks." />
            <ConditionCard icon={<Scale />} title="Fair Trading" desc="True NDD execution with no dealing desk intervention." />
            <ConditionCard icon={<Clock />} title="24/7 Support" desc="Multilingual support via live chat, email, and phone." />
          </div>
        </div>
      </motion.section>

      {/* 4. LIVE CHART WIDGET SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} 
        className="py-16 bg-slate-900/30"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Live Market Overview</h2>
            <p className="text-slate-400 text-base">Track major pairs in real-time before you make your move.</p>
          </div>
          
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-slate-950 shadow-xl relative z-10 p-2 backdrop-blur-sm">
            <TradingViewWidget />
          </div>
        </div>
      </motion.section>

      {/* 5. PLATFORMS SECTION */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-yellow-500/10 blur-[50px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=800" 
              alt="Trading Platforms" 
              className="rounded-2xl shadow-xl border border-white/10 relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trade Any Time, Anywhere</h2>
            <p className="text-slate-400 mb-8 text-base leading-relaxed">
              Access the markets via industry-leading platforms. Analyze charts, place orders, and manage your portfolio seamlessly across all your devices.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <PlatformBox title="MetaTrader 4" desc="The Industry Standard" />
              <PlatformBox title="MetaTrader 5" desc="Advanced Analytics" />
              <PlatformBox title="cTrader" desc="Built for Scalpers" />
              <PlatformBox title="Axiom App" desc="Trade on the Go" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. EDUCATION SECTION */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="py-16 bg-slate-900/30 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn to Trade Forex</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12 text-base">
            New to Forex? Our educational resources will help you understand the basics and develop your own trading strategy.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <EduCard title="Forex Basics" desc="Understand how currency pairs work and what moves the global market." />
            <EduCard title="Technical Analysis" desc="Learn how to read charts and use indicators to predict price movements." />
            <EduCard title="Risk Management" desc="Discover how to protect your capital and smartly manage your exposure." />
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ SECTION */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="What are the Forex trading hours?" answer="Forex is open 24 hours a day, 5 days a week, from Sunday evening to Friday evening (EST)." />
            <FaqItem question="What is the minimum deposit for Forex?" answer="You can start trading Forex with as little as $5 on our Micro and Standard accounts." />
            <FaqItem question="Do you offer swap-free accounts?" answer="Yes, we offer Islamic (swap-free) accounts for clients who follow Sharia law upon request." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent z-0" />
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Ready to Master the Markets?</h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Join thousands of traders who have already chosen Axiom as their trusted broker. Open your account in under 3 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-8 py-3.5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              Open Live Account
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

// --- Subcomponents ---

const StatCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center text-center">
    <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
    <div className={`text-xl font-bold ${highlight ? 'text-yellow-400' : 'text-white'}`}>{value}</div>
  </div>
);

// Highly Accurate 3D Card utilizing dark glass aesthetics
const Card3D = ({ top, bottom, left, right, rotate, scale, delay, img1, img2 }: any) => {
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
        <div className="relative w-full h-full">
          <img src={`https://flagcdn.com/w80/${img1}.png`} alt="flag" className="w-12 h-12 object-cover rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] border-2 border-white/10 absolute top-5 left-5" />
          <img src={`https://flagcdn.com/w80/${img2}.png`} alt="flag" className="w-12 h-12 object-cover rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] border-2 border-yellow-500/30 absolute bottom-5 right-5 z-10" />
        </div>
      </div>
    </motion.div>
  );
};

const FeatureItem = ({ title, desc }: { title: string, desc: string }) => (
  <div className="flex gap-3 items-start p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
    <CheckCircle2 className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
    <div>
      <h4 className="font-bold text-white text-base mb-1">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ConditionCard = ({ icon, title, desc }: { icon: React.ReactElement, title: string, desc: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 transition-all group backdrop-blur-sm text-center shadow-lg">
    <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 28 } as React.SVGProps<SVGSVGElement>)}
    </div>
    <h4 className="font-bold text-lg mb-2 text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const PlatformBox = ({ title, desc }: { title: string, desc: string }) => (
  <div className="p-5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 hover:bg-slate-900 transition-all cursor-pointer group text-left backdrop-blur-sm shadow-lg">
    <h4 className="font-bold text-white text-base mb-1 group-hover:text-yellow-400 transition-colors">{title}</h4>
    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const EduCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 transition-all backdrop-blur-sm group cursor-pointer shadow-lg">
    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-5 group-hover:scale-110 transition-transform">
      <BarChart3 size={24} />
    </div>
    <h4 className="text-lg font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm mb-5 leading-relaxed">{desc}</p>
    <button className="text-yellow-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-yellow-300">
      Read More <ArrowRight size={16} />
    </button>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900 hover:border-yellow-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-base font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
  </div>
);
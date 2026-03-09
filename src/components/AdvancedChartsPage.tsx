import React, { useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, ArrowRight, Globe, BarChart3, LineChart, CandlestickChart, Activity, Smartphone } from 'lucide-react';

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
          "volumeUpColor": "rgba(59, 130, 246, 0.5)",
          "volumeDownColor": "rgba(247, 82, 95, 0.5)",
          "backgroundColor": "rgba(15, 15, 15, 0)",
          "widgetFontColor": "#DBDBDB",
          "upColor": "#3b82f6",
          "downColor": "#f7525f",
          "borderUpColor": "#3b82f6",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#3b82f6",
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

export const AdvancedChartsPage = () => {
  return (
    // Clean, deep slate background. Selection is blueish to match the theme.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-blue-500 selection:text-white">
      
      {/* 1. HERO SECTION (Blueish Theme with Subtle Gold Accents) */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Background Gradients: Predominantly Blue, slight hint of gold */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-[90%] max-w-6xl object-contain filter invert opacity-20"
          />
        </div>

        {/* 3D Floating Chart Tiles (Dark Glass with Blue Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <ChartCard3D top="20%" left="15%" rotate={-15} scale={0.8} delay={0} icon={<BarChart3 size={40} className="text-blue-400 drop-shadow-md" />} />
            <ChartCard3D bottom="25%" left="10%" rotate={-10} scale={1} delay={1.2} icon={<LineChart size={48} className="text-blue-400 drop-shadow-md" />} />
            <ChartCard3D top="15%" right="20%" rotate={15} scale={0.7} delay={0.5} icon={<CandlestickChart size={36} className="text-blue-400 drop-shadow-md" />} />
            <ChartCard3D bottom="30%" right="12%" rotate={20} scale={0.9} delay={1.5} icon={<Activity size={44} className="text-blue-400 drop-shadow-md" />} />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <BarChart3 size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Professional Analysis Tools</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white uppercase"
          >
            ADVANCED <br />
            {/* A touch of golden elegance in the heading */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
              CHARTING
            </span> SUITE
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Master the markets with our professional-grade charting suite. Real-time data, 100+ technical indicators, and highly customizable layouts.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {/* The primary button is Gold, making it an excellent focal point */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-yellow-500 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:bg-yellow-400 flex items-center justify-center gap-2"
            >
              Launch Web Charts <ArrowRight size={16} />
            </motion.button>
            {/* Secondary button is blueish */}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(59,130,246,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-xl border border-blue-500/30 text-blue-400 font-bold text-sm backdrop-blur-sm transition-all"
            >
              Download Desktop App
            </motion.button>
          </div>

          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="Indicators" value="100+ Tools" highlight />
            <StatCard label="Data Feed" value="Real-Time" />
            <StatCard label="Layouts" value="Customizable" />
            <StatCard label="Execution" value="One-Click" />
          </motion.div>
        </div>
      </section>

      {/* 2. KEY FEATURES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Zap />} title="Real-Time Execution" desc="Trade directly from the charts with one-click trading and instant execution." />
            <FeatureCard icon={<LineChart />} title="100+ Indicators" desc="Access a vast library of technical indicators and drawing tools for deep analysis." />
            <FeatureCard icon={<Layout />} title="Custom Layouts" desc="Save multiple chart layouts and templates to suit your specific trading style." />
          </div>
        </div>
      </motion.section>

      {/* 3. CHART TYPES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Visualize the Markets Your Way</h2>
              <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
                Whether you're a scalper, day trader, or long-term investor, our charts provide the visual clarity you need to make highly informed decisions.
              </p>
              <div className="space-y-4">
                <ChartTypeItem icon={<CandlestickChart />} title="Candlestick Charts" desc="Detailed price action visualization with customizable colors." />
                <ChartTypeItem icon={<LineChart />} title="Line & Area Charts" desc="Clean visualization perfect for identifying long-term trends." />
                <ChartTypeItem icon={<BarChart3 />} title="Heikin-Ashi & Renko" desc="Advanced chart types built for noise reduction and trend identification." />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full transition-all group-hover:bg-blue-500/20" />
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
                alt="Advanced Charts" 
                className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. TECHNICAL ANALYSIS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Powerful Technical Analysis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnalysisTool title="Fibonacci Tools" />
            <AnalysisTool title="Elliot Wave" />
            <AnalysisTool title="Gann Tools" />
            <AnalysisTool title="Harmonic Patterns" />
            <AnalysisTool title="Trend Lines" />
            <AnalysisTool title="Support & Resistance" />
            <AnalysisTool title="Volume Profile" />
            <AnalysisTool title="Custom Scripts" />
          </div>
        </div>
      </motion.section>

      {/* 5. MULTI-DEVICE SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1 relative group">
            <div className="absolute inset-0 bg-blue-500/5 blur-[60px] rounded-full transition-all group-hover:bg-blue-500/15" />
            <img 
              src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop" 
              alt="Mobile Charts" 
              className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 border border-white/10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Analyze Anywhere, Anytime</h2>
            <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
              Our advanced charting suite is fully synchronized across all your devices. Start your deep analysis on your desktop setup and finish your trade on your mobile phone.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3.5 bg-slate-900/60 border border-white/10 text-white rounded-xl hover:border-blue-500/50 hover:bg-slate-900 transition-all backdrop-blur-sm group">
                <Smartphone size={20} className="text-blue-400 group-hover:text-blue-300" />
                <span className="font-bold text-sm">Mobile App</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3.5 bg-slate-900/60 border border-white/10 text-white rounded-xl hover:border-blue-500/50 hover:bg-slate-900 transition-all backdrop-blur-sm group">
                <Globe size={20} className="text-blue-400 group-hover:text-blue-300" />
                <span className="font-bold text-sm">Web Platform</span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. INTEGRATION SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Seamless Integration</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 font-light text-lg">
            Our charts are seamlessly integrated with our core trading engine, allowing for ultra-low latency execution directly from the visual interface.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50">
            <div className="font-bold text-2xl tracking-widest text-white">MT4</div>
            <div className="font-bold text-2xl tracking-widest text-white">MT5</div>
            <div className="font-bold text-2xl tracking-tight text-blue-400">TradingView</div>
            <div className="font-bold text-2xl tracking-tighter text-white">cTrader</div>
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="Are the charts real-time?" answer="Yes, all our charts provide real-time, tick-by-tick price data directly from our tier-1 liquidity providers." />
            <FaqItem question="Can I save my chart analysis?" answer="Absolutely. You can seamlessly save multiple layouts, templates, and complex drawing sets to your account profile." />
            <FaqItem question="Is there a cost for advanced charts?" answer="No, our complete advanced charting suite is completely free for all verified Axiom account holders." />
          </div>
        </div>
      </motion.section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden border-t border-blue-500/20 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Master the Markets Today</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Get exclusive access to professional charting tools and start trading like an institution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-base hover:scale-105 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Open Account & Start Charting <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const ChartCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
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
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' 
        }}
      >
        {icon}
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

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all text-center group shadow-lg backdrop-blur-sm">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const ChartTypeItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/40 border border-transparent hover:border-blue-500/30 hover:bg-slate-900/80 transition-all cursor-pointer group shadow-lg backdrop-blur-sm">
    <div className="text-blue-500 group-hover:text-blue-400 transition-colors mt-1">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <div>
      <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors mb-1">{title}</h4>
      <p className="text-slate-400 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const AnalysisTool = ({ title }: { title: string }) => (
  <div className="p-5 rounded-xl bg-slate-900/40 border border-white/5 text-center font-bold text-sm text-slate-300 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all cursor-pointer shadow-lg backdrop-blur-sm flex items-center justify-center min-h-[80px]">
    {title}
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/60 hover:border-blue-500/30 transition-colors cursor-pointer group shadow-lg">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed font-light">{answer}</p>
  </div>
);
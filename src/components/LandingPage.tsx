import React, { useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Gift, 
  Trophy, 
  Users, 
  MousePointer2, 
  Percent, 
  ShieldCheck, 
  Zap, 
  Award,
  Coffee,
  Apple,
  Coins,
  TrendingUp
} from 'lucide-react';

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
      // Updated theme colors to match the "Golden" aesthetic
      script.innerHTML = `
        {
          "lineWidth": 2,
          "lineType": 0,
          "chartType": "area",
          "fontColor": "rgb(156, 163, 175)",
          "gridLineColor": "rgba(255, 255, 255, 0.05)",
          "volumeUpColor": "rgba(234, 179, 8, 0.4)",
          "volumeDownColor": "rgba(247, 82, 95, 0.4)",
          "backgroundColor": "rgba(11, 14, 20, 0)",
          "widgetFontColor": "#DBDBDB",
          "upColor": "#EAB308",
          "downColor": "#f7525f",
          "borderUpColor": "#EAB308",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#EAB308",
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
              "Apple",
              "NASDAQ:AAPL|1D"
            ],
            [
              "Google",
              "NASDAQ:GOOGL|1D"
            ],
            [
              "Microsoft",
              "NASDAQ:MSFT|1D"
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const LandingPage = () => {
  return (
    <div className="bg-[#0B0E14] text-white min-h-screen font-sans selection:bg-yellow-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* 1. HERO SECTION (Golden Theme & Highly Responsive) */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[#0B0E14]">
        
        {/* Abstract Golden Chart Lines Background */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-60">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          
          {/* Glowing Golden/Amber Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-yellow-600/10 rounded-full blur-[100px] md:blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-amber-600/10 rounded-full blur-[120px] md:blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] bg-yellow-500/5 rounded-full blur-[100px] sm:blur-[150px]" />

          {/* Simulated SVG Chart Lines (Golden) */}
          <svg className="absolute w-[200%] sm:w-[150%] md:w-[120%] min-w-[800px] md:min-w-[1000px] h-[50%] md:h-[60%] top-[30%] md:top-1/4" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 350 C 200 300, 300 150, 500 200 C 700 250, 800 50, 1000 100 C 1100 120, 1200 0, 1200 0" stroke="url(#paint0_linear)" strokeWidth="2" className="opacity-30" />
            <path d="M0 400 C 250 350, 400 250, 600 280 C 800 310, 900 150, 1200 50" stroke="url(#paint1_linear)" strokeWidth="3" className="opacity-80 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
            <path d="M0 380 C 300 380, 450 100, 700 150 C 950 200, 1050 80, 1200 20" stroke="url(#paint2_linear)" strokeWidth="2" className="opacity-40" />
            
            {/* Data Points */}
            <circle cx="600" cy="280" r="4" fill="#FBBF24" className="drop-shadow-[0_0_10px_#FBBF24]" />
            <text x="580" y="265" fill="#6B7280" fontSize="10" fontFamily="monospace">0.70358</text>
            
            <circle cx="1000" cy="100" r="4" fill="#FDE047" className="drop-shadow-[0_0_10px_#FDE047]" />
            <text x="980" y="85" fill="#6B7280" fontSize="10" fontFamily="monospace">0.78349</text>
            
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#92400E" />
                <stop offset="1" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D97706" />
                <stop offset="1" stopColor="#FDE047" />
              </linearGradient>
              <linearGradient id="paint2_linear" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#B45309" />
                <stop offset="1" stopColor="#FBBF24" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-4 sm:mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="flex flex-col items-center w-full">
            
            <p className="text-slate-400 text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6">
              Trusted by over <span className="text-white font-bold">15 Million Traders</span>
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1] md:leading-[1.05]">
              The Most Awarded Broker <br className="hidden md:block" />
              for a Reason
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg md:text-xl xl:text-2xl mb-8 sm:mb-10 font-light max-w-2xl px-4">
              Unlock the lowest gold spreads in the market
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-bold text-base md:text-lg transition-all shadow-[0_4px_25px_rgba(234,179,8,0.3)] hover:shadow-[0_4px_35px_rgba(234,179,8,0.5)]"
            >
              Trade with Ultra Low spreads
            </motion.button>
            
         

          </motion.div>
        </div>

        {/* Bottom Asset Ticker */}
        <div className="relative z-10 w-full mt-auto pt-16 sm:pt-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="flex flex-col items-center w-full">
            <p className="text-yellow-500/80 text-xs sm:text-sm font-bold mb-4 sm:mb-6 uppercase tracking-widest">Easy Access to 1,400+ Global Assets</p>
            
            {/* Scrollable Container for Mobile, Centered on Desktop */}
            <div className="w-full max-w-[100vw] overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8 flex justify-start xl:justify-center">
              <div className="flex gap-3 sm:gap-4 min-w-max">
                <AssetCard 
                  icons={<div className="relative w-8 h-8 sm:w-10 sm:h-10"><img src="https://flagcdn.com/w40/eu.png" alt="EU" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-slate-800 absolute top-0 left-0 z-10"/><img src="https://flagcdn.com/w40/us.png" alt="US" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-slate-800 absolute bottom-0 right-0"/></div>} 
                  title="EURUSD" 
                  desc="Euro vs U.S. Dollar" 
                />
                <AssetCard 
                  icons={<div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"><img src="https://flagcdn.com/w40/us.png" alt="US" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-slate-800"/></div>} 
                  title="US500" 
                  desc="S&P 500 (US500)" 
                />
                <AssetCard 
                  icons={<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500"><Coins size={18} className="sm:w-5 sm:h-5" /></div>} 
                  title="GOLD" 
                  desc="Gold" 
                />
                <AssetCard 
                  icons={<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-700/10 flex items-center justify-center text-amber-600"><Coffee size={18} className="sm:w-5 sm:h-5" /></div>} 
                  title="COFFEE" 
                  desc="US Coffee" 
                />
                <AssetCard 
                  icons={<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center text-white"><Apple size={18} className="sm:w-5 sm:h-5" /></div>} 
                  title="Apple" 
                  desc="Apple (AAPL.OQ)" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LIVE MARKET OVERVIEW (TradingView Widget Section) */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#080B10] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Real-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Markets</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Track the world's most traded assets with our advanced charting integration.
            </p>
          </div>
          
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 bg-[#0B0E14]/80 backdrop-blur-xl shadow-2xl relative z-10 p-1 sm:p-2 md:p-4">
            <TradingViewWidget />
          </div>
        </div>
      </section>

      {/* 3. FAVOURITES SECTION */}
      <section className="py-16 sm:py-20 md:py-32 bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Discover Our Traders' <span className="text-yellow-500">Favourites</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Explore some of our must-have products that keep everyone trading with us time and again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <FavouriteCard 
              bgClass="bg-gradient-to-br from-slate-900 to-black border-white/5"
              imgSrc="https://picsum.photos/seed/trader/800/600"
              title={<>Trade With our <br className="hidden sm:block"/> Best Spreads</>}
              desc="Trade Gold with 1.2 pips spreads and reduce costs on other popular instruments with the Ultra Low account."
              btnText="Start Trading"
              btnColor="text-yellow-400"
            />
            <FavouriteCard 
              bgClass="bg-gradient-to-br from-slate-900/60 to-[#0B0E14] border-yellow-500/10 hover:border-yellow-500/30"
              icon={<Gift className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 text-yellow-500/20 group-hover:text-yellow-500/30 transition-colors" />}
              title="100% Bonus"
              desc="Use our funds to trade more, reduce your risk, and boost your returns. Get a 100% Bonus up to $100."
              btnText="Claim Your Bonus"
              btnColor="text-yellow-400"
            />
            <FavouriteCard 
              bgClass="bg-gradient-to-br from-slate-900/60 to-[#0B0E14] border-yellow-500/10 hover:border-yellow-500/30"
              icon={<Trophy className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 text-yellow-500/20 group-hover:text-yellow-500/30 transition-colors" />}
              title="XM Competitions"
              desc="Trade your way to the top and win your share of 100,000+ in withdrawable cash prizes."
              btnText="Join Now"
              btnColor="text-yellow-400"
            />
            <FavouriteCard 
              bgClass="bg-gradient-to-br from-slate-900/60 to-[#0B0E14] border-yellow-500/10 hover:border-yellow-500/30"
              icon={<Users className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 text-yellow-500/20 group-hover:text-yellow-500/30 transition-colors" />}
              title="XM Copy Trading"
              desc="Join 700,000+ traders who copy winning trading strategies or share your trades and earn commissions."
              btnText="Start Copy Trading"
              btnColor="text-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* 4. PROVEN NUMBERS SECTION */}
      <section className="py-16 sm:py-20 md:py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Results Are Proven in Numbers</h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Nobody does more to provide you with what you need to maximise your trading potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 text-center md:text-left">
            <StatItem value="11.7 Billion" label="trades have been executed on XM Platforms" />
            <StatItem value="Zero" label="rejections or requotes on trades." />
            <StatItem value="92.9%" label="of our withdrawals are automatically approved." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <FeatureCard icon={<MousePointer2 className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />} title="Tight Spreads" desc="Trade with spreads as low as 0.8 pips." />
            <FeatureCard icon={<Percent className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />} title="No hidden costs" desc="Pay no swap fees and zero commission." />
            <FeatureCard icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />} title="Superior Execution" desc="Enjoy fair prices with no requotes or rejections." />
            <FeatureCard icon={<ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />} title="Instant Withdrawals" desc="Get your funds easily and pay no fees." />
          </div>

          <div className="text-center">
            <button className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-bold text-base md:text-lg transition-all shadow-[0_4px_20px_rgba(234,179,8,0.2)] hover:shadow-[0_4px_30px_rgba(234,179,8,0.4)]">
              Start Trading Today
            </button>
          </div>
        </div>
      </section>

      {/* 5. TRUST BANNER */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#0B0E14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px] bg-gradient-to-r from-slate-900 via-[#11151C] to-[#0B0E14] border border-yellow-500/10 p-6 sm:p-10 md:p-20 flex flex-col md:flex-row items-center group">
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-5 md:opacity-10 pointer-events-none flex items-center justify-center md:justify-end overflow-hidden group-hover:scale-105 transition-transform duration-700">
               <ShieldCheck className="w-[150%] h-[150%] text-yellow-500 md:translate-x-1/4" />
            </div>
            <div className="relative z-10 text-center md:text-left w-full md:max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">Your Funds Are Always Safe and Secure</h2>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Trade with a <span className="text-yellow-500 font-bold">multi-regulated broker</span> that has built long-standing partnerships with top global banks to ensure your funds are always secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS PATH SECTION */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Every Trader Can Succeed With Us</h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              We eliminate obstacles that stand in the way of your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-slate-900/50 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-[40px] border border-white/5 flex flex-col justify-between min-h-[300px] sm:min-h-[350px] md:min-h-[450px] relative overflow-hidden group backdrop-blur-sm">
              <div className="absolute right-0 top-0 w-1/2 sm:w-2/3 md:w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                 <img src="https://picsum.photos/seed/newbie/400/600" alt="New Trader" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10 mb-6 sm:mb-8 lg:mb-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6 text-white">New to Trading?</h3>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg w-full lg:max-w-sm leading-relaxed">
                  Take advantage of our promotions and demo account to practice risk-free. Master the markets with insights from our team of expert educators.
                </p>
              </div>
              <button className="flex items-center gap-2 text-yellow-500 font-bold hover:text-yellow-400 transition-colors relative z-10 w-fit text-sm sm:text-base md:text-lg">
                Start With Confidence <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="bg-slate-900 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-[40px] border border-white/5 flex flex-col justify-between min-h-[300px] sm:min-h-[350px] md:min-h-[450px] relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-1/2 sm:w-2/3 md:w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                 <img src="https://picsum.photos/seed/pro/400/600" alt="Pro Trader" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10 mb-6 sm:mb-8 lg:mb-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6 text-white">Experienced Trader?</h3>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg w-full lg:max-w-sm leading-relaxed">
                  Enjoy a premium experience designed for seasoned traders with rewarding benefits including access to the widest selection of advanced trading tools.
                </p>
              </div>
              <button className="flex items-center gap-2 text-yellow-500 font-bold hover:text-yellow-400 transition-colors relative z-10 w-fit text-sm sm:text-base md:text-lg">
                Discover Our Offering <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SUPPORT SECTION */}
      <section className="py-16 sm:py-20 md:py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-6 sm:mb-8 md:mb-12">
             <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
             </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Rely on Award-Winning <br className="hidden sm:block"/> Support</h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2">
            Whenever you need us we're just a few seconds away, 24/7, in extensive language options.
          </p>
          <button className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl bg-white/5 text-white font-bold text-base md:text-lg border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

// --- Subcomponents ---

const AssetCard = ({ icons, title, desc }: { icons: React.ReactNode, title: string, desc: string }) => (
  <div className="snap-center flex items-center gap-3 sm:gap-4 p-3 sm:p-4 pr-6 sm:pr-8 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-yellow-500/30 transition-colors cursor-pointer group">
    {icons}
    <div>
      <h4 className="font-bold text-white text-xs sm:text-sm group-hover:text-yellow-400 transition-colors">{title}</h4>
      <p className="text-slate-400 text-[10px] sm:text-xs whitespace-nowrap">{desc}</p>
    </div>
  </div>
);

const FavouriteCard = ({ bgClass, imgSrc, icon, title, desc, btnText, btnColor }: any) => (
  <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[32px] border group flex flex-col min-h-[250px] sm:min-h-[300px] md:min-h-[350px] ${bgClass}`}>
    {imgSrc ? (
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
         <img src={imgSrc} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
    ) : (
      <div className="absolute right-[-10%] bottom-[-10%] w-2/3 md:w-1/2 h-full opacity-20 md:opacity-30 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-700">
         {icon}
      </div>
    )}
    <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col h-full justify-between flex-grow">
      <div className="mb-6 md:mb-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight text-white">{title}</h3>
        <p className="text-slate-300 text-sm sm:text-base max-w-[280px] leading-relaxed">
          {desc}
        </p>
      </div>
      <button className={`flex items-center gap-2 text-sm sm:text-base font-bold transition-colors w-fit ${btnColor} hover:brightness-125`}>
        {btnText} <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  </div>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col">
    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-tight text-white">{value}</div>
    <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-full md:max-w-[250px] mx-auto md:mx-0">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="bg-slate-900/50 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all group backdrop-blur-sm shadow-lg">
    <div className="mb-4 sm:mb-5 md:mb-6 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-white">{title}</h3>
    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
  </div>
);
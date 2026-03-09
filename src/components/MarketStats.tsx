import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const data = [
  { time: '09:00', price: 1.0850 },
  { time: '10:00', price: 1.0870 },
  { time: '11:00', price: 1.0860 },
  { time: '12:00', price: 1.0890 },
  { time: '13:00', price: 1.0910 },
  { time: '14:00', price: 1.0900 },
  { time: '15:00', price: 1.0924 },
];

export const MarketStats = () => {
  return (
    <section id="markets" className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Market <span className="text-gold-gradient">Overview</span></h2>
            <p className="text-white/50 max-w-md">Real-time pricing for major currency pairs and commodities.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Forex</button>
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Crypto</button>
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Stocks</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass rounded-3xl p-8 border-gold">
            <div className="flex justify-between items-center mb-8">
              <div>
                <div className="text-2xl font-bold">EUR / USD</div>
                <div className="text-sm text-emerald-500 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> +0.42% (Today)
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-mono font-bold">1.0924</div>
                <div className="text-xs text-white/40">Market Open</div>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#141414', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '12px' }}
                    itemStyle={{ color: '#D4AF37' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#D4AF37" 
                    strokeWidth={3} 
                    dot={false}
                    animationDuration={2000}
                  />
                  <XAxis dataKey="time" hide />
                  <YAxis domain={['auto', 'auto']} hide />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <PairCard pair="GBP/USD" price="1.2645" change="+0.15%" up={true} />
            <PairCard pair="USD/JPY" price="149.82" change="-0.22%" up={false} />
            <PairCard pair="XAU/USD" price="2024.50" change="+0.85%" up={true} />
            <PairCard pair="BTC/USD" price="62,450.00" change="+2.40%" up={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

const PairCard = ({ pair, price, change, up }: { pair: string; price: string; change: string; up: boolean }) => (
  <div className="glass p-5 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all group cursor-pointer">
    <div className="flex justify-between items-center">
      <div>
        <div className="font-bold group-hover:text-gold-400 transition-colors">{pair}</div>
        <div className={`text-xs flex items-center gap-1 ${up ? 'text-emerald-500' : 'text-rose-500'}`}>
          {up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {change}
        </div>
      </div>
      <div className="text-right">
        <div className="font-mono font-bold">{price}</div>
        <div className="text-[10px] text-white/30 uppercase">Live</div>
      </div>
    </div>
  </div>
);

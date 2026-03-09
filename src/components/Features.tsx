import { Zap, Shield, Globe, BarChart3, Clock, Headphones } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ultra-Low Latency",
      desc: "Execute trades in milliseconds with our direct fiber-optic connections to major liquidity hubs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tier-1 Security",
      desc: "Your funds are held in segregated accounts with top-tier global banks for maximum protection."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      desc: "Access over 100+ currency pairs, commodities, and indices from a single powerful platform."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      desc: "Leverage institutional-grade charting tools and real-time sentiment analysis."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Trading",
      desc: "The markets never sleep, and neither does our platform. Trade whenever opportunity strikes."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support",
      desc: "Dedicated account managers and 24/5 technical support in multiple languages."
    }
  ];

  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose <span className="text-gold-gradient">Axiom Global FX</span>?</h2>
          <p className="text-white/50 max-w-2xl mx-auto">We provide the technology, liquidity, and support you need to succeed in the world's most liquid market.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-[32px] border border-white/5 hover:border-gold-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Wallet, Download, Upload, Users, Share2 } from 'lucide-react';

export const ReferralsPage = () => {
  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-10 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-gradient/10 border border-brand-gold/30 text-brand-gold mb-8"
          >
            <Users size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Grow Your Network</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Axiom <span className="text-gold-gradient italic">Referrals</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Invite your friends and network to trade with Axiom Global FX and earn rewards for every successful referral.
          </p>
          <button className="px-10 py-5 bg-brand-gold text-brand-dark font-bold rounded-xl hover:bg-yellow-500 transition-all shadow-2xl">
            Get Referral Link
          </button>
        </div>
      </section>

      {/* 2. Key Benefits Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <BenefitCard icon={<Zap />} title="Earn Rewards" desc="Get paid for every friend you refer who starts trading." />
            <BenefitCard icon={<Share2 />} title="Easy Sharing" desc="Share your unique referral link via social media or email." />
            <BenefitCard icon={<Shield />} title="Transparent Tracking" desc="Monitor your referrals and rewards in real-time." />
          </div>
        </div>
      </section>

      {/* 3. How to Refer Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">How to Refer</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <StepItem number="01" title="Get Your Link" desc="Access your unique referral link from your client portal." />
            <StepItem number="02" title="Invite Friends" desc="Share your link with your friends and network." />
            <StepItem number="03" title="Earn Rewards" desc="Get rewarded when your referrals start trading with Axiom." />
          </div>
        </div>
      </section>

      {/* 4. Referral Rewards Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Referral Rewards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <RewardCard title="Cash Bonus" desc="Earn a $50 cash bonus for every friend who deposits and trades." />
            <RewardCard title="Trading Rebates" desc="Earn a percentage of the trading volume of your referrals." />
            <RewardCard title="Exclusive Events" desc="Get invited to exclusive partner events and webinars." />
            <RewardCard title="Personal Support" desc="Access dedicated support for our top referrers." />
          </div>
        </div>
      </section>

      {/* 5. Security & Trust Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted is protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a broker regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All transfers are processed within our secure and audited systems." />
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FaqItem question="Who can I refer?" answer="You can refer anyone who is not already an Axiom Global FX client." />
            <FaqItem question="When are rewards paid out?" answer="Rewards are typically paid out once the referral meets the minimum deposit and trading requirements." />
            <FaqItem question="Is there a limit on referrals?" answer="No, you can refer as many friends as you like and earn rewards for each one." />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 bg-brand-gold text-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Start Referring Today</h2>
          <p className="text-brand-dark/80 text-lg mb-12 font-medium">Join the Axiom Referral program and start earning rewards for your network.</p>
          <button className="px-12 py-5 bg-brand-dark text-white font-bold rounded-full text-xl hover:scale-105 transition-transform shadow-2xl">
            Get Your Referral Link Now
          </button>
        </div>
      </section>
    </div>
  );
};

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-gold/30 transition-all text-center">
    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-brand-gold mb-6 mx-auto">
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="relative p-8 rounded-2xl bg-slate-900 border border-slate-800">
    <div className="text-6xl font-bold text-white/5 absolute -top-6 -left-2">{number}</div>
    <h4 className="text-xl font-bold mb-4 relative z-10">{title}</h4>
    <p className="text-slate-500 text-sm relative z-10">{desc}</p>
  </div>
);

const RewardCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-gold/30 transition-all">
    <h4 className="text-2xl font-bold mb-4 text-brand-gold">{title}</h4>
    <p className="text-slate-400 mb-6 leading-relaxed">{desc}</p>
    <button className="text-white font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
      Learn More <ArrowRight size={16} />
    </button>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-brand-gold mb-6 mx-auto">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-slate-500 text-sm">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
    <h4 className="text-lg font-bold mb-2 text-white">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
  </div>
);

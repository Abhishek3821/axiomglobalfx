import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Wallet, Download, Upload, MessageSquare, StarIcon } from 'lucide-react';

export const FeedbackPage = () => {
  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-24 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gold-gradient opacity-10 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-gradient/10 border border-brand-gold/30 text-brand-gold mb-8"
          >
            <MessageSquare size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Your Voice Matters</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Leave a <span className="text-gold-gradient italic">Feedback</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We value your opinion and strive to improve our services. Share your thoughts, suggestions, or concerns with us.
          </p>
        </div>
      </section>

      {/* 2. Feedback Form Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Share Your Thoughts</h2>
            <form className="space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Rate Your Experience</label>
                <div className="flex justify-center gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" className="text-slate-700 hover:text-brand-gold transition-colors">
                      <StarIcon size={40} fill="currentColor" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">What do you like most?</label>
                <input type="text" placeholder="e.g. Trading platforms, Support" className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-gold outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">What can we improve?</label>
                <textarea rows={4} placeholder="Your suggestions for improvement..." className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-gold outline-none transition-all resize-none"></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Any other comments?</label>
                <textarea rows={4} placeholder="Tell us more..." className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-gold outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-brand-gold text-brand-dark font-bold rounded-xl hover:bg-yellow-500 transition-all shadow-2xl">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. Why Feedback Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Your Feedback Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard icon={<Zap />} title="Continuous Improvement" desc="We use your feedback to enhance our platforms and services." />
            <BenefitCard icon={<Star />} title="User-Centric Design" desc="Your suggestions help us build features that you actually need." />
            <BenefitCard icon={<Shield />} title="Better Support" desc="Feedback allows us to improve our support response and quality." />
          </div>
        </div>
      </section>

      {/* 4. Security & Trust Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted is protected with 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a broker regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All transfers are processed within our secure and audited systems." />
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FaqItem question="Is my feedback anonymous?" answer="You can choose to remain anonymous or provide your details for personalized follow-up." />
            <FaqItem question="Do you read all feedback?" answer="Yes, our management team reviews every piece of feedback we receive." />
            <FaqItem question="Will I get a response?" answer="If you provide your contact details and request a follow-up, our team will get in touch with you." />
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-brand-gold text-brand-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Help Us Shape the Future</h2>
          <p className="text-brand-dark/80 text-lg mb-12 font-medium">Your feedback is essential for our growth and improvement. Thank you for sharing your thoughts.</p>
          <button className="px-12 py-5 bg-brand-dark text-white font-bold rounded-full text-xl hover:scale-105 transition-transform shadow-2xl">
            Submit Your Feedback Now
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

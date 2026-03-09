import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, CheckCircle2, CreditCard, Smartphone, Headphones, ArrowRight, Globe, BarChart3, Wallet, Download, Upload, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';

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

export const ContactUsPage = () => {
  return (
    // Clean, deep slate background. Gold used only for selection highlight.
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden font-sans pt-20 selection:bg-yellow-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (Sleek Dark Theme with Gold Accents) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden z-10 border-b border-white/5">
        
        {/* Subtle Background Gradients */}
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

        {/* 3D Floating Contact Tiles (Dark Glass with Gold Icons) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
          <div className="max-w-7xl mx-auto w-full h-full relative">
            <ContactCard3D top="20%" left="15%" rotate={-15} scale={0.7} delay={0} icon={<Mail size={32} className="text-yellow-400" />} />
            <ContactCard3D bottom="18%" left="10%" rotate={-10} scale={1.1} delay={1.2} icon={<Phone size={40} className="text-yellow-400" />} />
            <ContactCard3D top="12%" right="20%" rotate={15} scale={0.5} delay={0.5} icon={<MessageSquare size={28} className="text-yellow-400" />} />
            <ContactCard3D bottom="25%" right="12%" rotate={20} scale={0.9} delay={1.5} icon={<MapPin size={36} className="text-yellow-400" />} />
          </div>
        </div>

        {/* Main Content (Foreground) */}
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-8 backdrop-blur-md"
          >
            <Headphones size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">24/5 Expert Support</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-[4rem] md:text-[6.5rem] font-extrabold leading-[1.1] tracking-tight mb-6 text-white uppercase"
          >
            GET IN <br />
            {/* The primary gold highlight on the page. pr-4 prevents italic clipping */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 italic pr-4">
              TOUCH
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Our support team is available 24/5 to assist you with any questions or issues. Choose your preferred method to connect with us.
          </motion.p>
          
          {/* Floating Glass Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto"
          >
            <StatCard label="Response Time" value="< 1 Min" highlight />
            <StatCard label="Availability" value="24 / 5" />
            <StatCard label="Languages" value="15+ Supported" />
            <StatCard label="Satisfaction" value="99% Positive" />
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT METHODS GRID SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
        className="py-24 relative bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ContactCard icon={<MessageSquare />} title="Live Chat" desc="Chat with our support team in real-time for instant help." action="Start Chat" />
            <ContactCard icon={<Mail />} title="Email Support" desc="Send us an email and we'll get back to you within 24 hours." action="Send Email" />
            <ContactCard icon={<Phone />} title="Phone Support" desc="Call us for personalized assistance from our experts." action="Call Now" />
            <ContactCard icon={<MapPin />} title="Global Offices" desc="Visit one of our global offices for in-person assistance." action="View Locations" />
          </div>
        </div>
      </motion.section>

      {/* 3. CONTACT FORM SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="py-24 bg-slate-950 border-y border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Send us a Message</h2>
          </motion.div>
          
          <motion.form variants={fadeUpVariant} className="space-y-6 p-8 md:p-10 bg-slate-900/50 border border-white/10 rounded-3xl backdrop-blur-sm shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-950 border border-white/10 rounded-xl focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white placeholder-slate-600 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-950 border border-white/10 rounded-xl focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white placeholder-slate-600 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Subject</label>
              <select className="w-full px-6 py-4 bg-slate-950 border border-white/10 rounded-xl focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white outline-none transition-all appearance-none cursor-pointer">
                <option value="" disabled selected className="text-slate-600">Select a topic...</option>
                <option value="account">Account & Funding</option>
                <option value="platform">Trading Platforms</option>
                <option value="security">Security & Privacy</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea rows={5} placeholder="How can we help you today?" className="w-full px-6 py-4 bg-slate-950 border border-white/10 rounded-xl focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-white placeholder-slate-600 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all mt-4 text-base">
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.section>

      {/* 4. GLOBAL OFFICES SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Global Presence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <OfficeCard city="London, UK" address="Level 39, One Canada Square, Canary Wharf, London E14 5AB" phone="+44 20 1234 5678" />
            <OfficeCard city="Dubai, UAE" address="Al Fattan Currency House, Tower 2, DIFC, Dubai" phone="+971 4 123 4567" />
            <OfficeCard city="Sydney, AUS" address="Level 25, 100 International Tower, Barangaroo, Sydney" phone="+61 2 1234 5678" />
          </div>
        </div>
      </motion.section>

      {/* 5. SECURITY & TRUST SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-950 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Institutional Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SecurityCard icon={<Shield />} title="SSL Encryption" desc="All data transmitted is protected with military-grade 256-bit SSL encryption." />
            <SecurityCard icon={<Globe />} title="Global Regulation" desc="Trade with a broker strictly regulated by multiple top-tier authorities." />
            <SecurityCard icon={<Star />} title="Secure Transactions" desc="All transfers are processed within our secure, segregated banking networks." />
          </div>
        </div>
      </motion.section>

      {/* 6. FAQ SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="py-24 bg-slate-900/30 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FaqItem question="What are your support hours?" answer="Our core support team is available 24 hours a day, 5 days a week (Monday to Friday) matching global trading hours." />
            <FaqItem question="Do you offer support in multiple languages?" answer="Yes, we offer multilingual support in over 15 languages, including English, Spanish, Arabic, and Mandarin." />
            <FaqItem question="How quickly can I expect an email response?" answer="We strive to reply to all email inquiries within 2 hours during normal business operations, and guaranteed within 24 hours." />
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">We're Here for You</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Our dedicated support team is ready to assist you. Get the answers you need to trade with absolute confidence.
          </p>
          <button className="px-10 py-4 bg-yellow-500 text-slate-950 font-bold rounded-xl text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] flex items-center gap-2">
            Open Live Chat <MessageSquare size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

/* --- Subcomponents --- */

const ContactCard3D = ({ top, bottom, left, right, rotate, scale, delay, icon }: any) => {
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
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' 
        }}
      >
        <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          {icon}
        </div>
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

const ContactCard = ({ icon, title, desc, action }: { icon: React.ReactNode; title: string; desc: string; action: string }) => (
  <div className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-yellow-500/30 hover:bg-slate-900 transition-all text-center group shadow-lg">
    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{title}</h4>
    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{desc}</p>
    <button className="text-yellow-400 font-bold text-sm flex items-center justify-center gap-2 w-full group-hover:text-yellow-300 transition-colors">
      {action} <ArrowRight size={16} />
    </button>
  </div>
);

const OfficeCard = ({ city, address, phone }: { city: string; address: string; phone: string }) => (
  <div className="p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-yellow-500/30 transition-all group shadow-lg">
    <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">{city}</h4>
    <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[40px]">{address}</p>
    <div className="flex items-center gap-3 text-white font-bold text-sm bg-slate-900 py-3 px-4 rounded-xl border border-white/5 group-hover:border-yellow-500/20 transition-colors">
      <Phone size={16} className="text-yellow-500" />
      {phone}
    </div>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-yellow-500/30 transition-all group text-center">
    <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 mx-auto group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement, { size: 32 })}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 hover:bg-slate-900 hover:border-yellow-500/20 transition-all cursor-pointer group">
    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">{question}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
  </div>
);
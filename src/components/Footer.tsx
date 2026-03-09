import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Youtube, Apple, PlayCircle } from 'lucide-react';

import { ViewType } from '../App';
import Logo from '../assets/Logo.png';

export const Footer = ({ setView }: { setView?: (view: ViewType) => void }) => {
  const handleNavClick = (item: string) => {
    if (!setView) return;
    
    const slug = item.toLowerCase().replace(/\s+/g, '-');
    
    // Special cases for mapping if needed
    const mapping: Record<string, ViewType> = {
      'forex': 'forex', 'indices': 'indices', 'cryptocurrency': 'crypto', 'commodities': 'commodities',
      'standard-account': 'standard-account', 'micro-account': 'micro-account', 'vip-account': 'vip-account',
      'live-account': 'live-account', 'demo-account': 'demo-account', 'topups': 'topups',
      'advanced-charts': 'advanced-charts', 'copy-trading': 'copy-trading', 'mam': 'mam', 'pamm': 'pamm',
      'web-trading': 'web-trading', 'mobile-app-trading': 'mobile-app', 'metatrader-5': 'mt5', 'trading-view': 'tradingview',
      'deposit': 'deposit', 'withdrawal': 'withdrawal', 'internal-transfer': 'internal-transfer',
      'deposit-history': 'deposit-history', 'withdrawal-history': 'withdrawal-history',
      'savings': 'savings', 'bonuses': 'bonuses',
      'ib-dashboard': 'ib-dashboard', 'referrals': 'referrals', 'ib-reports': 'ib-reports', 'become-a-partner': 'become-partner',
      'helpdesk': 'helpdesk', 'contact-us': 'contact-us', 'leave-a-feedback': 'feedback', 'download-app': 'download-app', 'blogs': 'blogs'
    };

    if (mapping[slug]) {
      setView(mapping[slug]);
      window.scrollTo(0, 0);
    }
  };

  const navigationData = [
    {
      title: "Trading",
      columns: [
        { heading: "Trade Markets", items: ["Forex", "Indices", "Cryptocurrency", "Commodities"] },
        { heading: "Account Types", items: ["Standard account", "Micro account", "Vip account", "Live account", "Demo account", "Topups"] }
      ]
    },
    {
      title: "Discover",
      columns: [
        { heading: "Trading Tools", items: ["Advanced charts", "Copy trading", "Mam", "Pamm"] },
        { heading: "Platforms", items: ["Web trading", "Mobile app trading", "Metatrader 5", "Trading view"] }
      ]
    },
    {
      title: "Promotions",
      columns: [
        { heading: "Benefits", items: ["Savings", "Bonuses"] }
      ]
    },
    {
      title: "Company",
      columns: [
        { heading: "Funds Management", items: ["Deposit", "Withdrawal", "Internal transfer", "Deposit history", "Withdrawal history"] },
        { heading: "IB Program", items: ["Ib dashboard", "Ib reports", "Become a partner"] },
        { heading: "Support & Learn", items: ["Contact us"] }
      ]
    }
  ];

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12 gap-6 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Feel connected anytime, anywhere.</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {/* Added your specific links here */}
            <SocialIcon 
              icon={<Facebook />} 
              href="https://www.facebook.com/profile.php?id=61586245931037" 
            />
            <SocialIcon 
              icon={<Instagram />} 
              href="https://www.instagram.com/axiomglobalfx/" 
            />
            <SocialIcon 
              icon={<Twitter />} 
              href="https://x.com/axiomglobalfx" 
            />
          
          </div>
        </div>

        <div className="border-b border-white/5 mb-10 md:mb-12" />

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {navigationData.map((section) => (
            <div key={section.title} className="space-y-6 sm:space-y-8">
              <h4 className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 sm:mb-6 border-b border-gold-500/20 pb-2">
                {section.title}
              </h4>
              <div className="space-y-6 sm:space-y-8">
                {section.columns.map((col) => (
                  <div key={col.heading}>
                    <h5 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.1em] mb-3 sm:mb-4">
                      {col.heading}
                    </h5>
                    <ul className="space-y-2 sm:space-y-3">
                      {col.items.map((item) => (
                        <li key={item}>
                          <button 
                            onClick={() => handleNavClick(item)}
                            className="text-xs sm:text-sm text-white/50 hover:text-gold-400 transition-colors text-left w-full block break-words"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-b border-white/5 mb-10 md:mb-12" />

        {/* Logo and Apps Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 md:mb-12 gap-8 text-center lg:text-left">
          
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setView?.('home')}
          >
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="h-20 sm:h-24 w-auto object-contain" 
            />
          </div>

          {/* App Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto">
              <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-left">
                <div className="text-[8px] sm:text-[9px] uppercase text-white/40 leading-none mb-0.5">Download on the</div>
                <div className="text-xs sm:text-sm font-bold leading-none">App Store</div>
              </div>
            </button>
            <button className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto">
              <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-left">
                <div className="text-[8px] sm:text-[9px] uppercase text-white/40 leading-none mb-0.5">GET IT ON</div>
                <div className="text-xs sm:text-sm font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12 text-[10px] sm:text-xs font-bold text-blue-500">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
          <a href="#" className="hover:underline">Vulnerability Policy</a>
          <a href="#" className="hover:underline">Legal Documents</a>
        </div>

        {/* Regulatory Text */}
        <div className="space-y-3 sm:space-y-4 text-[9px] sm:text-[10px] text-white/30 leading-relaxed mb-10 sm:mb-12 text-center md:text-left">
          <p>Axiom Global FX Limited is regulated by the Financial Services Commission (FSC) of Mauritius under the Investment Dealer's License number GB22202700.</p>
          <p>Axiom (SC) Limited is regulated by the Seychelles Financial Services Authority (FSA) under Securities Dealer's License number SD190.</p>
          <p>Axiom Global Limited is regulated by the Financial Services Commission (FSC) of Belize under the Securities Industry Act 2021 (license number 8557558).</p>
          <p>Trading Point of Financial Instruments Limited is authorised and regulated by Cyprus Securities and Exchange Commission (CySEC) under licence number 120/10.</p>
          <p>All entities referenced herein are part of the Trading Point Group and are duly authorized to operate under the Axiom brand.</p>
          <p className="font-bold text-white/40">Risk Warning: Our services involve a significant risk and can result in the loss of your invested capital. Please read and ensure you fully understand our Risk Disclosures (Axiom Global), Risk Disclosures (Axiom International MU) and Risk Disclosures (Axiom (SC) Limited).</p>
          <p>Restricted Regions: We do not provide our service to citizens of the United States of America, Canada, Israel and the Islamic Republic of Iran (and other sanctioned countries).</p>
          <p>Axiom does not direct its website and services to any individual in any country in which the use of its website and services are prohibited by local laws or regulations. When accessing this website from a country in which its use may or may not be prohibited, it is the user's responsibility to ensure that any use of the website or services adhere to local laws or regulations. Axiom does not affirm that the information on its website is suitable to all jurisdictions.</p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 sm:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-center">
            <span className="text-xs sm:text-sm font-bold">MetaTrader 4</span>
            <span className="text-xs sm:text-sm font-bold">MetaTrader 5</span>
            <span className="text-xs sm:text-sm font-bold">VERISIGN</span>
            <span className="text-xs sm:text-sm font-bold">unicef</span>
            <span className="text-xs sm:text-sm font-bold">INVESTORS IN PEOPLE</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white/20 rounded" />
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white/20 rounded" />
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white/20 rounded" />
            <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white/20 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Added `href` prop and updated the `<a>` tag to use target="_blank"
interface SocialIconProps {
  icon: React.ReactNode;
  href?: string;
}

const SocialIcon = ({ icon, href = "#" }: SocialIconProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/50 transition-all shrink-0"
  >
    {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
  </a>
);
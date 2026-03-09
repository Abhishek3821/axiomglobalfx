import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Menu, X, Zap, 
  BarChart3, Users, Layout
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';
import { ViewType } from './App'; // Make sure this path points to your App.tsx

interface NavColumn {
  heading: string;
  items: string[];
}

interface NavItem {
  title: string;
  icon: React.ElementType;
  columns: NavColumn[];
}

const navigationData: NavItem[] = [
  {
    title: "Trading",
    icon: BarChart3,
    columns: [
      {
        heading: "Trade Markets",
        items: ["Forex", "Indices", "Cryptocurrency", "Commodities"]
      },
      {
        heading: "Account Types",
        items: ["Standard account", "Micro account", "Vip account", "Live account", "Demo account", "Topups"]
      }
    ]
  },
  {
    title: "Discover",
    icon: Layout,
    columns: [
      {
        heading: "Trading Tools",
        items: ["Advanced charts", "Copy trading", "Mam", "Pamm"]
      },
      {
        heading: "Platforms",
        items: ["Web trading", "Mobile app trading", "Metatrader 5", "Trading view"]
      }
    ]
  },
  {
    title: "Promotions",
    icon: Zap,
    columns: [
      {
        heading: "Benefits",
        items: ["Savings", "Bonuses"]
      }
    ]
  },
  {
    title: "Company",
    icon: Users,
    columns: [
      {
        heading: "Funds Management",
        items: ["Deposit", "Withdrawal", "Internal transfer", "Deposit history", "Withdrawal history"]
      },
      {
        heading: "IB Program",
        items: ["Ib dashboard", "Ib reports", "Become a partner"]
      },
      {
        heading: "Support & Learn",
        items: ["Contact us"]
      }
    ]
  }
];

export const Navbar = ({ setView }: { setView: (view: ViewType) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (title: string, heading?: string, subItem?: string) => {
    if (subItem) {
      const slug = subItem.toLowerCase().replace(/\s+/g, '-');
      
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

      setView(mapping[slug] || (slug as ViewType));
    } else {
      if (title === 'Trading') setView('forex');
      else if (title === 'Discover') setView('copy-trading');
      else if (title === 'Promotions') setView('bonuses');
      else if (title === 'Company') setView('helpdesk');
    }
    
    setActiveMenu(null);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Changed max-w-[100vw] to w-full to prevent horizontal scrollbar layout breaks
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 box-border">
      <div className="w-full max-w-7xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo Section */}
          <button 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group focus:outline-none min-w-0 flex-shrink-0"
            onClick={() => {
              setView('home');
              setIsOpen(false);
            }}
            aria-label="Go to home"
          >
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="h-10 sm:h-12 lg:h-15 w-auto object-contain flex-shrink-0 group-hover:scale-105 transition-transform" 
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationData.map((item, index) => (
              <div 
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors uppercase tracking-widest ${
                    activeMenu === item.title ? 'text-yellow-400 bg-white/5' : 'text-white/70 hover:text-yellow-400 hover:bg-white/5'
                  }`}
                  onClick={() => handleNavClick(item.title)}
                  aria-expanded={activeMenu === item.title}
                >
                  <item.icon className="w-3 h-3 xl:w-4 xl:h-4 opacity-70" />
                  {item.title}
                  <ChevronDown className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                      // Dynamically position dropdowns so they don't clip off the edges of the screen
                      className={`absolute top-full pt-4 ${
                        index === 0 ? 'left-0' : 
                        index === navigationData.length - 1 ? 'right-0' : 
                        'left-1/2 -translate-x-1/2'
                      }`}
                    >
                      {/* Reduced min-width slightly for smaller desktop screens (1024px-1280px) */}
                      <div className="bg-[#111] border border-white/10 rounded-2xl p-6 xl:p-8 min-w-[350px] lg:min-w-[400px] xl:min-w-[500px] shadow-2xl flex gap-6 lg:gap-8 xl:gap-12 backdrop-blur-xl">
                        {item.columns.map((col) => (
                          <div key={col.heading} className="flex-1 min-w-[130px] xl:min-w-[150px]">
                            <h4 className="text-[9px] xl:text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] mb-3 xl:mb-4 border-b border-yellow-500/20 pb-2">
                              {col.heading}
                            </h4>
                            <ul className="space-y-2.5 xl:space-y-3">
                              {col.items.map((subItem) => (
                                <li key={subItem}>
                                  <button 
                                    onClick={() => handleNavClick(item.title, col.heading, subItem)}
                                    className="text-xs xl:text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all block text-left w-full"
                                  >
                                    {subItem}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <button className="text-xs xl:text-sm font-bold text-white/70 hover:text-yellow-400 transition-colors uppercase tracking-widest focus:outline-none">
              Login
            </button>
            <button className="px-5 xl:px-6 py-2 xl:py-2.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-xs xl:text-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.3)] focus:outline-none whitespace-nowrap">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center flex-shrink-0">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-yellow-400 p-2 transition-colors focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-white/10 overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-4 sm:px-6 py-6 space-y-8 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto pb-8 w-full">
              {navigationData.map((item) => (
                <div key={item.title} className="space-y-4">
                  <button 
                    onClick={() => handleNavClick(item.title)}
                    className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2 w-full text-left"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pl-4 sm:pl-6">
                    {item.columns.map((col) => (
                      <div key={col.heading} className="space-y-3">
                        <h4 className="text-[10px] text-white/40 uppercase font-bold tracking-wider">{col.heading}</h4>
                        <ul className="space-y-3">
                          {col.items.map((subItem) => (
                            <li key={subItem}>
                              <button 
                                onClick={() => handleNavClick(item.title, col.heading, subItem)}
                                className="text-sm text-white/70 hover:text-yellow-400 block text-left w-full transition-colors break-words"
                              >
                                {subItem}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 w-full">
                <button className="w-full px-6 py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">
                  Login
                </button>
                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
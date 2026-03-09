/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { Footer } from './components/Footer';

export type ViewType = 
  | 'home' 
  | 'forex' | 'indices' | 'crypto' | 'commodities'
  | 'standard-account' | 'micro-account' | 'vip-account' | 'live-account' | 'demo-account' | 'topups'
  | 'advanced-charts' | 'copy-trading' | 'mam' | 'pamm'
  | 'web-trading' | 'mobile-app' | 'mt5' | 'tradingview'
  | 'deposit' | 'withdrawal' | 'internal-transfer' | 'deposit-history' | 'withdrawal-history'
  | 'savings' | 'bonuses'
  | 'ib-dashboard' | 'referrals' | 'ib-reports' | 'become-partner'
  | 'helpdesk' | 'contact-us' | 'feedback' | 'download-app' | 'blogs';

import { ForexPage } from './components/ForexPage';
import { IndicesPage } from './components/IndicesPage';
import { CryptoPage } from './components/CryptoPage';
import { CommoditiesPage } from './components/CommoditiesPage';
import { StandardAccountPage } from './components/StandardAccountPage';
import { MicroAccountPage } from './components/MicroAccountPage';
import { VipAccountPage } from './components/VipAccountPage';
import { LiveAccountPage } from './components/LiveAccountPage';
import { DemoAccountPage } from './components/DemoAccountPage';
import { TopupsPage } from './components/TopupsPage';
import { AdvancedChartsPage } from './components/AdvancedChartsPage';
import { CopyTradingPage } from './components/CopyTradingPage';
import { MamPage } from './components/MamPage';
import { PammPage } from './components/PammPage';
import { WebTradingPage } from './components/WebTradingPage';
import { MobileAppPage } from './components/MobileAppPage';
import { Mt5Page } from './components/Mt5Page';
import { TradingviewPage } from './components/TradingviewPage';
import { DepositPage } from './components/DepositPage';
import { WithdrawalPage } from './components/WithdrawalPage';
import { InternalTransferPage } from './components/InternalTransferPage';
import { DepositHistoryPage } from './components/DepositHistoryPage';
import { WithdrawalHistoryPage } from './components/WithdrawalHistoryPage';
import { SavingsPage } from './components/SavingsPage';
import { BonusesPage } from './components/BonusesPage';
import { IbDashboardPage } from './components/IbDashboardPage';
import { IbReportsPage } from './components/IbReportsPage';
import { BecomePartnerPage } from './components/BecomePartnerPage';
import { ContactUsPage } from './components/ContactUsPage';

export default function App() {
  const [view, setView] = useState<ViewType>('home');

  const renderView = () => {
    // For now, many pages will share a common template until specific components are built
    // This ensures the app doesn't break while I build out the requested separate components
    switch (view) {
      case 'home': return <LandingPage />;
      case 'forex': return <ForexPage />;
      case 'indices': return <IndicesPage />;
      case 'crypto': return <CryptoPage />;
      case 'commodities': return <CommoditiesPage />;
      case 'standard-account': return <StandardAccountPage />;
      case 'micro-account': return <MicroAccountPage />;
      case 'vip-account': return <VipAccountPage />;
      case 'live-account': return <LiveAccountPage />;
      case 'demo-account': return <DemoAccountPage />;
      case 'topups': return <TopupsPage />;
      case 'advanced-charts': return <AdvancedChartsPage />;
      case 'copy-trading': return <CopyTradingPage />;
      case 'mam': return <MamPage />;
      case 'pamm': return <PammPage />;
      case 'web-trading': return <WebTradingPage />;
      case 'mobile-app': return <MobileAppPage />;
      case 'mt5': return <Mt5Page />;
      case 'tradingview': return <TradingviewPage />;
      case 'deposit': return <DepositPage />;
      case 'withdrawal': return <WithdrawalPage />;
      case 'internal-transfer': return <InternalTransferPage />;
      case 'deposit-history': return <DepositHistoryPage />;
      case 'withdrawal-history': return <WithdrawalHistoryPage />;
      case 'savings': return <SavingsPage />;
      case 'bonuses': return <BonusesPage />;
      case 'ib-dashboard': return <IbDashboardPage />;
      
      case 'ib-reports': return <IbReportsPage />;
      case 'become-partner': return <BecomePartnerPage />;
      case 'contact-us': return <ContactUsPage />;
 
      default: return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-gold-500 selection:text-brand-dark">
      <Navbar setView={setView} />
      
      <main>
        {renderView()}
      </main>

      <Footer setView={setView} />
    </div>
  );
}

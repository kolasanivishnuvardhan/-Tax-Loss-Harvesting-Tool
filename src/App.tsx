import React, { useMemo } from 'react';
import './App.css';
import CapitalGainsCard from './components/CapitalGainsCard';
import HoldingsTable from './components/HoldingsTable';
import NotesDisclaimer from './components/NotesDisclaimer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { AppProvider, useApp } from './contexts/AppContext';

function calcNetGains(profits: number, losses: number) {
  return profits - losses;
}

function sumRealised(stcg: {profits: number, losses: number}, ltcg: {profits: number, losses: number}) {
  return calcNetGains(stcg.profits, stcg.losses) + calcNetGains(ltcg.profits, ltcg.losses);
}

// Theme toggle button component
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className="theme-toggle-icon">
        {theme === 'light' ? '☀️' : '🌙'}
      </span>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

const LoadingState: React.FC = () => (
  <div className="loader-container">
    <div className="loader"></div>
    <p className="loader-text">Loading your portfolio data...</p>
  </div>
);

const ErrorState: React.FC<{ message: string }> = ({ message }) => {
  const { refreshData } = useApp();
  
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3>Oops! Something went wrong</h3>
      <p className="error-message">{message}</p>
      <button onClick={refreshData} className="retry-button">
        Try Again
      </button>
    </div>
  );
};

// Modal component for "How it works"
const HowItWorksModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h3>How Tax Loss Harvesting Works</h3>
        <div className="modal-body">
          <p>Tax loss harvesting is a strategy that involves selling investments at a loss to offset capital gains tax liability.</p>
          <p>Here's how it works:</p>
          <ol>
            <li>Identify investments with unrealized losses</li>
            <li>Sell these investments to realize the losses</li>
            <li>Use these losses to offset capital gains and reduce tax liability</li>
            <li>Optionally, reinvest in similar (but not "substantially identical") assets</li>
          </ol>
          <p>This tool helps you identify potential tax loss harvesting opportunities in your crypto portfolio and estimate the tax savings.</p>
        </div>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { 
    holdings,
    capitalGains,
    selected,
    loading,
    error,
    viewAll,
    setViewAll,
    selectHolding,
    selectAll
  } = useApp();
  
  const [modalOpen, setModalOpen] = React.useState(false);

  // Memoize calculations to prevent recalculating on every render
  const {
    preRealised,
    stProfits,
    stLosses,
    ltProfits,
    ltLosses,
    postRealised,
    showSavings,
    savings
  } = useMemo(() => {
    if (!capitalGains) {
      return {
        preRealised: 0,
        stProfits: 0,
        stLosses: 0,
        ltProfits: 0,
        ltLosses: 0,
        postRealised: 0,
        showSavings: false,
        savings: 0
      };
    }

    // Pre-harvesting
    const pre = capitalGains.capitalGains;
    const preRealised = sumRealised(pre.stcg, pre.ltcg);

    // After harvesting logic
    let stProfits = pre.stcg.profits;
    let stLosses = pre.stcg.losses;
    let ltProfits = pre.ltcg.profits;
    let ltLosses = pre.ltcg.losses;

    holdings.forEach(h => {
      if (selected.has(h.coin)) {
        if (h.stcg.gain > 0) stProfits += h.stcg.gain;
        if (h.stcg.gain < 0) stLosses += Math.abs(h.stcg.gain);
        if (h.ltcg.gain > 0) ltProfits += h.ltcg.gain;
        if (h.ltcg.gain < 0) ltLosses += Math.abs(h.ltcg.gain);
      }
    });

    const postRealised = calcNetGains(stProfits, stLosses) + calcNetGains(ltProfits, ltLosses);
    const showSavings = preRealised > postRealised;
    const savings = showSavings ? preRealised - postRealised : 0;

    return {
      preRealised,
      stProfits,
      stLosses,
      ltProfits,
      ltLosses,
      postRealised,
      showSavings,
      savings
    };
  }, [capitalGains, holdings, selected]);

  // Table view logic
  const tableHoldings = useMemo(() => 
    viewAll ? holdings : holdings.slice(0, 5)
  , [holdings, viewAll]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!capitalGains) return <ErrorState message="Unable to load capital gains data" />;

  return (
    <div className="app-container">
      <header className="app-header">
        <img 
          src="/KkoinX-1657031694106.avif" 
          alt="KoinX" 
          className="logo" 
          style={{ 
            width: '50px', 
            height: '50px', 
            objectFit: 'cover',
          }} 
        />
        <span className="app-title">
          Tax Harvesting 
          <button 
            onClick={() => setModalOpen(true)} 
            className="how-link"
            aria-label="Learn how tax harvesting works"
          >
            How it works?
          </button>
        </span>
        <ThemeToggle />
      </header>
      
      {/* Add modal */}
      <HowItWorksModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      
      <NotesDisclaimer />
      
      <div className="cards-row">
        <CapitalGainsCard
          title="Pre Harvesting"
          stProfits={capitalGains.capitalGains.stcg.profits}
          stLosses={capitalGains.capitalGains.stcg.losses}
          ltProfits={capitalGains.capitalGains.ltcg.profits}
          ltLosses={capitalGains.capitalGains.ltcg.losses}
          realised={preRealised}
        />
        <CapitalGainsCard
          title="After Harvesting"
          stProfits={stProfits}
          stLosses={stLosses}
          ltProfits={ltProfits}
          ltLosses={ltLosses}
          highlight
          effective={postRealised}
          showSavings={showSavings}
          savings={savings}
        />
      </div>
      
      <section className="holdings-section">
        <h2>Holdings</h2>
        <HoldingsTable
          holdings={tableHoldings}
          selected={selected}
          onSelectionChange={selectHolding}
          onSelectAll={selectAll}
          viewAll={!viewAll && holdings.length > 5}
          onViewAll={() => setViewAll(true)}
        />
      </section>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;

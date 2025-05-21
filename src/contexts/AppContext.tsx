import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Holding } from '../types/holdings';
import { CapitalGainsApiResponse } from '../types/capital-gains';
import { fetchHoldings, fetchCapitalGains } from '../services/api';

interface AppContextType {
  holdings: Holding[];
  capitalGains: CapitalGainsApiResponse | null;
  selected: Set<string>;
  loading: boolean;
  error: string | null;
  viewAll: boolean;
  setViewAll: (value: boolean) => void;
  selectHolding: (coin: string, checked: boolean) => void;
  selectAll: (checked: boolean) => void;
  refreshData: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [capitalGains, setCapitalGains] = useState<CapitalGainsApiResponse | null>(null);
  const [selected, setSelected] = useState<Set<string>>(() => {
    // Load saved selections from localStorage
    const savedSelections = localStorage.getItem('taxHarvestingSelections');
    if (savedSelections) {
      try {
        return new Set(JSON.parse(savedSelections));
      } catch (e) {
        console.error('Error parsing saved selections:', e);
        return new Set();
      }
    }
    return new Set();
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewAll, setViewAll] = useState(false);

  // Load data
  useEffect(() => {
    refreshData();
  }, []);

  // Save selections to localStorage
  useEffect(() => {
    localStorage.setItem('taxHarvestingSelections', JSON.stringify(Array.from(selected)));
  }, [selected]);

  const refreshData = () => {
    setLoading(true);
    setError(null);
    
    Promise.all([fetchHoldings(), fetchCapitalGains()])
      .then(([h, cg]) => {
        setHoldings(h);
        setCapitalGains(cg);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      });
  };

  const selectHolding = (coin: string, checked: boolean) => {
    setSelected(prev => {
      const next = new Set(prev);
      checked ? next.add(coin) : next.delete(coin);
      return next;
    });
  };

  const selectAll = (checked: boolean) => {
    if (checked) {
      setSelected(new Set(holdings.map(h => h.coin)));
    } else {
      setSelected(new Set());
    }
  };

  return (
    <AppContext.Provider
      value={{
        holdings,
        capitalGains,
        selected,
        loading,
        error,
        viewAll,
        setViewAll,
        selectHolding,
        selectAll,
        refreshData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}; 
import React, { useState, useMemo } from 'react';
import { Holding } from '../types/holdings';

type SortDirection = 'none' | 'asc' | 'desc';

interface Props {
  holdings: Holding[];
  selected: Set<string>;
  onSelectionChange: (coin: string, checked: boolean) => void;
  onSelectAll: (checked: boolean) => void;
  viewAll?: boolean;
  onViewAll?: () => void;
}

// Enhanced custom checkbox component
const Checkbox: React.FC<{
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}> = ({ checked, onChange, label }) => (
  <label className="custom-checkbox">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <span className="checkmark"></span>
    {label && <span className="checkbox-label">{label}</span>}
  </label>
);

const HoldingsTable: React.FC<Props> = ({ holdings, selected, onSelectionChange, onSelectAll, viewAll, onViewAll }) => {
  const allSelected = holdings.length > 0 && holdings.every(h => selected.has(h.coin));
  
  // State for sorting
  const [sortDirection, setSortDirection] = useState<SortDirection>('none');

  // Format for display 
  const formatValue = (value: number): string => {
    return value.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  // Function to toggle sort
  const toggleSort = () => {
    if (sortDirection === 'none') {
      setSortDirection('asc');
    } else if (sortDirection === 'asc') {
      setSortDirection('desc');
    } else {
      setSortDirection('none');
    }
  };

  // Remove any duplicate entries by coin
  const uniqueHoldings = useMemo(() => {
    const uniqueCoins = new Set();
    return holdings.filter(holding => {
      if (uniqueCoins.has(holding.coin)) {
        return false;
      }
      uniqueCoins.add(holding.coin);
      return true;
    });
  }, [holdings]);

  // Sort the holdings based on sortDirection
  const sortedHoldings = useMemo(() => {
    return [...uniqueHoldings].sort((a, b) => {
      if (sortDirection === 'none') return 0;
      
      const aValue = a.stcg.gain;
      const bValue = b.stcg.gain;
      
      if (sortDirection === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  }, [uniqueHoldings, sortDirection]);

  return (
    <div className="holdings-table-wrapper">
      <table className="holdings-table">
        <thead>
          <tr>
            <th>
              <Checkbox 
                checked={allSelected} 
                onChange={e => onSelectAll(e.target.checked)} 
              />
            </th>
            <th>Asset</th>
            <th>
              <div>Holdings</div>
              <div className="subheader">Current Market Rate</div>
            </th>
            <th>Total Current Value</th>
            <th onClick={toggleSort} className="sortable-header">
              Short-term
              {sortDirection !== 'none' && (
                <span className={`sort-icon ${sortDirection}`}>
                  {sortDirection === 'asc' ? ' ↑' : ' ↓'}
                </span>
              )}
            </th>
            <th>Long-Term</th>
            <th>Amount to Sell</th>
          </tr>
        </thead>
        <tbody>
          {sortedHoldings.map(h => (
            <tr 
              key={h.coin} 
              className={selected.has(h.coin) ? 'selected' : ''}
              onClick={() => onSelectionChange(h.coin, !selected.has(h.coin))}
            >
              <td onClick={(e) => e.stopPropagation()}>
                <Checkbox 
                  checked={selected.has(h.coin)} 
                  onChange={e => onSelectionChange(h.coin, e.target.checked)} 
                />
              </td>
              <td>
                <div className="asset-cell">
                  <img src={h.logo} alt={h.coinName} style={{width: 24, height: 24, marginRight: 8}} />
                  <div>
                    <div className="coin-name">{h.coinName}</div>
                    <div className="coin-symbol">{h.coin}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="holding-info">
                  <div className="holding-amount">{h.totalHolding} {h.coin}</div>
                  <div className="holding-price">$ {formatValue(h.averageBuyPrice)}/{h.coin}</div>
                </div>
              </td>
              <td>$ {formatValue(h.totalHolding * h.currentPrice)}</td>
              <td>
                <div className={h.stcg.gain >= 0 ? 'gain-positive' : 'gain-negative'}>
                  {h.stcg.gain >= 0 ? '+' : '-'}${Math.abs(h.stcg.gain).toLocaleString()}
                </div>
                <div className="balance-info">{h.stcg.balance}</div>
              </td>
              <td>
                <div className={h.ltcg.gain >= 0 ? 'gain-positive' : 'gain-negative'}>
                  {h.ltcg.gain >= 0 ? '+' : '-'}${Math.abs(h.ltcg.gain).toLocaleString()}
                </div>
                <div className="balance-info">{h.ltcg.balance}</div>
              </td>
              <td>
                <div className={selected.has(h.coin) ? 'sell-amount active' : 'sell-amount'}>
                  {selected.has(h.coin) ? `${h.totalHolding} ${h.coin}` : '-'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewAll && onViewAll && (
        <div className="view-all-link" onClick={onViewAll}>
          View all
        </div>
      )}
    </div>
  );
};

export default HoldingsTable; 
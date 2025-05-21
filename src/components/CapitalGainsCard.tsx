import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Props {
  title: string;
  stProfits: number;
  stLosses: number;
  ltProfits: number;
  ltLosses: number;
  highlight?: boolean;
  realised?: number;
  effective?: number;
  savings?: number;
  showSavings?: boolean;
}

const CapitalGainsCard: React.FC<Props> = ({
  title,
  stProfits,
  stLosses,
  ltProfits,
  ltLosses,
  highlight = false,
  realised,
  effective,
  savings,
  showSavings = false,
}) => {
  const { theme } = useTheme();
  const stNet = stProfits - stLosses;
  const ltNet = ltProfits - ltLosses;
  const realisedGains = (realised !== undefined) ? realised : stNet + ltNet;
  const effectiveGains = effective !== undefined ? effective : realisedGains;

  // Determine text color for effective gains based on theme
  const effectiveGainsColor = highlight && theme === 'dark' ? '#ffffff' : 'var(--primary-blue)';

  return (
    <div className={`capital-gains-card${highlight ? ' highlight' : ''}`}> {/* Add styling later */}
      <h3>{title}</h3>
      <div className="gains-table">
        <div className="gains-row header">
          <span></span>
          <span>Short-term</span>
          <span>Long-term</span>
        </div>
        <div className="gains-row">
          <span>Profits</span>
          <span>$ {stProfits.toLocaleString()}</span>
          <span>$ {ltProfits.toLocaleString()}</span>
        </div>
        <div className="gains-row">
          <span>Losses</span>
          <span>- $ {stLosses.toLocaleString()}</span>
          <span>- $ {ltLosses.toLocaleString()}</span>
        </div>
        <div className="gains-row">
          <span>Net Capital Gains</span>
          <span>$ {stNet.toLocaleString()}</span>
          <span>$ {ltNet.toLocaleString()}</span>
        </div>
      </div>
      <div className="realised-gains">
        {highlight ? (
          <>
            <div><b>Effective Capital Gains:</b> <span style={{color: effectiveGainsColor}}>$ {effectiveGains.toLocaleString()}</span></div>
            {showSavings && savings !== undefined && (
              <div className="savings-msg">🎉 You are going to save upto <b>$ {savings.toLocaleString()}</b></div>
            )}
          </>
        ) : (
          <div><b>Realised Capital Gains:</b> $ {realisedGains.toLocaleString()}</div>
        )}
      </div>
    </div>
  );
};

export default CapitalGainsCard; 
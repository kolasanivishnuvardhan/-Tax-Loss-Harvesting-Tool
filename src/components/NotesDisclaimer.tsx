import React, { useState } from 'react';

const NotesDisclaimer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="notes-disclaimer">
      <button 
        className={`notes-toggle ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Notes & Disclaimers
        <span className="toggle-icon">{isExpanded ? '▲' : '▼'}</span>
      </button>
      <div className={isExpanded ? 'expanded' : ''}>
        <ul className="notes-list">
          <li>Tax harvesting helps you reduce your tax liability by offsetting gains with losses.</li>
          <li>Short-term capital gains tax applies to assets held for less than a year.</li>
          <li>Long-term capital gains tax applies to assets held for more than a year.</li>
          <li>Consult with a tax professional for specific advice regarding your situation.</li>
        </ul>
      </div>
    </div>
  );
};

export default NotesDisclaimer; 
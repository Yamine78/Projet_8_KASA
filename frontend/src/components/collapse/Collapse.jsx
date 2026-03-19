import { useState } from 'react';
import arrowClose from '../../assets/arrow_close.png';  
import arrowOpen from '../../assets/arrow_open.png';
import './Collapse.css';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`collapse-item collapse ${isOpen ? 'open' : ''}`}>
      <button 
        className="collapse-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <img 
          src={arrowClose}
          alt="" 
          className={`chevron-icon ${isOpen ? 'rotated' : ''}`} 
        />
      </button>
      
      {/* ← NOUVEAU WRAPPER pour animation */}
      <div className="collapse-content-wrapper">
        <div className="collapse-content">{content}</div>
      </div>
      {/* ← FIN WRAPPER */}
    </article>
  );
}

export default Collapse;

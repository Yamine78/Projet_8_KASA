import { useState } from 'react';
import arrowClose from '../../assets/arrow_close.png';  
import arrowOpen from '../../assets/arrow_open.png';
import './Collapse.css';


function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="collapse-item">
      <button 
        className="collapse-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <img 
          src={isOpen ? arrowOpen : arrowClose} 
          alt="" 
          className="chevron-icon"
        />
      </button>
      {isOpen && <div className="collapse-content">{content}</div>}
    </article>
  );
}

export default Collapse;

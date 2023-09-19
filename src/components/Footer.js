import React from 'react';
import './Footer.css'

const App = () => {
  

  return (
    <div className='button'><div >
      
    <button 
      onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}
    >
Scroll to top
    </button>

    <div className='button1'>
    <p>© 2023-Present DRDV. All Rights Reserved</p>
    </div>
  </div></div>
    
    
  );
}

export default App

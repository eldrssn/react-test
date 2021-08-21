import React from 'react';
import cl from './Loader.module.css';

const Loader = () => {
  return (
    <div style={{display: 'flex', marginTop: 50, justifyContent: 'center'}}>
      <div className={cl.loader}>
      </div>
    </div>
  );
};

export default Loader;
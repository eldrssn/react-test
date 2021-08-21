import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

  const rootClasses = [cl.MyModal]

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div 
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div 
        className={cl.MyModalContent}
        onClick={(evt) => evt.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
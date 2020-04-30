import React from 'react';

const StyleComponent = ({className, style, children, ...attrs}) => {
  return (
    <div className={`${className}`} {...attrs}>
      
    </div>
  );
}

export default StyleComponent;

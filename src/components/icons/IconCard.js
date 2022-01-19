import React from 'react';

const IconCard = ({ title }) => {
  return (
    <div className="icon-card d-flex justify-content-center align-items-center rounded-circle box-shadow-3 bg-white">
      <i className={`icon icon30 icn_${title}`} />
    </div>
  );
};

export default IconCard;

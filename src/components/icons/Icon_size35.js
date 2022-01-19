import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const IconSize35 = ({ title }) => {
  const schedule = useSelector(state => state.schedule);
  const [item, setItem] = useState();
  useEffect(() => {
    const filter = schedule?.activities.filter(item => item.name === title)[0];
    setItem(filter);
  }, [schedule]);
  return (
    <div
      className={`icon-35 d-flex justify-content-center align-items-center rounded-circle box-shadow-3  ${
        item?.val ? `bg-primary` : 'bg-white'
      }`}
    >
      <i
        className={`icon  ${item?.val ? `icn_${title}_light` : `icn_${title}`}`}
      />
    </div>
  );
};

export default IconSize35;

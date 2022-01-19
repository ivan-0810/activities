import React from 'react';
import IconSize35 from '../../components/icons/Icon_size35';
import EmptyIcon from '../../components/icons/EmptyIcon';
const ActivityDay = ({ activity }) => {
  return (
    <>
      {activity ? (
        <div className="d-flex flex-column ms-3" style={{ width: '65px' }}>
          <IconSize35 title={activity.type} />
          <p className="text-gray-600 text-center fs-14 eu-light text-uppercase mt-2">
            {activity.time}
          </p>
        </div>
      ) : (
        <div className="d-flex flex-column ms-3" style={{ width: '65px' }}>
          <EmptyIcon />
        </div>
      )}
    </>
  );
};

export default ActivityDay;

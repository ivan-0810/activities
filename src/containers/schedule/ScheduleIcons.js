import React from 'react';
import { useDispatch } from 'react-redux';
import IconSize35 from '../../components/icons/Icon_size35';
import { schedule } from '../../constants/schedule';
import { getActivity } from '../../store/schedule/action';

const ScheduleIcons = () => {
  const dispatch = useDispatch();
  const handleActivity = title => {
    dispatch(getActivity(title))
  }
  return (
    <div className="row py-3 my-3">
      <div className="col-12 d-flex justify-content-between align-items-center">
        {schedule.schedulesIcons.map((icon, index) => (
          <div key={index * 14124} onClick={() => handleActivity(icon.title)}><IconSize35 key={index*478324} title={icon.title} />
            <h6 className='text-center ls-21 text-white text-uppercase fs-14 rs-demi mt-2'>{icon.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleIcons;

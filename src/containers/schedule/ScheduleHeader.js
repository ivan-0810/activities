import React from 'react';
import { schedule } from '../../constants/schedule';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { erase_all_activities } from '../../store/schedule/action';
const ScheduleHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-12 pb-5">
        <Link to="/">
          {' '}
          <i
            className="icon icn_close icon25"
            onClick={() => dispatch(erase_all_activities())}
          />
        </Link>
      </div>
      <div className="col-12">
        <h2 className="text-center text-white pt-3">{schedule.main_title}</h2>
      </div>
    </div>
  );
};

export default ScheduleHeader;

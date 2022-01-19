import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { change } from 'redux-form';
import Picker from 'react-mobile-picker';
import { findIndex } from 'lodash';
import { is_schedule_timepicker_false } from '../../store/schedule/action';
import { motion } from 'framer-motion';
import { enter_Y_exit_OP } from '../../constants/transition_variants';

const ScheduleTiming = () => {
  const dispatch = useDispatch();
  const [pickerState, setPickerState] = useState({
    valueGroups: {
      time: '15 min'
    },
    optionGroups: {
      time: [
        '15 min',
        '30 min',
        '45 min',
        '1 h',
        '1h 30min',
        '2h',
        '2h 30min',
        '3h',
        '3h 30min',
        '4h',
        '4h 30min',
        '5h',
        '5h 30min'
      ]
    }
  });

  const handleChange = (name, value) => {
    setPickerState({
      ...pickerState,
      valueGroups: {
        time: value
      }
    });
  };

  const getIndex = () => {
    const index = findIndex(pickerState.optionGroups.time, function (o) {
      return o === pickerState.valueGroups.time;
    });
    return index;
  };

  const handlePrev = () => {
    const index = getIndex();
    if (index === 0) {
      return;
    } else {
      setPickerState({
        ...pickerState,
        valueGroups: {
          time: pickerState.optionGroups.time[index - 1]
        }
      });
    }
  };

  const handleNext = () => {
    const index = getIndex();
    const lastArrInx = pickerState.optionGroups.time.length - 1;
    if (index === lastArrInx) {
      return;
    } else {
      setPickerState({
        ...pickerState,
        valueGroups: {
          time: pickerState.optionGroups.time[index + 1]
        }
      });
    }
  };
  const handleClosePicker = () => {
    dispatch(change('ScheduleForm', 'duration', pickerState.valueGroups.time));
    dispatch(is_schedule_timepicker_false());
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={enter_Y_exit_OP}
      className="container schedule-date-timing"
    >
      <div className="row bg-white">
        <div className="col-12 py-1 d-flex justify-content-end align-items-center">
          <div
            className="border-start d-flex justify-content-end align-items-center ps-3 py-3"
            style={{ width: 'fit-content' }}
          >
            <i className="icon icon15 icn_arrow-up" onClick={handlePrev} />
            <i
              className="icon icon15 icn_arrow-down mx-5"
              onClick={handleNext}
            />
            <i
              className="icon icon15 icn_close-cyan"
              onClick={handleClosePicker}
            />
          </div>
        </div>
      </div>

      <div className="row h-100">
        <Picker
          optionGroups={pickerState.optionGroups}
          valueGroups={pickerState.valueGroups}
          onChange={handleChange}
          itemHeight={36}
        />
      </div>
    </motion.div>
  );
};

export default ScheduleTiming;

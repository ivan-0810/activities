import React from 'react';
import { useSelector } from 'react-redux';
import ScheduleHeader from './ScheduleHeader';
import ScheduleForm from './ScheduleForm';
import ScheduleIcons from './ScheduleIcons';
import ScheduleTiming from './ScheduleTiming';
import ScheduleDate from './ScheduleDate';
import { motion } from 'framer-motion';
import { bottomToTopVariants } from '../../constants/transition_variants';

const Schedule = () => {
  const schedule = useSelector(state => state.schedule);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={bottomToTopVariants}
      className="container schedule bg-secondary pt-4 px-3"
    >
      <ScheduleHeader />
      <ScheduleIcons />
      <ScheduleForm />
      {schedule?.time_picker && <ScheduleTiming />}
      {schedule?.date_picker && <ScheduleDate />}
    </motion.div>
  );
};

export default Schedule;

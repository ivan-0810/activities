import React from 'react';
import ActivitiesHeader from './ActivitiesHeader'
import ActivitiesTrack from './ActivitiesTrack';
import ActivitesSchedules from './ActivitiesSchedules';
import { motion } from 'framer-motion';
import { topToBottomVariants } from '../../constants/transition_variants'; 

const Activities = () => {
  return (
      <motion.div initial="initial"
      animate="enter"
      exit="exit"
      variants={topToBottomVariants}
      >
      <ActivitiesHeader />
      <div className="container">
      <ActivitiesTrack />
      <ActivitesSchedules />
    </div>
      </motion.div>
    
  );
};

export default Activities;

import React from 'react';
import surfingPic from '../../styles/assets/images/surfing.png';
import hikingPic from '../../styles/assets/images/hiking.png';
import weightsPic from '../../styles/assets/images/weights.png';
import spiningPic from '../../styles/assets/images/spinning.png';
import ActivityCard from './ActivityCard';
import { activites } from '../../constants/activities';

const ActivitiesTrack = () => {
  const pics = [surfingPic, hikingPic, weightsPic, spiningPic];
  return (
 
        <div className="row px-3">
              <div className="col-12">
              <h2 className='text-dark text-center py-3'>{activites.activities_track.main_title}</h2>
              </div>
          {activites.activities_track.activityCards.map((activity, index) => (
            <ActivityCard
              key={index * 63274}
              url={pics[index]}
              title={activity.title}
              text={activity.text}
            />
          ))}
        </div>
  
  );
};

export default ActivitiesTrack;

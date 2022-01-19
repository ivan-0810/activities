import React, { useEffect, useState } from 'react';
import { activites } from '../../constants/activities';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ActivityDay from './ActivitiyDay';
import { isEmpty } from 'lodash';
const ActivitesSchedules = () => {
  const activitiesState = useSelector(state => state.activities);

  const cutDay = day => {
    const cutted = day.slice(0, 2);
    return cutted;
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="text-dark text-capitalize font-weight-bold">
            {activites.activities_scheduled.main_title}
          </h2>
        </div>
        <div className="col-12">
          {isEmpty(activitiesState) ? (
            <p className="eu-light text-teal fs-14">
              {activites.activities_scheduled.excerpt}
            </p>
          ) : (
            <div className="row">
              <div className="col-12">
                {Object.keys(activitiesState).map((day, index) => (
                  <div key={index *634712} className='pb-4 '>
                    <h6 className='rs-demi text-sage fs14 text-uppercase'>
                      {activitiesState[day].month}{' '}
                      {cutDay(activitiesState[day].day)}
                    </h6>
                    <h4 className='text-dark eu-bold fs18'>{activitiesState[day].weekDay}</h4>
                 <div className="d-flex no-scrolbar text-nowrap overflow-auto">
                 {activitiesState[day].dailyActivities.map((activity, inx) => (
                      <ActivityDay key={index * 64327} activity={activity} />
                    ))}
                     <ActivityDay />
                     <ActivityDay />
                     <ActivityDay />
                     <ActivityDay />
                     <ActivityDay />
                   
                 </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-12 px-3 py-3">
          <div className="row mx-0">
            <div className="col-12 ">
              {' '}
              <Link
                to="/schedule"
                className="btn-group bg-primary rounded-pill py-3 d-flex justify-content-center align-items-center"
                role="group"
              >
                <i className="icon icn_plus icon30 me-3" />
                <button className="bg-transparent border-0 ls-21 fs-14 text-white rs-medium text-uppercase">
                  {activites.activities_scheduled.button_txt}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitesSchedules;

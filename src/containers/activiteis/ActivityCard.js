import React from 'react';
import IconCard from '../../components/icons/IconCard';
import { Link } from 'react-router-dom';

const ActivityCard = ({ url, title, text }) => {
  return (
    <div className="col-6 ">
      <Link to="/">
        <div className="activity-card mb-4 card border-0 box-shadow-2">
          <div className="img-wrapper">
            <img src={url} alt={`image-${title}`} />
          </div>
          <div className="content-wrapper pt-4 pb-2 position-relative">
            <IconCard title={title} />
            <h5 className="text-capitalize text-center text-secondary font-weight-bold fs-15 mb-1 mt-3">
              {title}
            </h5>
            <h6 className="text-uppercase text-center fs-12 text-gray-700 rs-medium">
              {text}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActivityCard;

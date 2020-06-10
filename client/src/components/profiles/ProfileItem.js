import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    objective,
    profession,
    company,
    city,
    country
  }
}) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <h3>{objective}</h3>
        <p className="my">
          {profession} {company && <span> at {company}</span>}
        </p>
        <p className="my">
          {city && <span>{city}</span>}
          {country && <span>, {country}</span>}
        </p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;

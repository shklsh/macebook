import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-secret text-primary" /> Edit Profile
      </Link>
    </div>
  );
};

export default DashboardActions;

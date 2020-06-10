import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileTop from '../profile/ProfileTop';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user-astronaut" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className="my-1">
            <DashboardActions />
          </div>
          <div className="my-1">
            <button className="btn btn-primary" onClick={() => deleteAccount()}>
              <i className="fas fa-user-astronaut" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You need to setup a profile, please add some information</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create a profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);

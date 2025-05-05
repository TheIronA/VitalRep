import React from 'react';

const AccountPage = () => {
  return (
    <div className="page-container">
      <div className="card welcome-card">
        <h1 className="generated-homepage-class-2">
          <span className="generated-homepage-class-3">Your Account</span>
        </h1>
        <p className="generated-homepage-class-4">
          Manage your profile, preferences, and account settings.
        </p>
      </div>

      <div className="card">
        <div className="account-placeholder">
          <h2>Coming Soon</h2>
          <p>Account management features will be available in a future update. You'll be able to:</p>
          <ul>
            <li>Update your profile information</li>
            <li>Manage notification preferences</li>
            <li>Set fitness goals</li>
            <li>Connect with fitness tracking devices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountPage; 
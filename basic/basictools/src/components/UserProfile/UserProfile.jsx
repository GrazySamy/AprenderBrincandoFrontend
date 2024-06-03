import React, { useState } from 'react';
import styles from './UserProfile.module.css';


const UserProfile = ({ user, onLogout }) => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={styles.userProfile}>
      <img src={user.avatar} alt={user.username} className={styles.userAvatar} onClick={toggleDropdown} />

      {dropdownVisible && (
        <div className={styles.dropdownMenu}>
          <button onClick={onLogout} className={styles.logoutButton}>Logout</button>
        </div>
      )}

    </div>
  );
};

export default UserProfile;

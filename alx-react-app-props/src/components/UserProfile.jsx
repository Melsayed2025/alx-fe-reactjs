import React, { useContext } from "react";
import UserContext from "./components/UserContext";

const UserProfile = () => {
  const userProfile = useContext(UserContext);

  return (
    <div className="user-profile">
      <h2>{userProfile.name}</h2>
      <p>Age: {userProfile.age}</p>
      <p>Bio: {userProfile.bio}</p>
    </div>
  );
};

export default UserProfile;

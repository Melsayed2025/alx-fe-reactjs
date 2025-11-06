
import UserContext from './components/UserContext';
import React ,{ useContext } from 'react';

function UserDetails {
  
const UserData = useContext(UserContext);

return (
    <div>
      <p>Name: {UserData.name}</p>
      <p>Email: {UserData.email}</p>
    </div>
  );
}

export default UserDetails;
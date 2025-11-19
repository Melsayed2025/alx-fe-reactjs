<<<<<<< HEAD

import UserContext from './components/UserContext';
import React ,{ useContext } from 'react';

function UserDetails (){
  
const userData = useContext(UserContext);

return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
=======
import { useContext } from 'react';
import UserContext from './UserContext'; // تم تصحيح مسار الاستيراد

function UserDetails() {
  // استخدام useContext لسحب البيانات مباشرة
  const userData = useContext(UserContext);

  // التأكد من وجود البيانات قبل العرض
  if (!userData) {
    return <div>Loading user data...</div>;
  }
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>User Details</h2>
      <p>Name: <strong>{userData.name}</strong></p>
      <p>Email: <strong>{userData.email}</strong></p>
>>>>>>> 33e3e521815760275d98343992391da1597c409a
    </div>
  );
}

<<<<<<< HEAD
export default UserDetails;
=======
export default UserDetails;
>>>>>>> 33e3e521815760275d98343992391da1597c409a

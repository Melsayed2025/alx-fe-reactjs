<<<<<<< HEAD
import ProfilePage from './components/ProfilePage';
import UserProfile from "./components/UserProfile";
=======
import React from 'react'; // يجب استيراد React
import Header from './Header'; // تم تصحيح المسار
import MainContent from './MainContent'; // تم تصحيح المسار
import Footer from './Footer'; // تم تصحيح المسار
import Counter from './Counter'; // تم تصحيح المسار
import UserProfile from './UserProfile'; // تم تصحيح المسار
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // هذا المسار صحيح
>>>>>>> 33e3e521815760275d98343992391da1597c409a

import UserContext from './components/UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>

<div>
<ProfilePage/>
<UserProfile/>
</div>
      </UserContext.Provider>

  ) ;
}

export default App;

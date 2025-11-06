import ProfilePage from './components/ProfilePage';
import UserProfile from "./components/UserProfile";

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
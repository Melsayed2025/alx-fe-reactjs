import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>

<div>
<ProfilePage/>

</div>
      </UserContext.Provider>

  ) ;
}

export default App;
import { useState } from 'react';
import './App.css';
import LoginCard from './components/loginCard/loginCard';
import PostPage from './components/postPage/postPage';

function App() {
  const [user, setUser] = useState("")
  
  return (
  <>
    {user ? <PostPage user={user} /> :  <LoginCard setUser={setUser} /> }
  </>
  )
}

export default App;

import './App.css';
import CardNotification from './components/cardNotification/cardNotification';
import CardPost from './components/cardPost/cardPost';
import Posts from './static/data';

function App() {
  
  return <div className="App p-16">
    <div className="flex justify-center gap-3">
    <div className="media w-8/12 flex flex-col items-end">
    {Posts.map((post) => (
      <CardPost key={post.usernmae} />
    ))}
    </div>
    <CardNotification/>
    </div>

  </div>;
}

export default App;

import './App.css';
import CardPost from './components/cardPost/cardPost';

function App() {
  return <div className="App p-16">
    <div className="flex justify-center gap-3">
    <div className="media w-8/12 flex justify-end">
    <CardPost/>
    </div>
    <div className='flex justify-start notification-container bg-emerald-400 w-4/12 '>notif content</div>
    </div>

  </div>;
}

export default App;

import './App.css';
import HomePage from './components/HomePage/HomePage'
import SigninPage from './components/SigninPage/SigninPage';

function App() {
  return (
    <div className="App">
      {/* <SigninPage/> */}
      <HomePage className="overflow-y-hidden" />
    </div>
  );
}

export default App;

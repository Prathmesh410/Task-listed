import './App.css';
import HomePage from './components/HomePage/HomePage'
import SigninPage from './components/SigninPage/SigninPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

     <Routes>
      <Route path="/signin" element={<SigninPage/>}/>
      <Route path='/' element={<HomePage/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

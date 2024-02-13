import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Feed from './pages/Feed';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/feed' element={<Feed/>}/>
    </Routes>

    </div>
    </Router>
  );
}

export default App;

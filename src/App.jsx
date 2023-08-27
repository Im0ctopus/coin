import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Navbar from './View/Navbar'

import Main from './View/Main';

function App() {
  var mainTitle = '$ShitCoin';
  document.title = mainTitle;
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App

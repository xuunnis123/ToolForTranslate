
import Header from './components/Header';
import Footer from './components/Footer';
import Translate from './components/TranslateScreen';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Container, } from 'react-bootstrap';
function App() {
  return (
   
      <Router>
      <Header />
        <Routes>
            <Route exact path='/' element={<HomeScreen/>} />
            <Route path='/translate' element={<Translate/>} />
        </Routes>
      

      <Footer />
      </Router>
   
  );
}

export default App;

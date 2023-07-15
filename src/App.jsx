import { BrowserRouter, Routes, Route} from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


const App = () => {
  return(
      <BrowserRouter>
              <Routes>
                  <Route path='/' exact element={<WelcomePage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/home' element={<HomePage />} />
              </Routes>
      </BrowserRouter>
  );
}

export default App;


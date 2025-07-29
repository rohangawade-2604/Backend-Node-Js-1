
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Signup} from './Login_Compo/SignUp.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} /> {/* default to login */}
      </Routes>
    </Router>
  );
};

export default App;

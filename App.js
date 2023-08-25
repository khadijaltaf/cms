import React from 'react';
import{BrowserRouter, Routes , Route} from 'react-router-dom'

import Signup from './components/Signup/Signup'





function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

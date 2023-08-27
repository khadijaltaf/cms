import React from 'react';
import{BrowserRouter, Routes, Route } from 'react-router-dom'

import ColorSchemeToggle from './ColorSchemeToggle';
import CountrySelector from './CountrySelector';
import Dashboard from './Dashboard';
import DropZone from './DropZone';
import EditorToolBar from './EditorToolBar';
import FileUpload from './FileUpload';
import Header from './Header';
import MuiLogo from './MuiLogo';
import MyProfile from './MyProfile';
import Sidebar from './Sidebar';


function Main() {
  return (
   <BrowserRouter>
     <Routes>
         <Route path='/ColorSchemeToggle' element={<ColorSchemeToggle/>} />
         <Route path='/CountrySelector' element={<CountrySelector/>} />
         <Route path='/CountrySelector' element={<CountrySelector/>} />
    
         <Route path='/Dashboard' element={<Dashboard/>} />
         <Route path='/Dropzone' element={<DropZone/>} />
         <Route path='/EditorToolBar' element={<EditorToolBar/>} />
         <Route path='/FileUpload' element={<FileUpload/>} />
         <Route path='/Header' element={<Header/>} />
         <Route path='/Muilogo' element={<MuiLogo/>} />
         <Route path='/MyProfile' element={<MyProfile/>} />
         <Route path='/Sidebar' element={<Sidebar/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default Main;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import UploadIP from './pages/UploadIP';
export default function App(){
return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Landing/>} />
<Route path='/upload' element={<UploadIP/>} />
</Routes>
</BrowserRouter>
);
}
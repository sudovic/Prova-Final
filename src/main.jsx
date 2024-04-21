import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AsteroidList from './AsteroidList';
import AsteroidDetails from './AsteroidDetails';
import SobreMim from './SobreMim';



ReactDOM.createRoot(document.getElementById('root')).render(


<React.StrictMode>
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AsteroidList />} />
            <Route path="/asteroide/:id" element={<AsteroidDetails />} />
            <Route path="/sobre-mim" element={<SobreMim />} />
        </Routes>
    </BrowserRouter>
</React.StrictMode>
  
) 
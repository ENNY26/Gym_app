
import React from 'react'
import ReactDOM from 'react-dom/client'; // Fix this import
import App from './App';  // Main App component
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
     
    
);
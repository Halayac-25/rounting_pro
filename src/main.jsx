import { createRoot } from 'react-dom/client';
import Header from './Components/Header';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Header/>
  <App/>
  </BrowserRouter>

  

 
);

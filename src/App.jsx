
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

import { Route , Routes } from "react-router-dom";


function App(){
    return <Routes>

        <Route path="/" element = {<Home/>}> </Route>
        <Route path="/About" element = {<About/>}> </Route>
        <Route path="/Contact" element = {<Contact/>}> </Route>
        <Route path="/Service" element = {<Service/>}> </Route>

    </Routes>
}

export default App
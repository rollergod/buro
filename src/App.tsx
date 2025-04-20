import React from 'react';
import {Home} from "./pages/Home.tsx";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {Contacts} from "./components/Contacts.tsx";
import {Information} from "./pages/Information.tsx";
import {ServicesPage} from "./pages/ServicesPage.tsx";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {RitualPage} from "./pages/RitualPage.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/buro' element={<Home/>}/>
                <Route path='/services' element={<ServicesPage/>}/>
                <Route path='/rituals' element={<RitualPage/>}/>
                <Route path='/contacts' element={<Contacts isPage={true}/>}/>
                <Route path='/information' element={<Information/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

import React from 'react';
import {Home} from "./pages/Home.tsx";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {Contacts} from "./components/Contacts.tsx";
import {Information} from "./pages/Information.tsx";
import {ServicesPage} from "./pages/ServicesPage.tsx";
import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {

    return (

        <div className="App">
            <Header/>
            <Routes>
                <Route index path='/' element={<Home/>}/>
                <Route path='/services' element={<ServicesPage/>}/>
                <Route path='/contacts' element={<Contacts isPage={true}/>}/>
                <Route path='/information' element={<Information/>}/>
            </Routes>
            {/*<ServicesPage />*/}
            {/*<Information />*/}
            {/*<Contacts isPage={true}/>*/}
            <Footer/>
        </div>

        // <div className="App">
        //     <Header/>
        //     <ServicesPage />
        //     {/*<Home/>*/}
        //     {/*<Information />*/}
        //     {/*<Contacts isPage={true}/>*/}
        //     <Footer/>
        // </div>
    );
}

export default App;

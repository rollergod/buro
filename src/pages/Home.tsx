import React from 'react'
import {Header} from "../components/Header.tsx";
import {AboutUs} from "../components/AboutUs.tsx";
import {Services} from "../components/Services.tsx";
import {Packets} from "../components/Packets.tsx";
import {Contacts} from "../components/Contacts.tsx";
import {Carousel} from "../components/Carousel.tsx";
import {Accordion} from "../components/Accordion.tsx";
import {Footer} from "../components/Footer.tsx";

export const Home = () => {

    const items = [
        {content: 'lorem10lorem10lorem10 lorem10lorem10lorem10 lorem10lorem10', title: 'Первый вопрос'},
        {content: 'lorem10lorem10lorem10 lorem10lorem10lorem10 lorem10lorem10', title: 'Второй вопрос'}
    ]

    return (
        <div>
            <Header/>
            <AboutUs/>
            <Services/>
            <Packets/>
            <Contacts/>
            <Carousel/>
            <Accordion items={items}/>
            <Footer />
        </div>
    )
}
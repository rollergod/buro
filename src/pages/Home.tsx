import React, {useEffect, useState} from 'react'
import {AboutUs} from "../components/AboutUs.tsx";
import {Services} from "../components/Services.tsx";
import {Packets} from "../components/Packets.tsx";
import {Contacts} from "../components/Contacts.tsx";
import {Carousel} from "../components/Carousel.tsx";
import {Accordion} from "../components/Accordion.tsx";

export interface Popular
{
    title: string;
    content: string;
}

export interface Root
{
    services: Service[];
    popular: Popular[];
}

export interface Service
{
    title: string;
    imageUrl: string;
}

export const Home = () => {

    const [data, setData] = useState<Root>({
        services: [],
        popular: []
    });

    useEffect(() => {
       fetch('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/popular.json')
           .then(res => res.json())
           .then(items => {
               setData(items);
               console.log(items);
           });
   },[])

    return (
        <div>
            <AboutUs/>
            <Services services={data.services}/>
            <Packets/>
            <Contacts/>
            <Carousel/>
            <Accordion items={data.popular}/>
        </div>
    )
}
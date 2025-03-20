import React, {useEffect, useState} from 'react'
import {AboutUs} from "../components/AboutUs.tsx";
import {Services} from "../components/Services.tsx";
import {Packets} from "../components/Packets.tsx";
import {Contacts} from "../components/Contacts.tsx";
import {Carousel} from "../components/Carousel.tsx";
import {Accordion} from "../components/Accordion.tsx";
import {useQuery} from "react-query";
import {API} from "../API.ts";

export const Home = () => {
    const { data, isLoading } = useQuery({
        queryKey: 'data',
        queryFn: API.getItems,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) return <div>Идёт загрузка...</div>;
    return (
        <div>
            <AboutUs/>
            <Services services={data.services}/>
            <Packets/>
            <Contacts schedule={data.schedule} number={data.number}/>
            <Carousel/>
            <Accordion items={data.popular}/>
        </div>
    )
}
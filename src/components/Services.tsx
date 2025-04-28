import React from 'react'
import '../styles/Services.css'
import {Link} from "react-router-dom";
import {Service} from "../types";

export const Services: React.FC<Service[]> = ({services}) => {
    return (
        <>
            <div className="services">
                <div className='container'>
                    <h2 className='services__title title'>Услуги</h2>
                    <div className='services__block'>
                        {
                            services.map(item => (
                                <div className='service'>
                                    <img src={item.imageUrl} alt="#"/>
                                    <h5>{item.title}</h5>
                                </div>
                            ))
                        }
                    </div>
                    <Link to="/services#services" className="link-button">Подробнее</Link>
                </div>
            </div>
        </>
    )
}
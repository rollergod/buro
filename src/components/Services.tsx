import React from 'react'
import '../styles/Services.css'
import {Popular, Service} from "../pages/Home";

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
                    <a href="#" className="link-button">Подробнее</a>
                </div>
            </div>
        </>
    )
}
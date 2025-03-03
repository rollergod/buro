import React from 'react'
import '../styles/Services.css'

export const Services = () => {
    return (
        <>
            <div className="services">
                <div className='container'>
                    <h2 className='services__title'>Услуги</h2>
                    <div className='services__block'>
                        <div className='service'>
                            <img src={require('../images/hearse.png')} alt="#"/>
                            <h5>Транспортировка</h5>
                        </div>
                        <div className='service'>
                            <img src={require('../images/hearse.png')} alt="#"/>
                            <h5>Транспортировка</h5>
                        </div>
                        <div className='service'>
                            <img src={require('../images/hearse.png')} alt="#"/>
                            <h5>Транспортировка</h5>
                        </div>
                        <div className='service'>
                            <img src={require('../images/hearse.png')} alt="#"/>
                            <h5>Транспортировка</h5>
                        </div>
                        <div className='service'>
                            <img src={require('../images/hearse.png')} alt="#"/>
                            <h5>Транспортировка</h5>
                        </div>
                        <div className='service'>
                            <img src={require('../images/hearse.png')} alt="#"/>
                            <h5>Транспортировка</h5>
                        </div>
                    </div>
                    <a href="#" className="link-button">Подробнее</a>
                </div>
            </div>
        </>
    )
}
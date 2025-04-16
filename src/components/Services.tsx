import React from 'react'
import '../styles/Services.css'
import {Popular, Service} from "../pages/Home";
import {Link} from "react-router-dom";

export const Services: React.FC<Service[]> = ({services}) => {
    return (
        <>
            <div className="services">
                <div className='container'>
                    <h2 className='services__title title'>Услуги</h2>
                    <div className='services__block'>
                        {/*<div className='service'>*/}
                        {/*    <img src={require('../images/paper.png')} alt="#"/>*/}
                        {/*    <h5>Оформление документов</h5>*/}
                        {/*</div>*/}
                        {/*<div className='service'>*/}
                        {/*    <img src={require('../images/coffin.png')} alt="#"/>*/}
                        {/*    <h5>Организация похорон</h5>*/}
                        {/*</div>*/}
                        {/*<div className='service'>*/}
                        {/*    <img src={require('../images/hearse (1).png')} alt="#"/>*/}
                        {/*    <h5>Ритуальный транспорт</h5>*/}
                        {/*</div>*/}
                        {/*<div className='service'>*/}
                        {/*    <img src={require('../images/checklist.png')} alt="#"/>*/}
                        {/*    <h5>Организация перевозки</h5>*/}
                        {/*</div>*/}
                        {/*<div className='service'>*/}
                        {/*    <img src={require('../images/black-ribbon.png')} alt="#"/>*/}
                        {/*    <h5>Изготовление табличек и лент</h5>*/}
                        {/*</div>*/}
                        {/*<div className='service'>*/}
                        {/*    <img src={require('../images/cleaning.png')} alt="#"/>*/}
                        {/*    <h5>Уборка и уход</h5>*/}
                        {/*</div>*/}
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
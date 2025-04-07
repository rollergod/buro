import React from "react";
import '../styles/AboutUs.css';
import {Link} from "react-router-dom";

export const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='container'>
                <h2 className='title'>О нас</h2>
                <div className='about-us__info'>
                    <div className='about-us__image'></div>
                    <div>
                        <div className='about-us__text'>
                            <p>Мы предоставляем современный и высококачественный сервис ритуальных услуг</p>
                            <p>
                                Наша команда консультирует и организовывает весь комплекс похоронных мероприятий,
                                помогает
                                получить необходимые справки и оформить социальные пособия на возврат денежных средств
                                от
                                государства
                            </p>
                            <p>
                                Мы помогаем людям организовать похоронные процессы и справиться с любыми возникшими
                                сложностями по всей территории Краснодарского края
                            </p>
                        </div>
                        <Link to='/services#services' className="link-button">Подробнее</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
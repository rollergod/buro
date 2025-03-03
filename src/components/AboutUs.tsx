import React from "react";
import '../styles/AboutUs.css';

export const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='container'>
                <h2 className='about-us__title'>О нас</h2>
                <div className='about-us__info'>
                    {/*<img className='about-us__image' alt='#' src='../logo.svg'/>*/}
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
                        <a href="#" className="link-button">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import '../styles/Header.css'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__list-item"><Link to='/' className='link'>Главная</Link></li>
                            <li className="header__list-item"><Link className='link' to='/services'>Услуги</Link></li>
                            <li className="header__list-item"><Link className='link' to='/services'>Пакеты</Link></li>
                            <li className="header__list-item"><Link className='link' to='/contacts'>Контакты</Link></li>
                            <li className="header__list-item"><Link className='link' to='/contacts'>О нас</Link></li>
                        </ul>
                    </nav>
                    <div className='header__phone'>
                        <a href='#'>+7(999)999-99-99</a>
                    </div>
                    <div className='header__address'>
                        <span>г. Москва</span>
                        <br/>
                        <span>Ходынский бульвар, 5.</span>
                    </div>
                </div>
            </header>

            <main className="main">
                <div className="container">
                    <div className="welcome">
                        <h1 className="welcome__header">Помогаем достойно проводить близких в последний путь</h1>
                        <h3 className="welcome__text">Мы ценим жизнь, ценим людей, которые были с нами.</h3>
                        <a href="#" className="link-button white">Консультация</a>
                    </div>
                </div>
            </main>
        </>
    )
}
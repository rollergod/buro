import React, {useEffect, useState} from 'react'
import '../styles/Header.css'
import {Link} from "react-router-dom";
import {Root} from "../types";

export const Header = () => {

    const [data, setData] = useState<Root>({
        schedule: '',
        number: ''
    });

    useEffect(() => {
        fetch('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/popular.json')
            .then(res => res.json())
            .then(items => {
                setData(items);
            });
    },[])

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
                            <li className="header__list-item"><Link className='link' to='/information'>О нас</Link></li>
                        </ul>
                    </nav>
                    <div className='header__phone'>
                        <a href='#'>{data.number}</a>
                    </div>
                    <div className='header__address'>
                        <span>г. Архангельск</span>
                        <br/>
                        <span>Гагарина, 5.</span>
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
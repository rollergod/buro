import '../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__section'>
                    <div className='footer__menu'>
                        <ul>
                            <li><a className='link' href='#'>Главная</a></li>
                            <li><a className='link' href='#'>Услуги</a></li>
                            <li><a className='link' href='#'>Пакеты</a></li>
                            <li><a className='link' href='#'>Отзывы</a></li>
                            <li><a className='link' href='#'>Контакты</a></li>
                            <li><a className='link' href='#'>О нас</a></li>
                        </ul>
                    </div>
                    <div>
                        <iframe style={{borderRadius:'10px'}}
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f9423f587a04ea12324063e4b917a7e6eb9c0f32c95be4663e413f377156a15&amp;source=constructor"
                            width="380" height="200" frameBorder="0"></iframe>
                    </div>
                    <div className='footer__form'>
                        <input
                            type="text"
                            placeholder="Как к вам обращаться?"
                            className="input-field"
                        />
                        <input
                            type="text"
                            placeholder="Мессенджер (Telegram или Whatsapp)"
                            className="input-field"
                        />
                        <button className="submit-button">
                            Отправить
                        </button>
                    </div>
                </div>
                <div className='footer__line'>
                    <img src={require('../images/line.png')} alt='#'/>
                    <div className='underline'>
                        <a href='#'>Наверх</a>
                        <p style={{color: 'white'}}>© 2025 Ритуальные услуги </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
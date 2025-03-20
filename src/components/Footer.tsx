import '../styles/Footer.css';
import {useState} from "react";
import emailjs from "emailjs-com";

export const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        messenger: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_fgiwbd8',
            'template_dgeqypr',
            formData,
            '40hZBLogyrpI0o7Rw'
        ).then(
            (result) => {
                console.log('Email sent:', result.text);
                alert('Письмо отправлено!');
            },
            (error) => {
                console.log('Ошибка:', error.text);
                alert('Ошибка при отправке');
            }
        );
    };

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
                        <iframe style={{borderRadius: '10px'}}
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A70c37a2cb89263b3fedd754de25315ba8e8ebd5365619faed41f31292c44a4c1&amp;source=constructor"
                            width="380" height="200" frameBorder="0"></iframe>
                    </div>
                    <form onSubmit={handleSubmit} className='footer__form'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Как к вам обращаться?"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <input
                            type="text"
                            name="messenger"
                            placeholder="Мессенджер (Telegram или Whatsapp)"
                            value={formData.message}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <button type='submit' className="submit-button">
                            Отправить
                        </button>
                    </form>
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
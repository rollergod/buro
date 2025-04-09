import '../styles/Footer.css';
import {useState} from "react";
import emailjs from "emailjs-com";
import {Link} from "react-router-dom";

export const Footer = () => {

    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        emailjs.send(
            'service_fgiwbd8',
            'template_dgeqypr',
            formData,
            '40hZBLogyrpI0o7Rw'
        ).then(
            (result) => {
                console.log('Email sent:', result.text);
                alert('Письмо отправлено!');
                setLoading(false);
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
                            <li><Link to='/#' className='link'>Главная</Link></li>
                            <li><Link className='link' to='/services'>Услуги</Link></li>
                            <li><Link className='link' to='/services'>Пакеты</Link></li>
                            <li><Link className='link' to='/contacts'>Контакты</Link></li>
                            <li><Link className='link' to='/information'>О нас</Link></li>
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
                            type="tel"
                            name="messenger"
                            placeholder="Введите номер телефона (7 999 999 99 99)"
                            value={formData.message}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                        <button disabled={loading} type='submit'
                                className={`submit-button ${loading ? 'loading' : ''}`}>
                            {loading &&
                                <span className="spinner"></span>
                            }
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
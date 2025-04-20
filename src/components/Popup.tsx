import React, {useState} from 'react';
import '../styles/Popup.css';
import emailjs from "emailjs-com";

export const Popup: React.FC<{ isOpen: boolean, onClose: () => {} }> = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        messenger: '',
    });
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
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <div>
                    <img className='popup__image' src={require('../images/popupAngel.jpg')}/>
                </div>
                <div>
                    <h3 className='popup__header'>Мы сами свяжемся с вами</h3>
                    <form onSubmit={handleSubmit} className='popup__form'>
                        <input
                            type="text"
                            required
                            placeholder="Как к вам обращаться?"
                            className="input-field"
                        />
                        <input
                            type="text"
                            required
                            placeholder="Мессенджер (Telegram или Whatsapp)"
                            className="input-field"
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
                <p className='close-icon' onClick={onClose}>X</p>
            </div>
        </div>
    )
}
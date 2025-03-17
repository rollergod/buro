import React from 'react';
import '../styles/Popup.css';

export const Popup: React.FC<{ isOpen: boolean, onClose: () => {} }> = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <div>
                    <img className='popup__image' src={require('../images/popupAngel.jpg')}/>
                </div>
                <div className='popup__form'>
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
                    <button onClick={onClose}>Закрыть</button>
                    
                </div>

            </div>
        </div>
    )
}
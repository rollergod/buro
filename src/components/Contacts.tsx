import '../styles/Packets.css'
import '../styles/Contacts.css'
import React from 'react';

export const Contacts:React.FC<{isPage: boolean}> = ({isPage}) => {
    return (
        <div className='contacts'>
            <div className='container'>
                <h2 className='title'>Контакты</h2>
                <div className='contacts__block'>
                    <div className='text__block'>
                        <h5 className='block__title'>Свяжитесь с нами любым удобным для вас способом:</h5>
                        <div className='info__block'>
                            <div className='info__row'>
                                <div className='dot'></div>
                                <p>Г. Москва, Ходынский бульвар, 5.</p>
                            </div>
                            <div className='info__row'>
                                <div className='dot'></div>
                                <p>Ежедневно 10:00 - 19:00</p>
                            </div>
                            <div className='info__row'>
                                <div className='dot'></div>
                                <p><a href='#'>+7(999)999-99-99</a></p>
                            </div>
                        </div>

                    </div>
                    <div className='image__block'>
                        <div className='circle'><img src={require('../images/app.png')} alt='#'/></div>
                        <div className='circle'><img src={require('../images/telephone.png')} alt='#'/></div>
                        <div className='circle'><img src={require('../images/social.png')} alt='#'/></div>
                        <div className='circle'><img src={require('../images/video.png')} alt='#'/></div>
                    </div>
                </div>
                <div className='back__form'>
                    <h3 className="title">
                        Мы сами свяжемся с вами и обсудим все детали
                    </h3>
                    <div className="form-container">
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
                    </div>
                    <button className="submit-button">
                        Отправить
                    </button>
                </div>

                {isPage && <img style={{marginTop: '100px'}} src={require('../images/fullMap.png')} alt='#'/>}
            </div>
        </div>
    )
}
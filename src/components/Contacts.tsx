import '../styles/Packets.css'
import '../styles/Contacts.css'
import React, {useEffect, useState} from 'react';
import {Root} from "../types";

export const Contacts: React.FC<{ isPage: boolean, schedule: string, number: string }> =
    ({isPage, schedule, number}) => {

        const [data, setData] = useState<Root>({
            services: [],
            popular: [],
            schedule: '',
            number: ''
        });

        useEffect(() => {
            if (!schedule || !number) {
                fetch('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/popular.json')
                    .then(res => res.json())
                    .then(items => {
                        setData(items);
                    });
            }
        }, [])

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
                                    <p>Г. Архангельск, Гагарина, 42.</p>
                                </div>
                                <div className='info__row'>
                                    <div className='dot'></div>
                                    <p>{schedule ?? data.schedule}</p>
                                </div>
                                <div className='info__row'>
                                    <div className='dot'></div>
                                    <p><a className='info__row-number' href='#'>{number ?? data.number}</a></p>
                                </div>
                            </div>

                        </div>
                        <div className='image__block'>
                            <div className='circle'>
                                <a target='_blank' href='https://t.me/+79532665775'>
                                    <img src={require('../images/app.png')} alt='#'/>
                                </a>
                            </div>
                            <div className='circle'>
                                <a href='tel:+79532665775'>
                                    <img src={require('../images/telephone.png')} alt='#'/>
                                </a>
                            </div>
                            <div className='circle'>
                                <a target='_blank'
                                   href='https://api.whatsapp.com/send/?phone=79532665775&text=Здравствуйте, я с сайта&type=phone_number&app_absent=0'>
                                    <img src={require('../images/telephone.png')} alt='#'/>
                                </a>
                            </div>
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
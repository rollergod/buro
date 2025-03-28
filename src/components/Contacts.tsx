import '../styles/Packets.css'
import '../styles/Contacts.css'
import React, {useState} from 'react';
import {useQuery} from "react-query";
import {API} from "../API.ts";
import emailjs from 'emailjs-com';

export const Contacts: React.FC<{ isPage: boolean, schedule: string, number: string }> =
    ({isPage, schedule, number}) => {

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

        const {data, isLoading} = useQuery({
            queryKey: 'data',
            queryFn: API.getItems,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
        });

        if (isLoading) return <div>Идёт загрузка...</div>;
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
                        <form onSubmit={handleSubmit} className="form-container">
                            <div className='empty'>
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
                            </div>
                            <button type='submit' className="submit-button">
                                Отправить
                            </button>
                        </form>
                    </div>

                    {isPage && <img style={{marginTop: '100px'}} src={require('../images/fullMap.png')} alt='#'/>}
                </div>
            </div>
        )
    }
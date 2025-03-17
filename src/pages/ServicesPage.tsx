import '../styles/ServicesPage.css'
import {useEffect, useState} from "react";
import {Popup} from "../components/Popup.tsx";

interface Root {
    subTitle: string;
    items: Service[]
}

interface Service {
    title: string;
    text: string;
    imageUrl: string;
}

export const ServicesPage = () => {

    const [services, setServices] = useState<Root[]>([])

    useEffect(() => {
        fetch('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/services.json')
            .then(res => res.json())
            .then(items => {
                setServices(items);
            });
    }, [])

    const [isPopupOpen, setPopupOpen] = useState(false);
    return (
        <div>
            <div className='container'>
                <h2 className='services__title title'>Услуги</h2>

                {
                    services.map(item => (
                        <>
                            <h3 className='servicesPage__item-section--title'>{item.subTitle}</h3>
                            <div className='servicesPage__block'>
                                {
                                    item.items.map((item) => (
                                        <div className='servicesPage__item'>
                                            <img className='servicesPage__item--img'
                                                 src={item.imageUrl} alt='#'/>
                                            <div className='servicesPage__item--text'>
                                                <h4 className='servicesPage__item--title'>{item.title}</h4>
                                                <p>{item.text}</p>
                                                <a onClick={() => setPopupOpen(true)}>Заказать услугу</a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
                <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}/>
            </div>
        </div>
    )
}
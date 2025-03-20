import '../styles/ServicesPage.css'
import {useState} from "react";
import {Popup} from "../components/Popup.tsx";
import {ServiceRoot} from "../types";
import {useQuery} from "react-query";
import {API} from "../API.ts";

export const ServicesPage = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const {data, isLoading} = useQuery({
        queryKey: 'services',
        queryFn: API.getServices,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });


    if (isLoading) return <div>Идёт загрузка...</div>;
    return (
        <div>
            <div className='container'>
                <h2 className='services__title title'>Услуги</h2>

                {
                    data.map(item => (
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
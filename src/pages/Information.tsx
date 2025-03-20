import '../styles/Information.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useQuery} from "react-query";
import {API} from "../API.ts";

function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
        <div
            onClick={onClick}
        >
            <img style={{width: '19px', height: '28px'}} className={className} src={require('../images/rightArrow.png')}
                 alt='#'/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (
        <div
            onClick={onClick}
        >
            <img style={{width: '19px', height: '28px'}} className={className} src={require('../images/leftArrow.png')}
                 alt='#'/>
        </div>
    );
}

export const Information = () => {

    const { data, isLoading } = useQuery({
        queryKey: 'data',
        queryFn: API.getItems,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    };

    if (isLoading) return <div>Идёт загрузка...</div>;
    return (
        <div>
            <div className='container'>
                <h2 style={{marginTop: '100px'}} className='title'>О нас</h2>
                <div className='information__block'>
                    <h5 className='information__header'>В жизни бывают моменты, к которым невозможно подготовиться.
                        Утрата близкого человека — одно из
                        самых тяжелых испытаний, и в этот сложный период особенно важно чувствовать поддержку и
                        понимание.</h5>
                    <p style={{marginBottom: '25px'}} className='information__text'>
                        Наша компания создана, чтобы помогать людям достойно проводить своих родных в последний
                        путь. Мы глубоко осознаем, насколько хрупок и ценен каждый прожитый миг, и стремимся сделать
                        процесс прощания спокойным и достойным.
                    </p>

                    <div className="slider-container">
                        <Slider {...settings}>
                            <div style={{marginRight: '50px'}}>
                                <img src={require('../images/grob.png')} alt='#'/>
                            </div>
                            <div>
                                <img src={require('../images/grob.png')} alt='#'/>
                            </div>
                            <div>
                                <img src={require('../images/grob.png')} alt='#'/>
                            </div>
                            <div>
                                <img src={require('../images/grob.png')} alt='#'/>
                            </div>
                        </Slider>
                    </div>

                    <p className='information__text'>Наша команда консультирует и организовывает весь комплекс
                        похоронных мероприятий, помогает
                        получить необходимые справки и оформить социальные пособия на возврат денежных средств от
                        государства</p>
                </div>

                <h2 style={{marginTop: '100px'}} className='title'>Наши ценности</h2>
                <div className='information__items'>
                    <div className='information__item'>
                        <img src={require('../images/wreath.png')} alt='#'/>
                        <h4>Забота и уважение</h4>
                        <p>Мы относимся к каждой истории с искренним сочувствием и тактом, помогая семьям сохранять
                            светлую память о своих близких.</p>
                    </div>
                    <div className='information__item'>
                        <img src={require('../images/to-do-list (1).png')} alt='#'/>
                        <h4>Традиции и внимание к деталям</h4>
                        <p>Мы с уважением относимся к различным традициям, вероисповеданиям и личным пожеланиям,
                            создавая атмосферу уюта и умиротворения.</p>
                    </div>
                    <div className='information__item'>
                        <img src={require('../images/heart (1).png')} alt='#'/>
                        <h4>Поддержка и доверие</h4>
                        <p>Мы помогаем пережить трудный период, беря на себя заботу об организации и создавая
                            пространство для светлых воспоминаний.</p>
                    </div>
                </div>
                <p className='information__text'>
                    Каждая семья сталкивается с горем по-своему, и мы всегда готовы предложить индивидуальный подход. Мы
                    понимаем, что прощание – это не просто формальность, а возможность выразить любовь, уважение и
                    благодарность ушедшему человеку.
                </p>
            </div>

            <div className='big-map'>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A70c37a2cb89263b3fedd754de25315ba8e8ebd5365619faed41f31292c44a4c1&amp;source=constructor"
                    width="100%" height="700" frameBorder="0"></iframe>
                <div className='map__item'>
                    <div className='map__item-text__block'>
                        <h2 className="map__item-header">Контакты</h2>
                        <p>Похоронное агентство <span className="italic">“Ритм”</span></p>
                        <p>Гагарина, 42.</p>
                        <p>{data.schedule}</p>
                        <p>mail.email@yandex.ru</p>
                        <p><a style={{color: '#000'}} href='tel:79532665775'>{data.number}</a></p>
                    </div>
                    <div className='image__block'>
                        <div style={{width: '70px', height: '70px'}} className='circle'>
                            <a target='_blank' href='https://t.me/+79532665775'>
                                <img
                                    style={{width: '40px', height: '40px'}} src={require('../images/app.png')} alt='#'/>
                            </a>
                        </div>
                        <div style={{width: '70px', height: '70px'}} className='circle'>
                            <a href='tel:79532665775'>
                                <img style={{width: '40px', height: '40px'}} src={require('../images/telephone.png')}
                                     alt='#'/>
                            </a>
                        </div>
                        <div style={{width: '70px', height: '70px'}} className='circle'>
                            <a target='_blank'
                               href='https://api.whatsapp.com/send/?phone=79532665775&text=Здравствуйте, я с сайта&type=phone_number&app_absent=0'>
                                <img
                                    style={{width: '40px', height: '40px'}} src={require('../images/telephone.png')}
                                    alt='#'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
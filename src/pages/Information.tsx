import '../styles/Information.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: false, // Убедимся, что все слайды одинаковые
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    };

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
                        [Название компании] создано, чтобы помогать людям достойно проводить своих родных в последний
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
                <div className='items__block'>
                    <div className='item'>
                        <img src={require('../images/wreath.png')} alt='#'/>
                        <h4>Забота и уважение</h4>
                        <p>Мы относимся к каждой истории с искренним сочувствием и тактом, помогая семьям сохранять
                            светлую память о своих близких.</p>
                    </div>
                    <div className='item'>
                        <img src={require('../images/to-do-list (1).png')} alt='#'/>
                        <h4>Традиции и внимание к деталям</h4>
                        <p>Мы с уважением относимся к различным традициям, вероисповеданиям и личным пожеланиям,
                            создавая атмосферу уюта и умиротворения.</p>
                    </div>
                    <div className='item'>
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
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f9423f587a04ea12324063e4b917a7e6eb9c0f32c95be4663e413f377156a15&amp;source=constructor"
                    width="1920" height="700" frameBorder="0"></iframe>
                <div className='map__item'>
                    <div className='map__item-text__block'>
                        <h2 className="map__item-header">Контакты</h2>
                        <p>Похоронное агентство <span className="italic">“Лютики”</span></p>
                        <p>Ходынский бульвар, 5.</p>
                        <p>Ежедневно с 10:00 - 19:00</p>
                        <p>mail.email@yandex.ru</p>
                        <p>+7(999)999-99-99</p>
                    </div>
                    <div className='image__block'>
                        <div style={{width: '70px', height: '70px'}} className='circle'><img
                            style={{width: '40px', height: '40px'}} src={require('../images/app.png')} alt='#'/></div>
                        <div style={{width: '70px', height: '70px'}} className='circle'><img
                            style={{width: '40px', height: '40px'}} src={require('../images/telephone.png')} alt='#'/>
                        </div>
                        <div style={{width: '70px', height: '70px'}} className='circle'><img
                            style={{width: '40px', height: '40px'}} src={require('../images/social.png')} alt='#'/>
                        </div>
                        <div style={{width: '70px', height: '70px'}} className='circle'><img
                            style={{width: '40px', height: '40px'}} src={require('../images/logo.png')} alt='#'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
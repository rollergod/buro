import React from 'react'
import './Packets.css'

export const Packets = () => {
    return (
        <>
            <div className='packets'>
                <div className='container'>
                    <h2 className='packets__title'>Этапы</h2>
                    <div className='container--outline'>
                        <div className="content">
                            <div className='top'>
                                <div className='content__block'>
                                    <div className='circle'>
                                        <span>1</span>
                                    </div>
                                    <p>Оформление документов</p>
                                </div>
                                <img src={require('../images/arrow.png')} alt='#'/>
                                <div className='content__block'>
                                    <div className='circle'>2</div>
                                    <p>Выбор ритуальных услуг</p>
                                </div>
                                <img src={require('../images/arrow.png')} alt='#'/>
                                <div className='content__block'>
                                    <div className='circle'>3</div>
                                    <p>Подготовка тела</p>
                                </div>
                            </div>
                            <div className='bottom'>
                                <div className='content__block'>
                                    <div className='circle'>5</div>
                                    <p>Захоронение</p>
                                </div>
                                <img src={require('../images/backhead-arrow.png')} alt='#'/>
                                <div className='content__block'>
                                    <div className='circle'>4</div>
                                    <p className='large'>Организация прощальной церемонии</p>
                                </div>
                                <img src={require('../images/roundedArrow.png')} alt='#'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
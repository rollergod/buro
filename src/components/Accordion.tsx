import React, {useState} from "react";
import '../styles/Accordion.css';

export const Accordion: React.FC<{ content: string, title: string }[]> = ({items}) => {
    const [openIndexes, setOpenedIndex] = useState([]);

    const toggleItem = (index) => {
        setOpenedIndex(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
    };

    return (
        <div className='accordion__block'>
            <div className='container'>
                <h2 className='accordion__title'>Частые вопросы</h2>
                <div style={{maxWidth: "600px", margin: "auto"}}>
                    {items.map((item, index) => (
                        <div key={index} style={{marginBottom: "10px"}}>
                            <button
                                onClick={() => toggleItem(index)}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 15px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                            >
                                <span className='accordion__item--title'>{item.title}</span>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "25px",
                                    height: "25px",
                                    border: "1px solid black",
                                    borderRadius: "50%",
                                    transition: 'border-color 0.2s ease-in-out',
                                    borderColor: openIndexes.includes(index) ? '#D4AF37' : 'black'
                                }}>
                                    <img
                                        src={require(openIndexes.includes(index) ? '../images/coloredArrow.png' : '../images/AccordionArrow.png' )}
                                        alt='#'
                                        style={{
                                            transform: openIndexes.includes(index) ? "rotate(180deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s",
                                        }}
                                    />
                                </div>
                            </button>
                            <div style={{borderBottom: "1px solid black", width: "100%"}}></div>
                            <div style={{
                                padding: openIndexes.includes(index) ? "10px 15px" : "0px 15px",
                                maxHeight: openIndexes.includes(index) ? "300px" : "0px",

                            }} className='accordion__item--content'>
                                {openIndexes.includes(index) && <div>{item.content}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

import {useState} from 'react';
import '../styles/RitualPage.css';
import '../styles/ServicesPage.css';
import {useQuery} from "react-query";
import {API} from "../API.ts";
import {Popup} from "../components/Popup.tsx";

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
}

export const RitualPage = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('гробы');

    const {data, isLoading} = useQuery({
        queryKey: 'rituals',
        queryFn: API.getRituals,
        refetchOnWindowFocus: false,
        staleTime: 0,
    });

    const filteredProducts: Product[] = data?.rituals.filter(
        product => product.category === selectedCategory
    ) ?? [];

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    if (isLoading) return <div>Идёт загрузка...</div>;
    return (
        <div className="products-page">
            <h1 className='title'>Ритуальные товары</h1>

            <div className="category-filter">
                {data.categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={selectedCategory === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="servicesPage__block">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                    <div key={product.id} className='servicesPage__item'>
                        <img className='servicesPage__item--img '
                             src={product.image} alt='#'/>
                        <div className='servicesPage__item--text'>
                            <h4 className='servicesPage__item--title'>{product.name}</h4>
                            <p>Цена: {product.price.toLocaleString()} ₽</p>
                            <a onClick={() => setPopupOpen(true)}>Заказать услугу</a>
                        </div>
                    </div>
                    ))
                ) : (
                    <p>Товары в этой категории отсутствуют</p>
                )}
                <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}/>
            </div>
        </div>
    );
};

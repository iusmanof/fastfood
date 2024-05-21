import { useState } from "react";
import '../style/Sort.scss'

function Sort(){
    const [isOpen, setIsOpen ] = useState(false);
    return <>
        <div onClick={() => setIsOpen(!isOpen)} className="sorting-label">Сортировка по:</div>
        {isOpen && (
            <ul className="sorting-list">
                <li>По популярности</li>
                <li>Цене (по возрастанию)</li>
                <li>Цене (по убыванию)</li>
                <li>А - Я</li>
                <li>Я - А</li>
            </ul>
        )}
    </>
}

export default Sort;
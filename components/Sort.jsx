import { useEffect, useState } from "react";
import '../style/Sort.scss'

function Sort(){
    const sortingList = ['По популярности', 'Цене (по возрастанию)', 'Цене (по убыванию)', 'А - Я', 'Я - А']

    const [ isOpenSorting, setIsOpenSorting ] = useState(false);
    const [ sortingStatus, setSortingStatus ] = useState(0)
    
    useEffect(()=> {
        console.log(sortingList[sortingStatus])
    }, [sortingStatus])

    return <>
        <div onClick={() => setIsOpenSorting(!isOpenSorting)} className="sorting-label">Сортировка по:</div>
        {isOpenSorting && (
            <ul className="sorting-list">
                {sortingList.map((name, i) => <li className={sortingStatus === i ? 'sorting-active' : ''} onClick={() => setSortingStatus(i)}>{name}</li>)}
            </ul>
        )}
    </>
}

export default Sort;
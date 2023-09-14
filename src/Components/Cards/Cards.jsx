import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropType from 'prop-types'

const Cards = ({handleSelectBtn}) => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="grid lg:grid-cols-3 gap-4 p-4 ">
                {
                    cards.map(card => <Card key={card.id} handleSelectBtn={handleSelectBtn} card={card} ></Card>)
                }
        </div>
        
    );
};
Cards.prototype ={
    handleSelectBtn: PropType.func
}

export default Cards;
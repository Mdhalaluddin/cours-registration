import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])


    return (
        <div className="flex">
            <div className='grid grid-cols-3 gap-4 p-4 '>
                {
                    cards.map(card => <Card key={card.id} card={card} ></Card>)
                }

            </div>
            <div className=''>
                <p className='text-3xl'>hlw</p>
            </div>
        </div>
        
    );
};

export default Cards;